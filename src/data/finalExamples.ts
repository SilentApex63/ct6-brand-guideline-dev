export type CompletionCard = {
  title: string;
  status: string;
  summary: string;
  items: string[];
};

export type RuleCard = {
  title: string;
  principle: string;
  rules: string[];
};

export const completionCards: CompletionCard[] = [
  {
    title: 'Brand foundation',
    status: 'Ready',
    summary: 'Mission, vision, values, audience, promise, and positioning are defined.',
    items: ['CT6-only audience', 'Command Glass Ops direction', 'Private org companion positioning'],
  },
  {
    title: 'Visual system',
    status: 'Ready',
    summary: 'Colors, typography, tokens, components, motion, and themes are documented.',
    items: ['Dark-first palette', 'Inter / Space Grotesk / JetBrains Mono', 'Reusable token system'],
  },
  {
    title: 'Identity system',
    status: 'Ready',
    summary: 'Logo assets are integrated and app icon direction is documented.',
    items: ['Primary logo asset', 'Transparent logo asset', 'SVG asset', 'App icon rules'],
  },
  {
    title: 'Content system',
    status: 'Ready',
    summary: 'Voice, tone, microcopy, launch messaging, and notifications are documented.',
    items: ['Operational voice', 'Good/bad examples', 'Push and email rules'],
  },
  {
    title: 'Production readiness',
    status: 'Ready for review',
    summary: 'Accessibility, QA, implementation guidance, and final checks are in place.',
    items: ['Accessibility rules', 'Mobile review checklist', 'Implementation checklist'],
  },
];

export const foundationRules: RuleCard[] = [
  {
    title: 'Mission control',
    principle: 'Every brand decision should support CT6 operational clarity.',
    rules: [
      'Explain what the app helps members do faster or more confidently.',
      'Avoid vague premium language unless it maps to a real UI or content rule.',
      'Keep CT6-only privacy and member context visible in examples.',
    ],
  },
  {
    title: 'Member trust',
    principle: 'The app should feel private, controlled, and reliable.',
    rules: [
      'Mask real account, fleet, and member data in public examples.',
      'Use calm status language for errors and security messages.',
      'Do not imply official Star Citizen, RSI, or CIG affiliation unless approved.',
    ],
  },
  {
    title: 'Command readiness',
    principle: 'The brand should make members feel ready without creating noise.',
    rules: [
      'Prioritize readable cards, clear states, and direct actions.',
      'Use tactical visuals as structure, not decoration.',
      'Use excitement through quality and control, not hype copy.',
    ],
  },
];

export const strategyRules: RuleCard[] = [
  {
    title: 'Positioning',
    principle: 'CT6 Companion is not a generic database; it is a private CT6 command layer.',
    rules: [
      'Lead with unified access: missions, blueprints, ships, fleet, items, and insights.',
      'Differentiate through CT6-only workflows and member context.',
      'Frame competitor alternatives as fragmented information sources, not enemies.',
    ],
  },
  {
    title: 'Emotional outcome',
    principle: 'Members should feel focused, confident, prepared, and in control.',
    rules: [
      'Use UI hierarchy that reduces scanning effort.',
      'Use language that confirms readiness and next steps.',
      'Avoid visual clutter that makes the app feel stressful.',
    ],
  },
  {
    title: 'Brand archetype',
    principle: 'Ruler plus Sage: controlled, intelligent, structured, and precise.',
    rules: [
      'Use authority without arrogance.',
      'Use intelligence without over-explaining.',
      'Use serious tone without becoming cold or unfriendly.',
    ],
  },
];

export const layoutRules: RuleCard[] = [
  {
    title: 'Responsive command grid',
    principle: 'The interface should adapt without losing operational hierarchy.',
    rules: [
      'Mobile: cards and bottom-sheet patterns before dense tables.',
      'Tablet: two-column summaries and focused detail panels.',
      'Desktop: sidebar, command bar, filters, tables, and detail panels can coexist.',
    ],
  },
  {
    title: 'Density control',
    principle: 'Dense data is allowed only when hierarchy remains clear.',
    rules: [
      'Use compact density for blueprints, fleet lists, and item databases.',
      'Use comfortable density for onboarding, settings, and brand pages.',
      'Always preserve touch targets and spacing on mobile.',
    ],
  },
  {
    title: 'Alignment',
    principle: 'The CT6 interface should feel disciplined and easy to scan.',
    rules: [
      'Left-align text content and labels.',
      'Right-align numeric values in tables.',
      'Use consistent status placement in cards and rows.',
    ],
  },
];

export const visualLanguageRules: Record<string, RuleCard[]> = {
  iconography: [
    {
      title: 'Icon library',
      principle: 'Use clean outlined icons for standard UI behavior.',
      rules: [
        'Use one consistent icon library for common UI actions.',
        'Use custom icons only for CT6-specific modules.',
        'Pair unclear icons with labels or tooltips.',
      ],
    },
    {
      title: 'Icon color',
      principle: 'Icon color should communicate state, not decoration.',
      rules: [
        'Neutral icons use Silver Grey.',
        'Active icons use Command Green.',
        'Danger icons use Alert Red only for destructive or error states.',
      ],
    },
  ],
  illustration: [
    {
      title: 'Schematic graphics',
      principle: 'Illustrations should feel like tactical diagrams and blueprint overlays.',
      rules: [
        'Use angular panels, grids, brackets, and coordinate markers.',
        'Keep detail low to medium so illustrations do not compete with data.',
        'Avoid cartoon mascots, cute blobs, and bright playful shapes.',
      ],
    },
    {
      title: 'Empty states',
      principle: 'Empty states should explain what is missing and what to do next.',
      rules: [
        'Use one simple schematic illustration.',
        'Use a clear title, one short body sentence, and one CTA when useful.',
        'Never blame the user for missing content.',
      ],
    },
  ],
  imagery: [
    {
      title: 'Product-first imagery',
      principle: 'Screenshots and mockups are more important than decorative sci-fi art.',
      rules: [
        'Show real UI structure with mock or masked data.',
        'Use dark overlays and CT6 accent lines for marketing images.',
        'Avoid stock office photos and unofficial third-party branding.',
      ],
    },
    {
      title: 'Privacy safe images',
      principle: 'No public asset should expose private member/account data.',
      rules: [
        'Mask IDs, handles, and fleet/account details in screenshots.',
        'Use controlled demo data for all marketing previews.',
        'Keep screenshots readable at social and store sizes.',
      ],
    },
  ],
};

export const finalQaItems = [
  'Every sidebar route loads without 404.',
  'No file contains visible broken encoding characters.',
  'Vercel deploys without vercel.json.',
  'All major pages have visual examples, not only text.',
  'Logo assets render correctly.',
  'Primary CT6 color roles are consistent.',
  'Typography is readable on desktop and mobile.',
  'Component examples match the token system.',
  'Launch examples protect private data.',
  'Accessibility guidance is specific and usable.',
  'Mobile layout has no major horizontal overflow outside tables.',
  'The app can now be used as the CT6 brand source of truth.',
];