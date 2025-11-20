import React, { useState, useEffect, useRef } from 'react';
import { MagazineContainer } from './components/MagazineContainer';
import { PageFlipBook } from './components/PageFlipBook';
import { WelcomeScreen } from './components/WelcomeScreen';
import { SignupForm } from './components/SignupForm';
import { LoginForm } from './components/LoginForm';
import { SignupSuccess } from './components/SignupSuccess';
import { AdminDashboard } from './components/AdminDashboard';
import { CoverPage } from './components/pages/CoverPage';
import Page2Contents from './components/pages/Page2Contents';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/Page4';
import Page5 from './components/pages/Page5';
import Page6 from './components/pages/Page6';
import Page7 from './components/pages/Page7';
import Page8 from './components/pages/Page8';
import Page9 from './components/pages/Page9';
import Page10 from './components/pages/Page10';
import Page11 from './components/pages/Page11';
import Page12 from './components/pages/Page12';
import Page13 from './components/pages/Page13';
import Page14 from './components/pages/Page14';
import Page15 from './components/pages/Page15';
import Page16 from './components/pages/Page16';
import { projectId, publicAnonKey } from './utils/supabase/info';
import { useBackgroundAssetPreloader } from './utils/useBackgroundAssetPreloader';

type AppState = 'welcome' | 'signup' | 'login' | 'signup-success' | 'magazine' | 'admin';

interface UserData {
  username: string;
  fullname: string;
  country: string;
  ageBracket: string;
}

// Admin username constant
const ADMIN_USERNAME = 'HTTNADMIN';
const SESSION_STORAGE_KEY = 'httn-magazine-session';

export default function App() {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [accessToken, setAccessToken] = useState<string>('');
  const [signupUsername, setSignupUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const hasRestoredSessionRef = useRef(false);

  useBackgroundAssetPreloader();



  const handleSignup = async (data: UserData) => {
    try {
      console.log('Attempting signup with data:', data);
      console.log('Project ID:', projectId);
      console.log('Public Anon Key:', publicAnonKey ? 'Present' : 'Missing');
      
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-3669e37f/signup`;
      console.log('Signup URL:', url);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      const result = await response.json();
      console.log('Response data:', result);

      if (!response.ok) {
        throw new Error(result.error || 'Signup failed');
      }

      setSignupUsername(data.username);
      setAppState('signup-success');
    } catch (error: any) {
      console.error('Signup error details:', error);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      throw error;
    }
  };

  const handleLogin = async (username: string) => {
    try {
      console.log('Attempting login for username:', username);
      
      // Check if admin login
      if (username === ADMIN_USERNAME) {
        console.log('Admin login detected');
        setIsAdmin(true);
        setAccessToken('HTTNADMIN_TOKEN');
        setAppState('admin');
        setCurrentPage(0);
        return;
      }
      
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-3669e37f/login`;
      console.log('Login URL:', url);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ username }),
      });

      console.log('Login response status:', response.status);

      const result = await response.json();
      console.log('Login response data:', result);

      if (!response.ok) {
        throw new Error(result.error || 'Login failed');
      }

      setUserData(result.user);
      setAccessToken(result.accessToken);
      setIsAdmin(false);
      setAppState('magazine');
      setCurrentPage(result.lastPage ?? 0);
    } catch (error: any) {
      console.error('Login error details:', error);
      console.error('Error message:', error.message);
      throw error;
    }
  };

  const handlePageChange = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (accessToken) {
      try {
        await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-3669e37f/track-page`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ pageNumber }),
          }
        );
      } catch (error) {
        console.error('Error tracking page:', error);
      }
    }
  };



  // Magazine pages
  const magazinePages = [
    {
      id: 0,
      component: <CoverPage />,
    },
    {
      id: 1,
      component: (
        <Page2Contents
          userName={userData?.fullname}
          userAge={userData?.ageBracket}
        />
      ),
    },
    {
      id: 2,
      component: <Page3 />,
    },
    {
      id: 3,
      component: <Page4 />,
    },
    {
      id: 4,
      component: <Page5 />,
    },
    {
      id: 5,
      component: <Page6 />,
    },
    {
      id: 6,
      component: <Page7 />,
    },
    {
      id: 7,
      component: <Page8 />,
    },
    {
      id: 8,
      component: <Page9 />,
    },
    {
      id: 9,
      component: <Page10 />,
    },
    {
      id: 10,
      component: <Page11 />,
    },
    {
      id: 11,
      component: <Page12 />,
    },
    {
      id: 12,
      component: <Page13 />,
    },
    {
      id: 13,
      component: <Page14 />,
    },
    {
      id: 14,
      component: <Page15 />,
    },
    {
      id: 15,
      component: <Page16 />,
    },
  ];

  // Restore session data (credentials and last page)
  useEffect(() => {
    if (hasRestoredSessionRef.current) return;
    if (typeof window === 'undefined') return;

    try {
      const stored = localStorage.getItem(SESSION_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.appState) setAppState(parsed.appState);
        if (parsed.userData) setUserData(parsed.userData);
        if (typeof parsed.accessToken === 'string') setAccessToken(parsed.accessToken);
        if (typeof parsed.signupUsername === 'string') setSignupUsername(parsed.signupUsername);
        if (typeof parsed.isAdmin === 'boolean') setIsAdmin(parsed.isAdmin);
        if (typeof parsed.currentPage === 'number') {
          const safePage = Math.min(Math.max(parsed.currentPage, 0), magazinePages.length - 1);
          setCurrentPage(safePage);
        }
      }
    } catch (error) {
      console.warn('Failed to restore session state', error);
    } finally {
      hasRestoredSessionRef.current = true;
      setSessionLoaded(true);
    }
  }, [magazinePages.length]);

  // Persist session whenever auth/app state changes
  useEffect(() => {
    if (!sessionLoaded) return;
    if (typeof window === 'undefined') return;

    try {
      const sessionPayload = {
        appState,
        userData,
        accessToken,
        signupUsername,
        isAdmin,
        currentPage,
      };
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionPayload));
    } catch (error) {
      console.warn('Failed to persist session state', error);
    }
  }, [appState, userData, accessToken, signupUsername, isAdmin, currentPage, sessionLoaded]);

  return (
    <>
      {appState === 'welcome' && (
        <WelcomeScreen onContinue={() => setAppState('signup')} />
      )}

      {appState === 'signup' && (
        <SignupForm
          onSignup={handleSignup}
          onSwitchToLogin={() => setAppState('login')}
        />
      )}

      {appState === 'login' && (
        <LoginForm
          onLogin={handleLogin}
          onSwitchToSignup={() => setAppState('signup')}
        />
      )}

      {appState === 'signup-success' && (
        <SignupSuccess
          username={signupUsername}
          onContinue={() => setAppState('login')}
        />
      )}

      {appState === 'magazine' && !isAdmin && (
        <MagazineContainer>
          <PageFlipBook
            pages={magazinePages}
            onPageChange={handlePageChange}
            initialPage={currentPage}
          />
        </MagazineContainer>
      )}

      {appState === 'admin' && isAdmin && (
        <AdminDashboard
          accessToken={accessToken}
          onClose={() => {
            setAppState('welcome');
            setIsAdmin(false);
            setAccessToken('');
          }}
        />
      )}
    </>
  );
}
