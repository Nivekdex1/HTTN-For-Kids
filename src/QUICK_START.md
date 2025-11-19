# 🚀 Quick Start Guide - Healing Magazine for Kids

Get up and running in minutes!

---

## 📦 What You Have

An interactive digital magazine webapp with:
- ✅ User onboarding & authentication
- ✅ 16 interactive magazine pages
- ✅ Admin dashboard
- ✅ Supabase backend
- ✅ Responsive design
- ✅ Page flip animations

---

## 🎯 Quick Navigation

**Choose your task:**

1. [Run Locally on Windows](#1-run-locally-on-windows) ⏱️ 10 minutes
2. [Push to GitHub](#2-push-to-github) ⏱️ 5 minutes  
3. [Deploy to Production](#3-deploy-to-production) ⏱️ 15 minutes
4. [Make Your First Change](#4-make-your-first-change) ⏱️ 5 minutes
5. [Access Admin Dashboard](#5-access-admin-dashboard) ⏱️ 1 minute

---

## 1. Run Locally on Windows

### Prerequisites

Download and install:
- **Node.js**: https://nodejs.org/ (v18 or higher)
- **VS Code**: https://code.visualstudio.com/ (recommended)

### Steps

**Step 1:** Open Command Prompt
- Press `Windows + R`
- Type `cmd` and press Enter

**Step 2:** Navigate to project
```bash
cd C:\path\to\healing-magazine
```

**Step 3:** Install dependencies
```bash
npm install
```

**Step 4:** Create `.env` file

Create a file named `.env` in the project root with:
```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
VITE_SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

Get these from: https://supabase.com → Your Project → Settings → API

**Step 5:** Start development server
```bash
npm run dev
```

**Step 6:** Open in browser

Visit: `http://localhost:5173`

✅ **Done!** The app should be running.

---

## 2. Push to GitHub

### Quick Setup

**Step 1:** Create GitHub repo
- Go to https://github.com → New repository
- Name: `healing-magazine-kids`
- Privacy: **Private** ✅
- Don't initialize anything
- Create repository

**Step 2:** Push your code

```bash
# In your project folder
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/healing-magazine-kids.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

**Step 3:** Enter credentials
- Username: Your GitHub username
- Password: [Create Personal Access Token](https://github.com/settings/tokens)

✅ **Done!** Code is on GitHub.

📖 **Detailed guide:** See [GITHUB_SETUP.md](./GITHUB_SETUP.md)

---

## 3. Deploy to Production

### Using Vercel (Recommended)

**Step 1:** Go to https://vercel.com
- Sign up with GitHub
- Authorize Vercel

**Step 2:** Import project
- Click "Add New..." → "Project"
- Select your `healing-magazine-kids` repo
- Click "Import"

**Step 3:** Add environment variables

In Vercel, add these:
```
VITE_SUPABASE_URL = your_url
VITE_SUPABASE_ANON_KEY = your_key
VITE_SUPABASE_SERVICE_ROLE_KEY = your_secret_key
```

**Step 4:** Deploy
- Click "Deploy"
- Wait 2-3 minutes
- Get your URL: `https://healing-magazine-kids.vercel.app`

**Step 5:** Add custom domain (optional)
- Vercel Dashboard → Settings → Domains
- Add your domain (e.g., `kidsmag.loveworld.org`)
- Update DNS records as shown
- Wait for verification

✅ **Done!** App is live.

📖 **Detailed guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 4. Make Your First Change

Let's update the welcome screen text.

**Step 1:** Open the project in VS Code

```bash
code .
```

Or: File → Open Folder → Select your project

**Step 2:** Find the file

Navigate to: `components/WelcomeScreen.tsx`

**Step 3:** Edit the title

Find this line (around line 20):
```tsx
<h1 className="...">
  Welcome to Healing to the Nations Magazine
</h1>
```

Change to:
```tsx
<h1 className="...">
  Welcome to Our Amazing Kids Magazine
</h1>
```

**Step 4:** Save the file

Press `Ctrl + S`

**Step 5:** See the change

If dev server is running, the page auto-refreshes with your change!

**Step 6:** Commit to GitHub

```bash
git add components/WelcomeScreen.tsx
git commit -m "Update welcome screen title"
git push
```

**Step 7:** Auto-deploy

Vercel automatically detects the push and deploys in ~1 minute!

✅ **Done!** You made your first change.

---

## 5. Access Admin Dashboard

**Step 1:** Go to the login page

Visit your app → Click "Already have an account? Login"

**Step 2:** Enter admin username

```
Username: HTTNADMIN
```

(Case-sensitive! All caps)

**Step 3:** Click Login

You'll be taken directly to the admin dashboard (not the magazine).

**Features you'll see:**
- Total users count
- Total visits
- Age distribution chart
- Country distribution chart

**To logout:**
Click "Logout" button → Returns to welcome screen

✅ **Done!** You've accessed the admin panel.

---

## 📚 Common Tasks

### Update Text Content

Most page text is in images. To replace text that needs voiceover:

1. Open the page file (e.g., `components/pages/Page10.tsx`)
2. Find the `TODO:` comment
3. Replace placeholder text with exact content
4. Save and test

### Add a New Page

```tsx
// 1. Create file: components/pages/Page17.tsx
export default function Page17() {
  return (
    <div className="bg-white relative size-full">
      <h1>My New Page</h1>
    </div>
  );
}

// 2. Import in App.tsx
import Page17 from './components/pages/Page17';

// 3. Add to magazinePages array
{
  id: 16,
  component: <Page17 />,
}
```

### Change Admin Username

In `App.tsx`, line ~33:
```tsx
const ADMIN_USERNAME = 'HTTNADMIN'; // Change this
```

### Add Audio File

```tsx
useEffect(() => {
  const audio = new Audio('/path/to/audio.mp3');
  audio.play();
  
  return () => audio.pause();
}, []);
```

---

## 🆘 Troubleshooting

### App won't start

```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Page is blank

- Check browser console (F12) for errors
- Verify environment variables are set
- Check Supabase project is active

### Login doesn't work

- Verify `.env` has correct Supabase credentials
- Check network tab for failed requests
- Ensure user exists in database

### Can't push to GitHub

```bash
# Check remote URL
git remote -v

# Re-add if needed
git remote set-url origin https://github.com/YOUR-USERNAME/healing-magazine-kids.git
```

### Build fails on Vercel

- Check build logs for specific error
- Verify all environment variables are set in Vercel
- Try building locally: `npm run build`

---

## 📖 Documentation Index

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **README.md** | Complete overview | First read, reference |
| **QUICK_START.md** (this file) | Fast setup | Getting started |
| **DEPLOYMENT.md** | Hosting guide | Going to production |
| **GITHUB_SETUP.md** | Version control | Setting up Git |
| **TECHNICAL_DOCUMENTATION.md** | Developer reference | Building features |

---

## 🎯 Next Steps

Now that you're set up:

1. ✅ Run locally and test all features
2. ✅ Push to GitHub for version control
3. ✅ Deploy to Vercel for production
4. ⬜ Add custom domain
5. ⬜ Replace placeholder text with exact content
6. ⬜ Add recorded voiceovers
7. ⬜ Invite team members to GitHub
8. ⬜ Set up monitoring and analytics

---

## 💡 Pro Tips

### Keyboard Shortcuts (VS Code)

- `Ctrl + P` - Quick file search
- `Ctrl + Shift + F` - Search in all files
- `Ctrl + /` - Comment/uncomment line
- `Alt + ↑/↓` - Move line up/down
- `Ctrl + D` - Select next occurrence

### Git Quick Commands

```bash
# See what changed
git status

# Commit everything
git add . && git commit -m "Your message" && git push

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all changes
git reset --hard HEAD
```

### Development Workflow

1. Create feature branch
2. Make changes
3. Test locally
4. Commit and push
5. Vercel auto-deploys preview
6. Test preview
7. Merge to main
8. Production auto-updates

---

## 🔗 Important Links

- **Project Repo**: `https://github.com/YOUR-USERNAME/healing-magazine-kids`
- **Production Site**: `https://your-domain.com`
- **Supabase Dashboard**: https://supabase.com/dashboard
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repo**: `https://github.com/YOUR-USERNAME/healing-magazine-kids`

---

## 🎓 Learning Resources

- **React Tutorial**: https://react.dev/learn
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Git Basics**: https://www.youtube.com/watch?v=HVsySz-h9r4
- **Supabase Guide**: https://supabase.com/docs/guides/getting-started

---

## ✅ Checklist for Launch

Before sharing with users:

- [ ] All 16 pages display correctly
- [ ] Signup creates users in database
- [ ] Login works for all users
- [ ] Admin login works with HTTNADMIN
- [ ] Page flipping is smooth
- [ ] Mobile view is responsive
- [ ] All voiceovers work
- [ ] Quiz scores correctly
- [ ] Admin dashboard shows real data
- [ ] Custom domain is configured
- [ ] SSL certificate is active
- [ ] All placeholder text replaced
- [ ] No console errors
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Team trained on admin access
- [ ] Documentation shared

---

## 🎉 You're All Set!

You now have:
- ✅ Working local development environment
- ✅ Code safely on GitHub
- ✅ Live production website
- ✅ Admin access configured
- ✅ Complete documentation

**Questions?**
- Check specific documentation files
- Review code comments (search for `TODO:`)
- Test in browser console (F12)

**Happy developing!** 🚀

---

**Last Updated**: November 2024  
**Version**: 1.0.0
