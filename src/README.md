# Healing to the Nations Magazine for Kids - Interactive Web App

An interactive digital magazine webapp for Loveworld Church's "Healing to the Nations Magazine for Kids" targeting ages 1-12, featuring realistic page-turning animations, user authentication, and admin analytics dashboard.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Setup (Windows)](#local-setup-windows)
  - [Environment Variables](#environment-variables)
- [Deployment](#deployment)
  - [Hosting on a Custom Domain](#hosting-on-a-custom-domain)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
  - [Replacing Images](#replacing-images)
  - [Updating Components](#updating-components)
  - [Supabase Connection](#supabase-connection)
- [Admin Access](#admin-access)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## ✨ Features

### User Features
- **Onboarding Flow**: Welcome screen → Signup → Login
- **User Registration**: Username, full name, country, and age bracket
- **Personalized Magazine**: User's name and age displayed on contents page
- **Realistic Page Flip**: 1:1.414 aspect ratio maintained across all devices
- **16 Interactive Pages**: Including cover, comics, quizzes, testimonies, and more
- **Auto-Voiceovers**: Text-to-speech for prayers, testimonies, and confessions
- **Interactive Quiz**: Bible book order quiz with visual feedback and scoring
- **Mobile Responsive**: Optimized for all screen sizes

### Admin Features
- **Admin Dashboard**: Access via username `HTTNADMIN`
- **Analytics**: User count, total visits, age demographics, country distribution
- **Real-time Data**: Live updates from Supabase backend

### Technical Features
- **Supabase Backend**: User authentication, data storage, and analytics
- **Page Tracking**: Monitor user engagement and page views
- **Character Animations**: Motion/React powered smooth animations
- **Swipe/Keyboard Navigation**: Touch-friendly and keyboard accessible

---

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS v4
- **Animations**: Motion (formerly Framer Motion)
- **Backend**: Supabase (Edge Functions, Database, Auth)
- **Hosting**: Supabase (can be deployed to Vercel, Netlify, etc.)
- **Icons**: Lucide React
- **Charts**: Recharts (admin dashboard)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your Windows machine:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: Open Command Prompt and run:
     ```bash
     node --version
     npm --version
     ```

2. **Git** (for version control)
   - Download from: https://git-scm.com/download/win
   - Verify installation:
     ```bash
     git --version
     ```

3. **Visual Studio Code** (recommended code editor)
   - Download from: https://code.visualstudio.com/

---

## 💻 Local Setup (Windows)

### Step 1: Clone/Download the Project

If pushing to GitHub (covered later), you'll clone it. For now, if you have the files:

1. Open **File Explorer** and navigate to where you want to store the project
2. Create a new folder named `healing-magazine`
3. Copy all project files into this folder

### Step 2: Install Dependencies

1. Open **Command Prompt** or **PowerShell**
2. Navigate to your project folder:
   ```bash
   cd C:\path\to\healing-magazine
   ```

3. Install all required packages:
   ```bash
   npm install
   ```

   This will install all dependencies listed in `package.json` (if the project has one). If there's no package.json, you'll need to initialize:
   
   ```bash
   npm init -y
   ```

   Then install the core dependencies:
   ```bash
   npm install react react-dom
   npm install -D @types/react @types/react-dom typescript
   npm install tailwindcss motion lucide-react recharts
   ```

### Step 3: Set Up Environment Variables

1. In your project root, create a file named `.env` (no extension)
2. Add your Supabase credentials (see [Environment Variables](#environment-variables) section)

### Step 4: Run the Development Server

```bash
npm run dev
```

The app should now be running at `http://localhost:5173` (or similar). Open this URL in your browser.

---

## 🔐 Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Optional: Custom Domain
VITE_DOMAIN=yourdomain.com
```

### Finding Your Supabase Credentials:

1. Go to https://supabase.com and log in
2. Select your project
3. Click on **Settings** (⚙️ icon in sidebar)
4. Go to **API** section
5. Copy:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon/public key** → `VITE_SUPABASE_ANON_KEY`
   - **service_role key** → `VITE_SUPABASE_SERVICE_ROLE_KEY` (⚠️ Keep secret!)

**⚠️ SECURITY WARNING**: Never commit `.env` file to GitHub. The `.gitignore` should include `.env`.

---

## 🌐 Deployment

### Hosting on a Custom Domain

#### Option 1: Vercel (Recommended - Easiest)

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

3. **Deploy via GitHub** (easiest method):
   - Push your code to GitHub (see GitHub section below)
   - Go to Vercel Dashboard
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables from your `.env` file
   - Click "Deploy"

4. **Connect Custom Domain**:
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain (e.g., `kidsmag.loveworld.org`)
   - Follow DNS configuration instructions provided by Vercel
   - Update your domain's DNS records with your domain provider

#### Option 2: Netlify

1. Go to https://netlify.com
2. Sign up/Login
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables
7. Deploy!
8. For custom domain: Site settings → Domain management

#### Option 3: Supabase Hosting

Supabase edge functions are already configured. You can also host the frontend:

```bash
supabase functions deploy make-server-3669e37f
```

---

## 📁 Project Structure

```
healing-magazine/
├── App.tsx                    # Main application component
├── components/
│   ├── AdminDashboard.tsx    # Admin analytics dashboard
│   ├── LoginForm.tsx         # User login form
│   ├── SignupForm.tsx        # User registration form
│   ├── WelcomeScreen.tsx     # Initial welcome screen
│   ├── MagazineContainer.tsx # Magazine aspect ratio container
│   ├── PageFlipBook.tsx      # Page flip animation logic
│   ├── pages/                # All 16 magazine pages
│   │   ├── CoverPage.tsx
│   │   ├── Page2Contents.tsx
│   │   ├── Page3.tsx
│   │   └── ...Page16.tsx
│   └── ui/                   # Reusable UI components
├── imports/                   # Figma imported assets & SVGs
├── styles/
│   └── globals.css           # Global styles & Tailwind config
├── supabase/
│   └── functions/
│       └── server/
│           ├── index.tsx     # Edge function server
│           └── kv_store.tsx  # Key-value store utilities
├── utils/
│   ├── supabase/
│   │   └── info.tsx          # Supabase config exports
│   └── useMobileOptimization.ts
└── .env                      # Environment variables (create this)
```

---

## ⚙️ Configuration

### Replacing Images

Images are imported from Figma and stored in the `figma:asset/` namespace. To replace:

1. **For Figma imported images**:
   - Re-import from Figma using Figma Make
   - Images will auto-update with new asset IDs

2. **For custom images**:
   ```tsx
   // Instead of figma:asset
   import myImage from './assets/my-image.png';
   
   // Use in component
   <img src={myImage} alt="Description" />
   ```

3. **Using ImageWithFallback** (recommended):
   ```tsx
   import { ImageWithFallback } from './components/figma/ImageWithFallback';
   
   <ImageWithFallback 
     src="your-image-url" 
     alt="Description"
     className="your-classes"
   />
   ```

### Updating Components

#### Adding a New Page:

1. Create new page component in `components/pages/`:
   ```tsx
   // components/pages/Page17.tsx
   export default function Page17() {
     return (
       <div className="bg-white relative size-full">
         {/* Your page content */}
       </div>
     );
   }
   ```

2. Import in `App.tsx`:
   ```tsx
   import Page17 from './components/pages/Page17';
   ```

3. Add to `magazinePages` array:
   ```tsx
   const magazinePages = [
     // ... existing pages
     {
       id: 16,
       component: <Page17 />,
     },
   ];
   ```

#### Modifying Existing Pages:

Simply edit the corresponding file in `components/pages/`. Changes will hot-reload in development.

### Supabase Connection

The app connects to Supabase through:

1. **Frontend → Server Edge Function**:
   ```tsx
   // In App.tsx or components
   const response = await fetch(
     `https://${projectId}.supabase.co/functions/v1/make-server-3669e37f/endpoint`,
     {
       method: 'POST',
       headers: {
         'Authorization': `Bearer ${publicAnonKey}`,
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
     }
   );
   ```

2. **Server Edge Function → Database**:
   ```tsx
   // In supabase/functions/server/index.tsx
   import * as kv from './kv_store.tsx';
   
   // Store data
   await kv.set('users', userData);
   
   // Retrieve data
   const users = await kv.get('users');
   ```

3. **Database Schema**:
   - Uses a key-value store table: `kv_store_3669e37f`
   - Keys used:
     - `users` - All registered users
     - `analytics` - Page view analytics
     - `user_sessions` - Active sessions

#### Modifying Backend:

Edit `supabase/functions/server/index.tsx`:

```tsx
// Add new endpoint
app.post('/make-server-3669e37f/new-endpoint', async (c) => {
  const data = await c.req.json();
  
  // Your logic here
  
  return c.json({ success: true });
});
```

Deploy changes:
```bash
supabase functions deploy make-server-3669e37f
```

---

## 👨‍💼 Admin Access

### How to Access Admin Dashboard:

1. Go to the login page
2. Enter username: `HTTNADMIN` (case-sensitive)
3. Click Login
4. You'll be taken directly to the admin dashboard (not the magazine)

### Admin Features:

- **Total Users**: Count of registered users
- **Total Visits**: Aggregate page views
- **Age Demographics**: Pie chart showing age bracket distribution
- **Country Distribution**: Bar chart of users by country
- **Logout**: Returns to welcome screen

### Changing Admin Username:

In `App.tsx`, modify:
```tsx
const ADMIN_USERNAME = 'HTTNADMIN'; // Change to your preferred username
```

---

## 🔧 Development

### Available Scripts:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Lint code
npm run lint
```

### Adding Voiceovers:

1. **Text-to-Speech (Current)**:
   ```tsx
   useEffect(() => {
     const text = "Your text to read";
     const utterance = new SpeechSynthesisUtterance(text);
     utterance.rate = 0.85;
     window.speechSynthesis.speak(utterance);
   }, []);
   ```

2. **MP3 Audio Files**:
   ```tsx
   const audioRef = useRef<HTMLAudioElement | null>(null);
   
   useEffect(() => {
     audioRef.current = new Audio('/path/to/audio.mp3');
     audioRef.current.play();
   }, []);
   ```

### Text Content That Needs Exact Transcription:

The following placeholders need to be replaced with exact text from the magazine:

1. **Page 2**: Prayer of Salvation
2. **Pages 8-9**: Healing Streams content
3. **Pages 10-11**: Dennis's testimony (exact story text)
4. **Page 14**: Divine Health Confessions (all 8 confessions)

Search for `TODO:` comments in the code to find these locations.

---

## 🐛 Troubleshooting

### Common Issues:

1. **"Module not found" errors**:
   ```bash
   npm install
   npm run dev
   ```

2. **Supabase connection fails**:
   - Check `.env` file has correct credentials
   - Verify Supabase project is active
   - Check network connection

3. **Page flip doesn't work**:
   - Clear browser cache
   - Check console for errors
   - Verify aspect ratio CSS is loaded

4. **Admin login doesn't work**:
   - Ensure username is exactly `HTTNADMIN` (case-sensitive)
   - Check console for errors

5. **Build fails**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

### Getting Help:

- Check browser console (F12) for errors
- Review Supabase logs: Project → Logs → Edge Functions
- Check network tab for failed requests

---

## 📤 Pushing to GitHub

### Step 1: Create GitHub Repository

1. Go to https://github.com
2. Click "+" → "New repository"
3. Name: `healing-magazine-kids`
4. Select "Private"
5. Don't initialize with README (we have one)
6. Click "Create repository"

### Step 2: Initialize Git Locally

Open Command Prompt in your project folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Healing Magazine for Kids"

# Add remote repository (replace with your GitHub URL)
git remote add origin https://github.com/yourusername/healing-magazine-kids.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify .gitignore

Ensure `.gitignore` includes:
```
node_modules/
.env
.env.local
dist/
.DS_Store
```

---

## 📝 License

Copyright © 2024 Loveworld Church. All rights reserved.

This is a private, proprietary application for Loveworld Church's internal use.

---

## 📧 Support

For technical support or questions:
- Email: support@loveworld.org
- Documentation: This README.md file

---

**Last Updated**: November 2024  
**Version**: 1.0.0
