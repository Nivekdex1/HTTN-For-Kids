import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'jsr:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', cors());
app.use('*', logger(console.log));

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Health check endpoint
app.get('/make-server-3669e37f/health', (c) => {
  console.log('Health check requested');
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'Healing to the Nations Magazine Server is running',
  });
});

// Helper function to get user from access token
async function getUserFromToken(accessToken: string | null) {
  if (!accessToken) return { error: 'No access token provided' };

  // Check for session expiration (REMOVED as per user request)
  // We now rely on client-side inactivity check to reset to cover page,
  // but the session itself remains valid indefinitely (or until KV eviction).

  /* 
  try {
    const parts = accessToken.split('_');
    const timestamp = parseInt(parts[parts.length - 1]);
    const sixHoursInMs = 6 * 60 * 60 * 1000;
    const now = Date.now();

    console.log(`Checking token: ${accessToken}`);
    console.log(`Timestamp: ${timestamp}, Now: ${now}, Limit: ${sixHoursInMs}`);

    if (now - timestamp > sixHoursInMs) {
      console.log('Session expired for token:', accessToken);
      // Optional: Clean up expired session
      await kv.del(`session:${accessToken}`);
      return { error: 'Session expired' };
    }
  } catch (e) {
    console.log('Error checking session expiration:', e);
  }
  */

  const sessionKey = `session:${accessToken}`;
  console.log(`Attempting to retrieve session from KV with key: ${sessionKey}`);
  const userId = await kv.get(sessionKey);

  if (!userId) {
    console.log(`Session NOT found in KV for key: ${sessionKey}`);
    // Debug: list some sessions to see if we are close
    try {
      const prefix = `session:session_user_`;
      const someSessions = await kv.getByPrefix(prefix);
      console.log(`Debug: Found ${someSessions.length} sessions starting with ${prefix}`);
    } catch (debugErr) {
      console.log('Debug list failed', debugErr);
    }
    return { error: 'Session not found in KV' };
  }

  console.log(`Session found. UserId: ${userId}`);

  const userData = await kv.get(`userId:${userId}`);
  if (!userData) {
    console.log(`User data not found for userId: ${userId}`);
    return { error: 'User data not found' };
  }

  return { user: userData };
}

// User signup (simplified - no Supabase Auth)
app.post('/make-server-3669e37f/signup', async (c) => {
  try {
    console.log('Signup request received');
    const body = await c.req.json();
    const { username, fullname, country, ageBracket } = body;

    console.log('Signup data:', { username, fullname, country, ageBracket });

    if (!username || !fullname || !country || !ageBracket) {
      return c.json({ error: 'All fields are required' }, 400);
    }

    // Check if username already exists
    const existingUser = await kv.get(`user:${username}`);
    if (existingUser) {
      console.log('Username already exists:', username);
      return c.json({ error: 'Username already exists' }, 400);
    }

    // Generate a unique user ID
    const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Store user data in KV store
    const userData = {
      id: userId,
      username,
      fullname,
      country,
      ageBracket,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      visitCount: 1,
    };

    await kv.set(`user:${username}`, userData);
    await kv.set(`userId:${userId}`, userData);

    // Increment total user count
    const userCount = (await kv.get('analytics:userCount')) || 0;
    await kv.set('analytics:userCount', userCount + 1);

    console.log('User created successfully:', username);

    return c.json({
      success: true,
      username,
      userId,
      message: 'Account created successfully! Remember your username for logging in next time.',
    });
  } catch (error) {
    console.log('Error during signup:', error);
    return c.json({ error: `Signup failed: ${error}` }, 500);
  }
});

// User login (simplified - no Supabase Auth)
app.post('/make-server-3669e37f/login', async (c) => {
  try {
    console.log('Login request received');
    const body = await c.req.json();
    const { username } = body;

    console.log('Login username:', username);

    if (!username) {
      return c.json({ error: 'Username is required' }, 400);
    }

    // Get user from KV store
    const userData = await kv.get(`user:${username}`);
    if (!userData) {
      console.log('User not found:', username);
      return c.json({ error: 'User not found' }, 404);
    }

    // Update visit count and last login
    userData.visitCount = (userData.visitCount || 0) + 1;
    userData.lastLogin = new Date().toISOString();
    await kv.set(`user:${username}`, userData);
    await kv.set(`userId:${userData.id}`, userData);

    // Increment total visit count
    const totalVisits = (await kv.get('analytics:totalVisits')) || 0;
    await kv.set('analytics:totalVisits', totalVisits + 1);

    // Track visit by month for analytics
    const now = new Date();
    const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const visitsByMonth = (await kv.get('analytics:visitsByMonth')) || {};
    visitsByMonth[monthKey] = (visitsByMonth[monthKey] || 0) + 1;
    await kv.set('analytics:visitsByMonth', visitsByMonth);

    // Generate a simple session token
    const accessToken = `session_${userData.id}_${Date.now()}`;
    const sessionKey = `session:${accessToken}`;
    console.log(`Creating session. Key: ${sessionKey}, Value: ${userData.id}`);

    await kv.set(sessionKey, userData.id);

    // Verify immediate write
    const verifyWrite = await kv.get(sessionKey);
    console.log(`Immediate readback of session: ${verifyWrite ? 'Success' : 'FAILED'}`);

    console.log('User logged in successfully:', username);

    return c.json({
      success: true,
      accessToken,
      user: {
        id: userData.id,
        username: userData.username,
        fullname: userData.fullname,
        country: userData.country,
        ageBracket: userData.ageBracket,
      },
    });
  } catch (error) {
    console.log('Error during login:', error);
    return c.json({ error: `Login failed: ${error}` }, 500);
  }
});

// Get user profile (requires auth)
app.get('/make-server-3669e37f/profile', async (c) => {
  try {
    const accessToken = c.req.header('X-Session-Token');
    const result = await getUserFromToken(accessToken || null);

    if (result.error || !result.user) {
      return c.json({ error: result.error || 'Unauthorized' }, 401);
    }
    const userData = result.user;

    return c.json({
      username: userData.username,
      fullname: userData.fullname,
      country: userData.country,
      ageBracket: userData.ageBracket,
      visitCount: userData.visitCount,
    });
  } catch (error) {
    console.log('Error fetching profile:', error);
    return c.json({ error: 'Failed to fetch profile' }, 500);
  }
});

// Admin: Get analytics
app.get('/make-server-3669e37f/admin/analytics', async (c) => {
  try {
    console.log('Analytics endpoint called');

    // Check for admin access using custom header
    const adminKey = c.req.header('X-Admin-Key');
    console.log('Admin key received:', adminKey);

    // Check if it's the special admin key
    const isAdmin = adminKey === 'HTTNADMIN_ACCESS_KEY';

    if (!isAdmin) {
      console.log('Unauthorized analytics access attempt - invalid admin key');
      return c.json({ error: 'Unauthorized - Admin access required' }, 401);
    }

    console.log('Admin authenticated, fetching analytics data...');

    // Get all users
    const allUsers = await kv.getByPrefix('user:');
    console.log('Found users:', allUsers.length);

    const users = allUsers.map((u: any) => ({
      username: u.username,
      fullname: u.fullname,
      country: u.country,
      ageBracket: u.ageBracket,
      visitCount: u.visitCount || 0,
      createdAt: u.createdAt,
      lastLogin: u.lastLogin,
    }));

    // Analytics by country
    const byCountry: Record<string, number> = {};
    users.forEach(u => {
      if (u.country) {
        byCountry[u.country] = (byCountry[u.country] || 0) + 1;
      }
    });

    // Analytics by age bracket
    const byAge: Record<string, number> = {};
    users.forEach(u => {
      if (u.ageBracket) {
        byAge[u.ageBracket] = (byAge[u.ageBracket] || 0) + 1;
      }
    });

    const userCount = (await kv.get('analytics:userCount')) || users.length;
    const totalVisits = (await kv.get('analytics:totalVisits')) || 0;
    const visitsByMonth = (await kv.get('analytics:visitsByMonth')) || {};

    console.log('Analytics compiled:', { totalUsers: userCount, totalVisits, userCount: users.length });

    return c.json({
      totalUsers: userCount,
      totalVisits,
      users,
      byCountry,
      byAge,
      visitsByMonth,
    });
  } catch (error) {
    console.log('Error fetching analytics:', error);
    return c.json({ error: `Failed to fetch analytics: ${error}` }, 500);
  }
});

// Track page visit (requires auth)
app.post('/make-server-3669e37f/track-page', async (c) => {
  try {
    const accessToken = c.req.header('X-Session-Token');
    const result = await getUserFromToken(accessToken || null);

    if (result.error || !result.user) {
      console.log('Track page unauthorized:', result.error);
      return c.json({ error: result.error || 'Unauthorized' }, 401);
    }
    const userData = result.user;

    const body = await c.req.json();
    const { pageNumber } = body;

    // Track page views
    const pageKey = `pageview:${userData.id}:${pageNumber}`;
    const pageViews = (await kv.get(pageKey)) || 0;
    await kv.set(pageKey, pageViews + 1);

    return c.json({ success: true });
  } catch (error) {
    console.log('Error tracking page visit:', error);
    return c.json({ error: 'Failed to track page' }, 500);
  }
});

Deno.serve(app.fetch);
