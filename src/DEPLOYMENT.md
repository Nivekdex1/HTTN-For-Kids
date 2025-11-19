# 🚀 Deployment Guide - Healing Magazine for Kids

Complete step-by-step guide for deploying the Healing to the Nations Magazine webapp to production with a custom domain.

---

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Deployment to Vercel (Recommended)](#deployment-to-vercel-recommended)
3. [Deployment to Netlify](#deployment-to-netlify)
4. [Custom Domain Setup](#custom-domain-setup)
5. [SSL Certificate](#ssl-certificate)
6. [Post-Deployment Steps](#post-deployment-steps)
7. [Updating Production](#updating-production)

---

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All environment variables are set correctly
- [ ] Supabase Edge Functions are deployed
- [ ] Database is configured and accessible
- [ ] All placeholder text is replaced with actual content
- [ ] Images are optimized and loading correctly
- [ ] Admin username is configured
- [ ] Testing completed locally
- [ ] Code is pushed to GitHub
- [ ] `.env` file is NOT committed (check `.gitignore`)

---

## 🌟 Deployment to Vercel (Recommended)

Vercel is the easiest and fastest deployment option for React apps.

### Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### Step 2: Import Project

1. From Vercel dashboard, click "Add New..." → "Project"
2. Import your GitHub repository:
   - Search for `healing-magazine-kids`
   - Click "Import"

### Step 3: Configure Build Settings

Vercel auto-detects most settings, but verify:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Step 4: Add Environment Variables

1. In the "Environment Variables" section, add:

   ```
   VITE_SUPABASE_URL = your_supabase_url
   VITE_SUPABASE_ANON_KEY = your_anon_key
   VITE_SUPABASE_SERVICE_ROLE_KEY = your_service_role_key
   ```

2. Select "Production", "Preview", and "Development" for each variable

### Step 5: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. Once done, you'll get a URL like: `https://healing-magazine-kids.vercel.app`

### Step 6: Test Deployment

1. Visit the deployed URL
2. Test signup flow
3. Test login
4. Test admin access with `HTTNADMIN`
5. Flip through all pages
6. Check browser console for errors

---

## 🔷 Deployment to Netlify

Alternative to Vercel, also very reliable.

### Step 1: Create Netlify Account

1. Go to https://netlify.com
2. Sign up with GitHub

### Step 2: Import Project

1. Click "Add new site" → "Import an existing project"
2. Choose "GitHub"
3. Authorize Netlify
4. Select your repository

### Step 3: Build Settings

```
Build command: npm run build
Publish directory: dist
```

### Step 4: Environment Variables

1. Click "Site settings" → "Environment variables"
2. Add all variables from your `.env` file:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_SUPABASE_SERVICE_ROLE_KEY`

### Step 5: Deploy

1. Click "Deploy site"
2. Monitor deploy logs
3. Once complete, visit your site: `https://random-name.netlify.app`

### Step 6: Test

Same testing steps as Vercel.

---

## 🌐 Custom Domain Setup

### Option A: Using Vercel

1. **Purchase Domain** (if you don't have one):
   - GoDaddy, Namecheap, Google Domains, etc.
   - Example: `kidsmag.loveworld.org`

2. **Add Domain in Vercel**:
   - Go to your project in Vercel
   - Click "Settings" → "Domains"
   - Enter your domain: `kidsmag.loveworld.org`
   - Click "Add"

3. **Configure DNS** (at your domain provider):

   Vercel will show you DNS records to add. Typically:

   **For subdomain (e.g., kidsmag.loveworld.org):**
   ```
   Type: CNAME
   Name: kidsmag (or whatever subdomain you chose)
   Value: cname.vercel-dns.com
   ```

   **For root domain (e.g., kidsmag.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

4. **How to Add DNS Records**:

   **GoDaddy:**
   - Log in → My Products → DNS
   - Click "Add" under Records
   - Select type (CNAME or A)
   - Enter name and value
   - Save

   **Namecheap:**
   - Log in → Domain List → Manage
   - Advanced DNS
   - Add New Record
   - Enter details and save

   **Cloudflare:**
   - Select domain
   - DNS → Add record
   - Enter details and save

5. **Wait for DNS Propagation**:
   - Can take 5 minutes to 48 hours
   - Check status: https://www.whatsmydns.net/
   - Vercel will auto-verify once propagated

6. **SSL Certificate**:
   - Vercel automatically provisions SSL
   - Your site will be `https://` within minutes

### Option B: Using Netlify

1. **Add Domain**:
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain

2. **Configure DNS**:

   **Option 1 - Netlify DNS (Recommended):**
   - Click "Use Netlify DNS"
   - Update nameservers at your domain provider to:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```

   **Option 2 - External DNS:**
   Add CNAME record:
   ```
   Type: CNAME
   Name: kidsmag
   Value: your-site-name.netlify.app
   ```

3. **SSL**:
   - Netlify auto-provisions Let's Encrypt SSL
   - Activate under Domain settings → HTTPS

---

## 🔒 SSL Certificate

Both Vercel and Netlify provide free SSL certificates automatically.

### Verifying SSL:

1. Visit your site with `https://`
2. Click padlock icon in browser
3. Check certificate details
4. Should show "Issued by: Let's Encrypt" or similar

### Force HTTPS:

Add to `vercel.json` in project root:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000"
        }
      ]
    }
  ]
}
```

Or in Netlify, add to `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=63072000"
```

---

## ✅ Post-Deployment Steps

After successful deployment:

1. **Update Supabase Allowed Origins**:
   - Go to Supabase Dashboard
   - Authentication → URL Configuration
   - Add your production domain to "Site URL"
   - Add to "Redirect URLs"

2. **Test All Features**:
   - [ ] Welcome screen loads
   - [ ] Signup creates new user
   - [ ] Login works for existing user
   - [ ] Magazine displays correctly
   - [ ] Page flipping works smoothly
   - [ ] Voiceovers play
   - [ ] Quiz functions properly
   - [ ] Admin login works
   - [ ] Admin dashboard shows data
   - [ ] Mobile view is responsive

3. **Performance Check**:
   - Run Google Lighthouse audit
   - Check loading times
   - Verify images are optimized
   - Test on slow connection

4. **Security Check**:
   - [ ] `.env` file NOT in repository
   - [ ] Service role key NOT exposed in frontend
   - [ ] HTTPS working
   - [ ] CORS configured correctly

5. **Share with Team**:
   - Send production URL
   - Provide admin credentials securely
   - Share documentation

---

## 🔄 Updating Production

### For Automatic Deployments (Recommended):

1. Make changes locally
2. Test thoroughly
3. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
4. Push to GitHub:
   ```bash
   git push origin main
   ```
5. Vercel/Netlify auto-deploys within 1-2 minutes

### For Manual Deployments:

**Vercel CLI:**
```bash
npm install -g vercel
vercel --prod
```

**Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Rollback if Needed:

**Vercel:**
- Go to Deployments
- Find previous working deployment
- Click "..." → "Promote to Production"

**Netlify:**
- Go to Deploys
- Find previous deployment
- Click "Publish deploy"

---

## 🔍 Monitoring Deployments

### Vercel:

1. Dashboard → Your Project → Deployments
2. Click on a deployment to see:
   - Build logs
   - Runtime logs
   - Performance metrics

### Netlify:

1. Site dashboard → Deploys
2. Click deployment for:
   - Deploy log
   - Function logs
   - Edge logs

### Set Up Notifications:

**Vercel:**
- Settings → Notifications
- Enable Discord/Slack webhooks

**Netlify:**
- Site settings → Deploy notifications
- Add email/webhook notifications

---

## 🆘 Troubleshooting Deployment Issues

### Build Fails:

1. Check build logs for errors
2. Verify all dependencies in `package.json`
3. Test build locally:
   ```bash
   npm run build
   ```
4. Check for missing environment variables

### Site Loads but Broken:

1. Open browser console (F12)
2. Check for:
   - 404 errors (missing assets)
   - CORS errors (Supabase config)
   - Environment variable issues
3. Verify environment variables in hosting platform

### Custom Domain Not Working:

1. Check DNS propagation: https://www.whatsmydns.net/
2. Verify DNS records are correct
3. Wait up to 48 hours for full propagation
4. Clear browser cache
5. Try incognito/private browsing

### Database Connection Issues:

1. Verify Supabase project is active
2. Check allowed origins in Supabase
3. Test API endpoint directly
4. Review Supabase function logs

---

## 📊 Performance Optimization

### Before Deploying:

1. **Optimize Images**:
   ```bash
   # Install optimization tool
   npm install -g sharp-cli
   
   # Compress images
   sharp -i input.png -o output.png --quality 80
   ```

2. **Code Splitting**:
   - Already handled by Vite
   - Each page loads on demand

3. **Enable Caching**:
   - Vercel/Netlify handle this automatically
   - Static assets cached for 1 year

4. **CDN**:
   - Both platforms use global CDN
   - Content served from nearest location

### Monitoring Performance:

1. **Google Lighthouse**:
   - Right-click → Inspect → Lighthouse
   - Run audit
   - Aim for >90 score

2. **Vercel Analytics** (optional paid):
   - Real user metrics
   - Core Web Vitals tracking

3. **Netlify Analytics** (optional paid):
   - Server-side analytics
   - No performance impact

---

## 🎯 Final Checklist

Before launching publicly:

- [ ] All features tested on production
- [ ] Custom domain configured and working
- [ ] SSL certificate active
- [ ] Admin access tested
- [ ] Mobile experience verified
- [ ] All placeholder content replaced
- [ ] Voiceovers working correctly
- [ ] Page tracking functional
- [ ] Error logging set up
- [ ] Backup of database created
- [ ] Team members notified
- [ ] Documentation shared

---

## 📝 Deployment Summary

**Recommended Setup:**
- **Hosting**: Vercel
- **Domain**: Custom domain from your provider
- **SSL**: Auto (Let's Encrypt via Vercel)
- **Database**: Supabase
- **CDN**: Vercel Edge Network
- **Deployment**: Auto (push to GitHub main branch)

**Estimated Costs:**
- Vercel: Free (Hobby plan sufficient)
- Domain: $10-15/year
- Supabase: Free tier (upgrade if needed)
- **Total**: ~$10-15/year + optional upgrades

---

**Need Help?**
- Vercel Support: https://vercel.com/support
- Netlify Support: https://www.netlify.com/support/
- Supabase Discord: https://discord.supabase.com/

**Deployment Complete!** 🎉
