# CT6 Companion Brand Guideline Starter

A static brand guideline and design-token starter package for **CT6 Companion**.

This package contains:

- Developer-ready design tokens in JSON
- CSS custom properties for app implementation
- A static Next.js guideline app structure
- Route/content structure for all major brand guideline sections
- Starter UI components for token tables, color swatches, navigation, and content panels
- Documentation for implementation and asset planning

## Brand Direction

**Command Glass Ops**

Dark tactical command-console UI, premium glassmorphism, gunmetal surfaces, Command Green active states, restrained gold accents, and serious professional copy.

## Folder Structure

```text
src/
  app/
    page.tsx
    [slug]/page.tsx
    globals.css
  components/
    BrandShell.tsx
    Sidebar.tsx
    SectionHeader.tsx
    GuidePage.tsx
    ColorSwatches.tsx
    TokenTables.tsx
  data/
    guideContent.ts
    navigation.ts
    tokenTables.ts
  design-tokens/
    colors.json
    typography.json
    spacing.json
    radius.json
    shadows.json
    motion.json
    breakpoints.json
    z-index.json
    tokens.json
  styles/
    tokens.css
docs/
  APP_STRUCTURE.md
  DESIGN_TOKENS.md
  IMPLEMENTATION_PLAN.md
```

## Run Locally

```bash
npm install
npm run dev
```

## Build Static Output

```bash
npm run build
```

The project is configured with `output: 'export'`, so the static build can be hosted as a static site.

## Where to Edit

- Edit guideline page text in `src/data/guideContent.ts`
- Edit route labels in `src/data/navigation.ts`
- Edit token previews in `src/data/tokenTables.ts`
- Edit token JSON in `src/design-tokens/`
- Edit CSS variables in `src/styles/tokens.css`
- Edit app styling in `src/app/globals.css`

## Important Brand Notes

- Dark mode is primary.
- Green is for primary actions, active states, success, and readiness.
- Red is only for errors, danger, and destructive actions.
- Gold is for premium/rank/leadership accents.
- Private data must be masked in public screenshots and marketing material.
- Avoid copying or implying official Star Citizen/RSI branding unless permission is granted.


## Dev Deployment

This is a static brand guideline app. Deploy it as a separate review project, preferably named `ct6-brand-guideline-dev`, not as the main CT6 Companion product app.

Recommended Vercel settings:

```text
Framework Preset: Next.js
Build Command: npm run build
Output Directory: out
```

See `docs/DEV_DEPLOYMENT.md` for the full review/deployment flow.
