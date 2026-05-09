# CT6 Phase 6 - Voice, Tone, and Microcopy

This update upgrades the CT6 static brand guideline app with a content system for:

- `/voice-tone/`
- `/microcopy/`

## Voice direction

CT6 Companion speaks like a calm operations officer:

- Direct
- Controlled
- Professional
- Useful
- Premium through restraint

## Microcopy direction

Microcopy should be short, specific, and actionable. It should explain status, reduce uncertainty, and avoid hype.

Examples:

Good:
`Fleet sync complete. 12 records updated.`

Bad:
`WOW!!! Your fleet is ready!!!`

## Files added

- `src/data/contentExamples.ts`
- `src/components/VoiceToneShowcase.tsx`
- `src/components/MicrocopyShowcase.tsx`
- `src/styles/content-system.css`

## Files modified

- `src/components/GuidePage.tsx`
- `src/app/globals.css`

## Vercel config

This update does not create or modify `vercel.json`.