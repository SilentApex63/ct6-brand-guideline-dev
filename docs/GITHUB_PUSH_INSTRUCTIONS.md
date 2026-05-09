# GitHub Push Instructions

Repository:

```text
https://github.com/SilentApex63/ct6-brand-guideline-dev.git
```

## Push the static Brand Guideline App

From inside the unzipped project folder:

```bash
git init
git branch -M main
git remote add origin https://github.com/SilentApex63/ct6-brand-guideline-dev.git
git add .
git commit -m "Initial static brand guideline app"
git push -u origin main
```

If the remote already has files, use:

```bash
git pull origin main --allow-unrelated-histories
git add .
git commit -m "Add CT6 static brand guideline app"
git push origin main
```

## Vercel settings

Use these settings when importing the repo:

```text
Framework Preset: Next.js
Build Command: npm run build
Output Directory: out
Install Command: npm install
```

The project is configured with `next.config.mjs` using static export and `vercel.json` using `out` as the output directory.
