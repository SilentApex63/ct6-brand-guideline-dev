export type QualityCard = {
  title: string;
  summary: string;
  rules: string[];
};

export type ComparisonExample = {
  area: string;
  doThis: string;
  avoidThis: string;
  reason: string;
};

export const accessibilityCards: QualityCard[] = [
  {
    title: 'Contrast and readability',
    summary: 'Every CT6 screen must stay readable in dark mode and light mode.',
    rules: [
      'Normal text should target 4.5:1 contrast or higher.',
      'Large display text should target 3:1 contrast or higher.',
      'Do not use Command Green as long-form body text.',
      'Use labels or icons with color-based status indicators.',
    ],
  },
  {
    title: 'Keyboard and focus',
    summary: 'The app must work for keyboard users and visible focus must never be removed.',
    rules: [
      'Every button, link, input, tab, and modal control must be keyboard reachable.',
      'Focus state should use a visible green or cyan outline.',
      'Modal dialogs must trap focus until closed.',
      'Escape should close non-destructive modals and menus.',
    ],
  },
  {
    title: 'Touch and mobile',
    summary: 'Mobile controls must be easy to use under operational conditions.',
    rules: [
      'Primary touch targets should be 44px or larger.',
      'Icon-only buttons need accessible labels.',
      'Tables should scroll horizontally or convert into cards.',
      'Critical actions should not be placed too close together.',
    ],
  },
  {
    title: 'Motion sensitivity',
    summary: 'Motion should be controlled and must respect reduced-motion preferences.',
    rules: [
      'Disable shimmer, pulsing, and slide transitions when reduced motion is enabled.',
      'Replace complex transitions with quick fades.',
      'Avoid flashing or alarm-like animation patterns.',
      'Never make essential information depend on animation.',
    ],
  },
];

export const themeCards: QualityCard[] = [
  {
    title: 'Dark mode primary',
    summary: 'Dark mode is the official CT6 Companion brand experience.',
    rules: [
      'Use Void Black and Carbon for base backgrounds.',
      'Use elevated Obsidian panels for cards and modals.',
      'Use Command Green for active states and primary actions.',
      'Use Gold only for premium, leadership, or milestone emphasis.',
    ],
  },
  {
    title: 'Light mode secondary',
    summary: 'Light mode exists for accessibility, documentation, and user preference.',
    rules: [
      'Keep the palette cool and tactical, not bright or playful.',
      'Use strong borders to preserve the command-panel structure.',
      'Use darker green for primary actions on light backgrounds.',
      'Do not remove CT6 identity from light mode.',
    ],
  },
  {
    title: 'Theme switching',
    summary: 'Theme switching should preserve layout, hierarchy, and interaction meaning.',
    rules: [
      'Do not change component structure between themes.',
      'Semantic colors must mean the same thing in both modes.',
      'Check charts and badges in both modes.',
      'Do not rely on glow effects for visibility.',
    ],
  },
];

export const motionCards: QualityCard[] = [
  {
    title: 'Motion personality',
    summary: 'Motion should feel precise, controlled, and tactical.',
    rules: [
      'Use fast feedback for buttons and controls.',
      'Use calm fade or scale transitions for panels.',
      'Avoid dramatic cinematic transitions inside the product UI.',
      'Motion should support orientation, not distract.',
    ],
  },
  {
    title: 'Timing rules',
    summary: 'Motion should be short and predictable.',
    rules: [
      'Small interaction: 100 to 150ms.',
      'Toast entrance: 180 to 220ms.',
      'Modal transition: 220 to 300ms.',
      'Screen transition: 250 to 400ms.',
    ],
  },
  {
    title: 'State transitions',
    summary: 'Changes should clearly communicate result and status.',
    rules: [
      'Use subtle border glow for active cards.',
      'Use skeleton states for loading data-heavy screens.',
      'Use short green confirmation pulses for success.',
      'Use calm red inline feedback for errors.',
    ],
  },
];

export const doDontExamples: ComparisonExample[] = [
  {
    area: 'Logo',
    doThis: 'Use the approved CT6 logo with clear space and sufficient contrast.',
    avoidThis: 'Do not stretch, recolor randomly, or place the logo over busy screenshots.',
    reason: 'Logo consistency protects recognition and premium quality.',
  },
  {
    area: 'Color',
    doThis: 'Use Command Green for primary actions, readiness, and active states.',
    avoidThis: 'Do not use green as decoration on every border, icon, and glow.',
    reason: 'Restrained color use keeps the UI premium and readable.',
  },
  {
    area: 'Typography',
    doThis: 'Use Inter for UI and Space Grotesk for major headings.',
    avoidThis: 'Do not use decorative sci-fi fonts for body text.',
    reason: 'The app must feel futuristic without sacrificing readability.',
  },
  {
    area: 'Voice',
    doThis: 'Use direct copy: Fleet sync complete. 12 records updated.',
    avoidThis: 'Do not write hype copy: WOW!!! Your fleet is ready!!!',
    reason: 'The brand voice is controlled, professional, and operational.',
  },
  {
    area: 'Accessibility',
    doThis: 'Pair status colors with labels and icons.',
    avoidThis: 'Do not rely on red and green alone.',
    reason: 'The interface must remain usable for color-blind members.',
  },
  {
    area: 'App Store',
    doThis: 'Show real UI screenshots with masked private data.',
    avoidThis: 'Do not use cinematic filler art without showing product value.',
    reason: 'Store assets must prove the app is useful and trustworthy.',
  },
];

export const implementationTracks: QualityCard[] = [
  {
    title: 'Design system readiness',
    summary: 'Prepare the guideline to become a reusable source of truth.',
    rules: [
      'Use tokens for color, typography, spacing, radius, shadows, and motion.',
      'Keep all component examples consistent with CT6 visual language.',
      'Document do and do-not rules beside examples.',
      'Create screenshot-safe demo data for all product mockups.',
    ],
  },
  {
    title: 'Engineering readiness',
    summary: 'Keep the static app deployable and easy to maintain.',
    rules: [
      'Run npm run build before every push.',
      'Do not recreate vercel.json unless there is a clear need.',
      'Keep content in data files where possible.',
      'Avoid writing files with UTF-8 BOM.',
    ],
  },
  {
    title: 'Brand asset readiness',
    summary: 'Finalize exports for real product, social, and store use.',
    rules: [
      'Prepare logo PNG, transparent PNG, SVG, app icon, favicon, and social avatar.',
      'Create dark and light logo variants.',
      'Prepare App Store and Google Play screenshot templates.',
      'Create Discord announcement templates.',
    ],
  },
  {
    title: 'Final QA checklist',
    summary: 'Review the static guideline app like a production deliverable.',
    rules: [
      'Check every sidebar link.',
      'Check mobile layout and horizontal overflow.',
      'Check contrast on all major pages.',
      'Check spelling, tone, and broken characters.',
    ],
  },
];

export const qaChecklist = [
  'Homepage loads and explains the purpose clearly.',
  'All sidebar routes load without 404.',
  'Logo assets appear correctly.',
  'Colors page shows palette, tokens, usage, and accessibility notes.',
  'Typography page shows type scale and font roles.',
  'Tokens page is developer-readable.',
  'Components page shows usable CT6 UI examples.',
  'Voice and microcopy pages include good and bad examples.',
  'Launch pages include store, social, email, and notification guidance.',
  'Accessibility, themes, motion, do-dont, and implementation pages are complete.',
];