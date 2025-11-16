# Deployment Guide - Deploy Codoxc to GitHub Pages

## Prerequisites

1. GitHub account
2. Git installed on your machine
3. Bun installed

## Step-by-Step Deployment

### 1. Initialize Git Repository

```bash
cd codoxc
git init
git add .
git commit -m "Initial commit: Codoxc Next.js app"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `codoxc`
3. Make it **Public**
4. Don't initialize with README (we already have one)
5. Click "Create repository"

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/codoxc.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Actions

The workflow file is already created at `.github/workflows/deploy.yml`

When you push to `main` branch, GitHub Actions will automatically:
- Install dependencies
- Build the project
- Deploy to `gh-pages` branch

### 5. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section (left sidebar)
4. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click "Save"

### 6. Access Your App

After deployment completes (check Actions tab), your app will be live at:

```
https://YOUR_USERNAME.github.io/codoxc/
```

## Local Development

```bash
# Development mode
bun dev

# Build for production
bun run build

# Preview production build locally
bun start
```

## Important Notes

- The `basePath` and `assetPrefix` in `next.config.mjs` are configured for `/codoxc`
- If you change the repository name, update these settings
- The app uses static export (`output: "export"`) for GitHub Pages compatibility
- Images are unoptimized for static hosting

## Troubleshooting

### Build Fails

Check the Actions tab on GitHub for error logs.

### 404 Page Not Found

Make sure:
1. GitHub Pages is enabled
2. Source is set to `gh-pages` branch
3. Wait a few minutes after deployment

### Assets Not Loading

Verify `basePath` matches your repository name in `next.config.mjs`

## Update Deployment

Just push to main:

```bash
git add .
git commit -m "Update: description"
git push
```

GitHub Actions will automatically rebuild and redeploy.
