# CT6 Companion Static Guideline App Structure

## Purpose

The static guideline app is the internal source of truth for CT6 Companion and future CT6 apps. It should be readable by designers, developers, marketers, and content writers.

## Recommended Routes

```text
/
/overview
/foundation
/strategy
/logo
/app-icon
/colors
/typography
/layout
/components
/iconography
/illustration
/imagery
/motion
/voice-tone
/microcopy
/accessibility
/themes
/app-store
/social
/email-notifications
/tokens
/do-dont
/assets
/implementation
```

## Page Template

Each page should use this structure:

```text
Eyebrow
Page title
Summary
Core guidance panels
Examples or token tables
Do/don't examples when relevant
Implementation notes
```

## Layout Rules

- Desktop uses a persistent left sidebar.
- Mobile stacks navigation above content.
- Page content is capped for readability.
- Panels use glass surfaces, subtle borders, and dark backgrounds.
- Token pages should include tables and visual previews.

## Content Source

Current content is stored in `src/data/guideContent.ts`. This keeps the app static and easy to extend.

## Recommended Future Enhancements

- Add search across guideline sections.
- Add theme toggle.
- Add copy-to-clipboard buttons for token names.
- Add downloadable token files.
- Add component state previews.
- Add screenshot-safe mock data examples.
- Add changelog/version history.
