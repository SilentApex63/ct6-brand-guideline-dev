# Dev Deployment Plan

This project is a static brand guideline app. It should be deployed as its own review app, separate from the real CT6 Companion product app.

## Recommended Vercel Project

Create or use a dedicated Vercel project named:

```text
ct6-brand-guideline-dev
```

Do not deploy this guideline app over the `ct6-companion-app` product project.

## Vercel Settings

```text
Framework Preset: Next.js
Build Command: npm run build
Output Directory: out
Install Command: npm install
Node Version: 22.x or latest supported LTS
```

The app uses `output: 'export'` in `next.config.mjs`, so `npm run build` generates a static site in `/out`.

## Local Development

```bash
npm install
npm run dev
```

## Static Build

```bash
npm run build
```

## Static Preview

```bash
npm run build
npm run preview:static
```

## Review Flow After Each Step

1. Make the next design-system update.
2. Run `npm run build`.
3. Commit and push to the connected Git branch.
4. Vercel creates a new Preview Deployment.
5. Review the Preview URL.
6. Promote to Production only when the guideline milestone is approved.

## Suggested Branches

```text
main = stable approved guideline
preview = latest review version
feature/* = individual design-system updates
```

## Current Build Status

This package has been build-checked with:

```bash
npm install
npm run build
```

The static build completed successfully after the TypeScript content typing fix in `src/data/guideContent.ts` and `src/components/GuidePage.tsx`.
