# AgwasLab Website

Red Team Social Engineering Company Website - Kenya

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Create a new repository on GitHub (e.g., `agwaslab-website`)
2. Push this code to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/agwaslab-website.git
   git push -u origin main
   ```

3. Go to repository **Settings** → **Pages** (in left sidebar)
4. Under "Build and deployment":
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **main** and **/ (root)**
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/agwaslab-website`

**Note:** It may take 2-5 minutes for the site to be available.

### Option 2: Using GitHub Actions

1. Create a `.github/workflows/deploy.yml` file:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push to main branch - deployment will happen automatically

## 📁 Project Structure

```
agwaslab/
├── dist/                  # Production build (upload this to GitHub Pages)
├── src/                   # Source files
│   ├── App.jsx           # Main React component
│   ├── main.jsx          # Entry point
│   └── index.css         # Styles
├── public/                # Static assets
├── index.html             # HTML entry point
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── CNAME                  # Custom domain (keep for www redirect)
└── README.md              # This file
```

## 🔧 Configuration

### GitHub Pages Settings
- Repository: Set to **Public**
- Branch: **main** / **/ (root)**
- Custom Domain: `www.agwaslab.co.ke`

### Custom Domain Setup
1. Keep the `CNAME` file with your domain
2. In your DNS provider, add:
   - A record: `@` → `185.199.108.153` (or other GitHub IPs)
   - CNAME: `www` → `YOUR_USERNAME.github.io`
3. Enable **Enforce HTTPS** in GitHub Pages settings

## 📝 License

© 2026 AgwasLab. All rights reserved. | Licensed Penetration Testing & Security Audit Firm
