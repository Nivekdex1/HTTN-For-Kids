# 🔧 Technical Documentation - Healing Magazine for Kids

Complete technical reference for developers working on this project.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Component Structure](#component-structure)
3. [State Management](#state-management)
4. [Supabase Integration](#supabase-integration)
5. [Page System](#page-system)
6. [Authentication Flow](#authentication-flow)
7. [Admin Dashboard](#admin-dashboard)
8. [Animations](#animations)
9. [Styling System](#styling-system)
10. [API Reference](#api-reference)
11. [Database Schema](#database-schema)
12. [Common Tasks](#common-tasks)

---

## 🏗 Architecture Overview

### Three-Tier Architecture

```
┌─────────────────────────────────────────────────────┐
│                   FRONTEND (React)                   │
│  - User Interface                                    │
│  - Page Flip Animations                              │
│  - State Management                                  │
└─────────────────┬───────────────────────────────────┘
                  │ HTTPS Requests
                  ▼
┌─────────────────────────────────────────────────────┐
│              SERVER (Supabase Edge Functions)        │
│  - Authentication Logic                              │
│  - Business Rules                                    │
│  - API Endpoints                                     │
└─────────────────┬───────────────────────────────────┘
                  │ Database Queries
                  ▼
┌─────────────────────────────────────────────────────┐
│              DATABASE (Supabase Postgres)            │
│  - User Data                                         │
│  - Analytics                                         │
│  - Key-Value Store                                   │
└─────────────────────────────────────────────────────┘
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 18 + TypeScript | UI Framework |
| Styling | Tailwind CSS v4 | Styling |
| Animations | Motion (Framer Motion) | Page animations |
| State | React Hooks (useState, useEffect) | Local state |
| Backend | Supabase Edge Functions (Hono) | API Server |
| Database | Supabase PostgreSQL | Data storage |
| Hosting | Vercel/Netlify | CDN & Deployment |

---

## 🧩 Component Structure

### Top-Level Components

```
App.tsx
├── WelcomeScreen.tsx        (Initial landing)
├── SignupForm.tsx           (User registration)
├── LoginForm.tsx            (User authentication)
├── SignupSuccess.tsx        (Post-signup message)
├── MagazineContainer.tsx    (Aspect ratio wrapper)
│   └── PageFlipBook.tsx     (Page flip logic)
│       └── Page Components  (16 magazine pages)
└── AdminDashboard.tsx       (Admin analytics)
```

### Page Components Hierarchy

Each page follows this structure:

```tsx
export default function PageX() {
  // State & refs
  const [state, setState] = useState();
  const ref = useRef();

  // Effects (voiceovers, animations)
  useEffect(() => {
    // Initialization
  }, []);

  // Render
  return (
    <div className="bg-white relative size-full">
      {/* Background */}
      {/* Content */}
      {/* Pagination */}
    </div>
  );
}
```

### Shared Components

Located in `components/ui/`:

```
button.tsx          - Button variations
input.tsx           - Form inputs
card.tsx            - Card containers
dialog.tsx          - Modal dialogs
... (40+ components)
```

All follow shadcn/ui patterns with Tailwind v4 styling.

---

## 🔄 State Management

### App-Level State

```tsx
// In App.tsx
const [appState, setAppState] = useState<AppState>('welcome');
const [userData, setUserData] = useState<UserData | null>(null);
const [accessToken, setAccessToken] = useState<string>('');
const [isAdmin, setIsAdmin] = useState(false);
```

**State Flow:**

```
welcome → signup → signup-success → login → magazine
                                          ↓
                                        admin (if HTTNADMIN)
```

### Component-Level State

Each page manages its own:
- Animation states
- Loading states  
- Audio playback state
- User interaction state

Example:
```tsx
const [isPlaying, setIsPlaying] = useState(false);
const [selectedAnswer, setSelectedAnswer] = useState(null);
```

### Prop Drilling

User data is passed down to Page 2:

```tsx
<Page2Contents 
  userName={userData?.fullname}
  userAge={userData?.ageBracket}
/>
```

---

## 🔌 Supabase Integration

### Frontend → Server Communication

```tsx
const response = await fetch(
  `https://${projectId}.supabase.co/functions/v1/make-server-3669e37f/endpoint`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`,
    },
    body: JSON.stringify(data),
  }
);
```

### Available Endpoints

| Endpoint | Method | Purpose | Auth Required |
|----------|--------|---------|---------------|
| `/signup` | POST | Register new user | No |
| `/login` | POST | Authenticate user | No |
| `/track-page` | POST | Track page view | Yes (user token) |
| `/admin/stats` | GET | Get analytics | Yes (admin token) |

### Server Code Structure

```tsx
// supabase/functions/server/index.tsx
import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import * as kv from './kv_store.tsx';

const app = new Hono();
app.use('*', cors());

// Signup endpoint
app.post('/make-server-3669e37f/signup', async (c) => {
  const data = await c.req.json();
  
  // Validation
  if (!data.username || !data.fullname) {
    return c.json({ error: 'Missing fields' }, 400);
  }
  
  // Check if username exists
  const users = await kv.get('users') || [];
  const exists = users.find(u => u.username === data.username);
  
  if (exists) {
    return c.json({ error: 'Username taken' }, 400);
  }
  
  // Save user
  users.push({
    ...data,
    createdAt: new Date().toISOString(),
  });
  await kv.set('users', users);
  
  return c.json({ success: true });
});

// Start server
Deno.serve(app.fetch);
```

### Key-Value Store

```tsx
// Import
import * as kv from './kv_store.tsx';

// Operations
await kv.set('key', value);           // Store data
const data = await kv.get('key');     // Retrieve data
await kv.del('key');                  // Delete data
const items = await kv.mget(['k1', 'k2']); // Get multiple
await kv.mset({ k1: v1, k2: v2 });    // Set multiple
const prefixed = await kv.getByPrefix('user_'); // Get by prefix
```

**Data Structure:**

```typescript
// Users
{
  "users": [
    {
      username: string,
      fullname: string,
      country: string,
      ageBracket: string,
      createdAt: string,
    },
    ...
  ]
}

// Analytics
{
  "analytics": {
    totalVisits: number,
    pageViews: { [pageNumber: string]: number },
    lastUpdated: string,
  }
}

// Sessions
{
  "user_sessions": {
    [username: string]: {
      accessToken: string,
      lastActive: string,
    }
  }
}
```

---

## 📄 Page System

### Page Flip Implementation

Uses React state and CSS transforms:

```tsx
// In PageFlipBook.tsx
const [currentPage, setCurrentPage] = useState(0);
const [isFlipping, setIsFlipping] = useState(false);

const flipToPage = (pageIndex: number) => {
  setIsFlipping(true);
  
  setTimeout(() => {
    setCurrentPage(pageIndex);
    setIsFlipping(false);
    onPageChange?.(pageIndex);
  }, 600); // Animation duration
};
```

### CSS Animation

```css
/* In PageFlipBook component */
.page-flip-enter {
  transform: rotateY(-90deg);
  transform-origin: left;
}

.page-flip-active {
  transform: rotateY(0deg);
  transition: transform 600ms cubic-bezier(0.645, 0.045, 0.355, 1.0);
}
```

### Navigation Controls

```tsx
// Keyboard
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
  };
  
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [currentPage]);

// Swipe (touch)
const handleTouchStart = (e: TouchEvent) => {
  touchStartX.current = e.touches[0].clientX;
};

const handleTouchEnd = (e: TouchEvent) => {
  const deltaX = e.changedTouches[0].clientX - touchStartX.current;
  if (deltaX > 50) prevPage();
  if (deltaX < -50) nextPage();
};
```

---

## 🔐 Authentication Flow

### Signup Process

```typescript
1. User fills signup form
   ↓
2. Frontend validates input
   ↓
3. POST /signup with user data
   ↓
4. Server checks username availability
   ↓
5. Server saves to database
   ↓
6. Return success
   ↓
7. Show signup success screen
   ↓
8. Redirect to login
```

### Login Process

```typescript
1. User enters username
   ↓
2. Check if username === "HTTNADMIN"
   ├─ Yes → Set admin state, go to admin dashboard
   └─ No  → Continue normal login
   ↓
3. POST /login with username
   ↓
4. Server validates username exists
   ↓
5. Server generates access token
   ↓
6. Return user data + token
   ↓
7. Store token in state
   ↓
8. Redirect to magazine
```

### Token Management

```tsx
// Access token stored in state
const [accessToken, setAccessToken] = useState<string>('');

// Include in authenticated requests
headers: {
  'Authorization': `Bearer ${accessToken}`,
}

// No token expiration (session-based)
// Token cleared on logout or page refresh
```

---

## 📊 Admin Dashboard

### Implementation

```tsx
// AdminDashboard.tsx
export function AdminDashboard({ accessToken, onClose }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-3669e37f/admin/stats`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );
    
    const data = await response.json();
    setStats(data);
    setLoading(false);
  };

  return (
    <div className="admin-dashboard">
      {/* Stats display */}
      {/* Charts */}
    </div>
  );
}
```

### Charts Configuration

Uses Recharts library:

```tsx
import { PieChart, Pie, BarChart, Bar, Cell } from 'recharts';

// Age distribution
<PieChart width={400} height={300}>
  <Pie
    data={ageData}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    outerRadius={100}
  >
    {ageData.map((entry, index) => (
      <Cell key={index} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
</PieChart>

// Country distribution
<BarChart width={600} height={300} data={countryData}>
  <Bar dataKey="count" fill="#8884d8" />
</BarChart>
```

---

## 🎨 Animations

### Motion (Framer Motion) Usage

```tsx
import { motion } from 'motion/react';

// Basic animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Content
</motion.div>

// Continuous animation
<motion.div
  animate={{ 
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0]
  }}
  transition={{ 
    duration: 3, 
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  Floating element
</motion.div>

// Hover effects
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Common Animation Patterns

```tsx
// Fade in on mount
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5 }}

// Slide in from left
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}

// Slide in from right
initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}

// Scale up
initial={{ scale: 0.8 }}
animate={{ scale: 1 }}

// Staggered children
<motion.div variants={container}>
  {items.map((item, i) => (
    <motion.div key={i} variants={item}>
      {item}
    </motion.div>
  ))}
</motion.div>

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
```

---

## 🎨 Styling System

### Tailwind v4 Configuration

Located in `styles/globals.css`:

```css
@import "tailwindcss";

/* Custom theme values */
@theme {
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-family-comic: 'Comic Sans MS', cursive;
  
  /* Custom colors */
  --color-primary: #DC342C;
  --color-secondary: #0A537E;
  
  /* Typography */
  --font-size-base: 16px;
  --line-height-normal: 1.5;
}

/* Global styles */
body {
  font-family: var(--font-family-sans);
  margin: 0;
  padding: 0;
}

/* Custom utilities */
.page-container {
  width: 100%;
  max-width: 1754px;
  aspect-ratio: 1 / 1.414;
}
```

### Typography Defaults

```css
/* Set in globals.css */
h1 { font-size: 48px; font-weight: 700; }
h2 { font-size: 36px; font-weight: 600; }
h3 { font-size: 24px; font-weight: 600; }
p { font-size: 16px; line-height: 1.6; }
```

**Important**: Don't use Tailwind font size classes (`text-xl`, etc.) unless specifically needed, as globals.css handles this.

### Custom Animations

```css
@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes shimmer {
  0% { opacity: 1; }
  50% { opacity: 0.8; }
  100% { opacity: 1; }
}

@keyframes float-gentle {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}

/* Usage in components */
.element {
  animation: bounce-subtle 4s ease-in-out infinite;
}
```

---

## 📡 API Reference

### POST /make-server-3669e37f/signup

**Request:**
```json
{
  "username": "string",
  "fullname": "string",
  "country": "string",
  "ageBracket": "string"
}
```

**Response (Success):**
```json
{
  "success": true
}
```

**Response (Error):**
```json
{
  "error": "Username already exists"
}
```

### POST /make-server-3669e37f/login

**Request:**
```json
{
  "username": "string"
}
```

**Response (Success):**
```json
{
  "user": {
    "username": "string",
    "fullname": "string",
    "country": "string",
    "ageBracket": "string"
  },
  "accessToken": "string"
}
```

**Response (Error):**
```json
{
  "error": "User not found"
}
```

### POST /make-server-3669e37f/track-page

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Request:**
```json
{
  "pageNumber": number
}
```

**Response:**
```json
{
  "success": true
}
```

### GET /make-server-3669e37f/admin/stats

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Response:**
```json
{
  "totalUsers": number,
  "totalVisits": number,
  "ageDistribution": {
    "1-3 years": number,
    "4-7 years": number,
    "8-10 years": number,
    "11-12 years": number
  },
  "countryDistribution": {
    "Country Name": number,
    ...
  }
}
```

---

## 🗄 Database Schema

### Key-Value Store Table

```sql
CREATE TABLE kv_store_3669e37f (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Data Keys

| Key | Value Type | Description |
|-----|-----------|-------------|
| `users` | Array | All registered users |
| `analytics` | Object | Aggregated stats |
| `user_sessions` | Object | Active user sessions |

### Accessing Data

```tsx
// In server function
import * as kv from './kv_store.tsx';

// Get all users
const users = await kv.get('users') || [];

// Add new user
users.push(newUser);
await kv.set('users', users);

// Update analytics
const analytics = await kv.get('analytics') || {
  totalVisits: 0,
  pageViews: {}
};

analytics.totalVisits += 1;
await kv.set('analytics', analytics);
```

---

## 🔨 Common Tasks

### Task 1: Add a New Page

1. Create page component:
```tsx
// components/pages/Page17.tsx
export default function Page17() {
  return (
    <div className="bg-white relative size-full">
      {/* Your content */}
      
      {/* Pagination */}
      <div className="absolute bg-[red] box-border h-[42px] left-[calc(50%-0.087px)] p-[6.087px] rounded-[60.87px] top-[2385px] translate-x-[-50%] w-[43.826px]">
        <p className="text-white text-[25.653px]">17</p>
      </div>
    </div>
  );
}
```

2. Import in App.tsx:
```tsx
import Page17 from './components/pages/Page17';
```

3. Add to magazinePages:
```tsx
{
  id: 16,
  component: <Page17 />,
}
```

### Task 2: Add Auto-Play Audio

```tsx
import { useEffect, useRef } from 'react';

export default function MyPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/path/to/audio.mp3');
    
    const timer = setTimeout(() => {
      audioRef.current?.play().catch(console.error);
    }, 1000);

    return () => {
      clearTimeout(timer);
      audioRef.current?.pause();
    };
  }, []);

  // Rest of component
}
```

### Task 3: Add Text-to-Speech

```tsx
useEffect(() => {
  const text = "Your text to read aloud";
  
  const timer = setTimeout(() => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      utterance.volume = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }, 1500);

  return () => {
    clearTimeout(timer);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };
}, []);
```

### Task 4: Add New Backend Endpoint

```tsx
// In supabase/functions/server/index.tsx

app.post('/make-server-3669e37f/my-endpoint', async (c) => {
  try {
    const data = await c.req.json();
    
    // Your logic here
    
    return c.json({ success: true, data: result });
  } catch (error) {
    console.error('Error:', error);
    return c.json({ error: error.message }, 500);
  }
});
```

Deploy:
```bash
supabase functions deploy make-server-3669e37f
```

### Task 5: Update Environment Variables

1. Local (.env file):
```env
VITE_NEW_VAR=value
```

2. Production (Vercel):
- Dashboard → Settings → Environment Variables
- Add new variable
- Redeploy

3. Access in code:
```tsx
const myVar = import.meta.env.VITE_NEW_VAR;
```

### Task 6: Optimize Images

```bash
# Install sharp
npm install sharp

# Create optimization script (scripts/optimize-images.js)
const sharp = require('sharp');
const fs = require('fs');

const inputFolder = './images';
const outputFolder = './optimized';

fs.readdirSync(inputFolder).forEach(file => {
  if (file.endsWith('.png') || file.endsWith('.jpg')) {
    sharp(`${inputFolder}/${file}`)
      .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toFile(`${outputFolder}/${file}`)
      .then(() => console.log(`Optimized ${file}`));
  }
});
```

Run:
```bash
node scripts/optimize-images.js
```

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Signup creates new user in database
- [ ] Login with existing user works
- [ ] Login with HTTNADMIN shows admin dashboard
- [ ] Page flipping works smoothly
- [ ] Keyboard navigation (arrow keys) works
- [ ] Swipe navigation (mobile) works
- [ ] Voiceovers play correctly
- [ ] Quiz records answers and shows score
- [ ] Admin dashboard displays correct data
- [ ] Mobile view is responsive
- [ ] All images load
- [ ] No console errors

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## 📚 Additional Resources

- **Tailwind CSS v4**: https://tailwindcss.com/
- **Motion docs**: https://motion.dev/
- **React docs**: https://react.dev/
- **Supabase docs**: https://supabase.com/docs
- **Vercel docs**: https://vercel.com/docs

---

**Last Updated**: November 2024  
**Maintainer**: Development Team
