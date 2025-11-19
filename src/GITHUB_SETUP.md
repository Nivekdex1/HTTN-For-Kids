# 📦 GitHub Setup Guide - Healing Magazine for Kids

Step-by-step guide to push this project to a private GitHub repository.

---

## Prerequisites

- Git installed on your Windows machine
- GitHub account created
- Project files ready on your computer

---

## Step 1: Create GitHub Repository

### 1.1 Go to GitHub

1. Open browser and go to https://github.com
2. Log in to your account
3. Click the "+" button in top right
4. Select "New repository"

### 1.2 Configure Repository

Fill in the details:

```
Repository name: healing-magazine-kids
Description: Interactive digital magazine for Loveworld Church's Healing to the Nations Magazine for Kids
Privacy: ✅ Private (IMPORTANT!)
Initialize: ❌ Do NOT check any boxes (no README, .gitignore, or license)
```

Click **"Create repository"**

### 1.3 Copy Repository URL

You'll see a page with setup instructions. Copy the HTTPS URL:

```
https://github.com/YOUR-USERNAME/healing-magazine-kids.git
```

---

## Step 2: Initialize Local Repository

### 2.1 Open Command Prompt

1. Press `Windows + R`
2. Type `cmd` and press Enter
3. Navigate to your project folder:

```bash
cd C:\path\to\healing-magazine
```

For example:
```bash
cd C:\Users\YourName\Documents\healing-magazine
```

### 2.2 Initialize Git

```bash
git init
```

You should see:
```
Initialized empty Git repository in C:/path/to/healing-magazine/.git/
```

---

## Step 3: Configure Git (First Time Only)

If this is your first time using Git on this computer:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace with your actual name and email (use the email associated with your GitHub account).

---

## Step 4: Create .gitignore File

Create a file named `.gitignore` in your project root with this content:

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
build/
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# OS files
Thumbs.db
Desktop.ini

# Supabase
.supabase/

# Misc
*.log
.cache/
```

**IMPORTANT**: This ensures sensitive files (like `.env`) are NOT uploaded to GitHub.

To create this file on Windows:

1. Open Notepad
2. Paste the content above
3. Click File → Save As
4. Navigate to your project folder
5. In "File name" type: `.gitignore` (with the dot at the start)
6. In "Save as type" select: "All Files (*.*)"
7. Click Save

---

## Step 5: Add Files to Git

### 5.1 Check Status

```bash
git status
```

This shows all untracked files.

### 5.2 Add All Files

```bash
git add .
```

The `.` means "add everything in current folder".

### 5.3 Verify Files Are Staged

```bash
git status
```

You should see files listed in green (ready to commit).

**VERIFY**: Make sure `.env` file is NOT listed. If it is, check your `.gitignore`.

---

## Step 6: Create Initial Commit

```bash
git commit -m "Initial commit - Healing Magazine for Kids webapp"
```

You should see output like:
```
[main (root-commit) abc1234] Initial commit - Healing Magazine for Kids webapp
 150 files changed, 15000 insertions(+)
 create mode 100644 App.tsx
 create mode 100644 README.md
 ...
```

---

## Step 7: Connect to GitHub

### 7.1 Add Remote Repository

```bash
git remote add origin https://github.com/YOUR-USERNAME/healing-magazine-kids.git
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### 7.2 Verify Remote

```bash
git remote -v
```

Should show:
```
origin  https://github.com/YOUR-USERNAME/healing-magazine-kids.git (fetch)
origin  https://github.com/YOUR-USERNAME/healing-magazine-kids.git (push)
```

---

## Step 8: Push to GitHub

### 8.1 Set Default Branch Name

```bash
git branch -M main
```

This renames your branch to `main` (GitHub's default).

### 8.2 Push Code

```bash
git push -u origin main
```

You'll be prompted for GitHub credentials:

**If using HTTPS (recommended for beginners):**
1. Username: Your GitHub username
2. Password: Use a **Personal Access Token** (not your account password)

**Creating a Personal Access Token:**
1. Go to GitHub → Settings (your profile) → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. Give it a note: "Healing Magazine Repo"
5. Select scopes: ✅ repo (full control)
6. Click "Generate token"
7. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)
8. Use this token as your password when pushing

### 8.3 Success!

You should see:
```
Enumerating objects: 150, done.
Counting objects: 100% (150/150), done.
Delta compression using up to 8 threads
Compressing objects: 100% (120/120), done.
Writing objects: 100% (150/150), 2.50 MiB | 1.25 MiB/s, done.
Total 150 (delta 40), reused 0 (delta 0)
To https://github.com/YOUR-USERNAME/healing-magazine-kids.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## Step 9: Verify on GitHub

1. Go to https://github.com/YOUR-USERNAME/healing-magazine-kids
2. You should see all your files
3. Check that `.env` is **NOT** there (good!)
4. Verify the repository is marked as 🔒 Private

---

## Daily Workflow: Making Changes

### When You Make Changes:

1. **Check what changed:**
```bash
git status
```

2. **Add changed files:**
```bash
git add .
```
Or add specific files:
```bash
git add App.tsx components/LoginForm.tsx
```

3. **Commit with a message:**
```bash
git commit -m "Add quiz functionality to page 15"
```

4. **Push to GitHub:**
```bash
git push
```

### Example Workflow:

```bash
# Made changes to quiz page
git add components/pages/Page15.tsx

# Commit
git commit -m "Fix quiz scoring bug"

# Push
git push

# Done! Changes are on GitHub
```

---

## Useful Git Commands

### View Commit History
```bash
git log
```

### View Recent Commits (Short)
```bash
git log --oneline
```

### Undo Last Commit (Keep Changes)
```bash
git reset --soft HEAD~1
```

### Discard All Local Changes
```bash
git reset --hard HEAD
```

### Create a New Branch
```bash
git checkout -b feature-name
```

### Switch Between Branches
```bash
git checkout main
git checkout feature-name
```

### Pull Latest Changes (If Working with Team)
```bash
git pull origin main
```

---

## Collaborating with Team Members

### Add Collaborators:

1. Go to your repo on GitHub
2. Settings → Collaborators
3. Click "Add people"
4. Enter their GitHub username or email
5. They'll receive an invitation

### Team Member Setup:

1. Accept invitation email
2. Clone repository:
```bash
git clone https://github.com/YOUR-USERNAME/healing-magazine-kids.git
cd healing-magazine-kids
npm install
```

3. Create `.env` file with credentials (you'll need to share this securely, NOT via GitHub)

---

## Protecting Sensitive Data

### Never Commit:

- ❌ `.env` files
- ❌ API keys
- ❌ Passwords
- ❌ Service role keys
- ❌ Personal access tokens

### If You Accidentally Committed .env:

1. **Remove from tracking:**
```bash
git rm --cached .env
```

2. **Commit the removal:**
```bash
git commit -m "Remove .env from tracking"
```

3. **Push:**
```bash
git push
```

4. **Rotate your keys** in Supabase (since they were exposed)

### Sharing Environment Variables:

Use a secure method:
- Password manager (1Password, LastPass)
- Encrypted message
- In-person/video call
- Secure company chat with encryption

**Never:**
- Email
- Slack (unless encrypted)
- GitHub
- Text message

---

## GitHub Features to Use

### Issues

Track bugs and feature requests:

1. Go to repo → Issues tab
2. Click "New issue"
3. Describe the bug/feature
4. Assign to team member
5. Add labels (bug, enhancement, etc.)

### Pull Requests (For Team Collaboration)

1. Create branch for feature:
```bash
git checkout -b add-page-17
```

2. Make changes and commit
```bash
git add .
git commit -m "Add page 17"
```

3. Push branch:
```bash
git push origin add-page-17
```

4. On GitHub, create Pull Request
5. Team reviews
6. Merge to main when approved

### Releases

Create version tags:

```bash
git tag -a v1.0.0 -m "First release"
git push origin v1.0.0
```

On GitHub → Releases → Draft new release

---

## Backup Strategy

### Your repository is now backed up on GitHub! 🎉

But also consider:

1. **Local Backups:**
   - External hard drive
   - Cloud storage (Google Drive, OneDrive)

2. **GitHub Backups:**
   - Settings → Options → Scroll down
   - "Archive repository" (if discontinuing)
   - Or export data periodically

3. **Database Backups:**
   - Supabase auto-backs up database
   - Manual export: Supabase → Database → Backups
   - Download SQL dump monthly

---

## Troubleshooting

### "Permission denied (publickey)"

You're using SSH instead of HTTPS. Either:

**Option 1: Switch to HTTPS**
```bash
git remote set-url origin https://github.com/YOUR-USERNAME/healing-magazine-kids.git
```

**Option 2: Set up SSH key**
Follow: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### "fatal: not a git repository"

You're not in the project folder. Navigate:
```bash
cd C:\path\to\healing-magazine
```

### "Updates were rejected"

Someone else pushed changes. Pull first:
```bash
git pull origin main
```

Then push:
```bash
git push origin main
```

### Can't Push - Too Large

GitHub has 100MB file size limit. Find large files:
```bash
git ls-files -s | sort -k3 -n -r | head -10
```

Use Git LFS for large files:
```bash
git lfs install
git lfs track "*.mp4"
git lfs track "*.mp3"
```

---

## Best Practices

### Commit Messages

✅ Good:
```
"Add quiz functionality to page 15"
"Fix page flip animation bug"
"Update admin dashboard styling"
```

❌ Bad:
```
"Update"
"Changes"
"asdf"
```

### Commit Frequency

- Commit after each logical change
- Don't wait too long
- Don't commit broken code to main

### Branch Naming

```
feature/page-17
bugfix/quiz-scoring
hotfix/login-issue
```

---

## Next Steps

1. ✅ Repository created and code pushed
2. ✅ Collaborators invited (if team)
3. ⬜ Set up automatic deployments (Vercel → GitHub)
4. ⬜ Configure GitHub Actions for CI/CD (optional)
5. ⬜ Create development branch for testing

---

## Summary Commands

```bash
# Initial setup (one time)
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/healing-magazine-kids.git
git branch -M main
git push -u origin main

# Daily workflow
git add .
git commit -m "Description of changes"
git push

# View status
git status

# View history
git log --oneline
```

---

**Your code is now safely on GitHub!** 🎉

You can access it from anywhere, collaborate with team members, and never worry about losing your work.

---

**Questions?**
- GitHub Docs: https://docs.github.com
- Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf
- Visual Git Guide: https://marklodato.github.io/visual-git-guide/index-en.html
