export type PaletteColor = {
  name: string;
  hex: string;
  rgb: string;
  token: string;
  usage: string;
  note: string;
  text?: 'light' | 'dark';
};

export type PaletteGroup = {
  title: string;
  description: string;
  colors: readonly PaletteColor[];
};

export const paletteGroups: readonly PaletteGroup[] = [
  {
    title: 'Primary command palette',
    description: 'Core brand colors used across the static guideline app and future CT6 interfaces.',
    colors: [
      {
        name: 'Void Black',
        hex: '#050607',
        rgb: '5, 6, 7',
        token: 'color.primary.950',
        usage: 'Default app background, launch screens, deep command surfaces.',
        note: 'Use as the base environment, then layer panels on top for depth.',
        text: 'light',
      },
      {
        name: 'Command Green',
        hex: '#35E184',
        rgb: '53, 225, 132',
        token: 'color.primary.500',
        usage: 'Primary actions, selected states, success, ready indicators.',
        note: 'Use sparingly so it remains meaningful and operational.',
        text: 'dark',
      },
      {
        name: 'Tactical White',
        hex: '#F5F7FA',
        rgb: '245, 247, 250',
        token: 'color.text.primary',
        usage: 'Primary text on dark backgrounds.',
        note: 'Keep main reading content high contrast and calm.',
        text: 'dark',
      },
      {
        name: 'Gunsteel',
        hex: '#2B323A',
        rgb: '43, 50, 58',
        token: 'color.neutral.700',
        usage: 'Cards, panels, inactive controls, secondary UI surfaces.',
        note: 'Use as the workhorse surface color for dense pages.',
        text: 'light',
      },
    ],
  },
  {
    title: 'Surface and neutral stack',
    description: 'Layered blacks and greys used to create depth without making the app noisy.',
    colors: [
      {
        name: 'Carbon',
        hex: '#0B0E11',
        rgb: '11, 14, 17',
        token: 'color.bg.surface',
        usage: 'Base surfaces and grouped page sections.',
        note: 'Preferred surface above Void Black.',
        text: 'light',
      },
      {
        name: 'Obsidian',
        hex: '#11161C',
        rgb: '17, 22, 28',
        token: 'color.bg.elevated',
        usage: 'Elevated cards, modals, sheets, and key panels.',
        note: 'Best default for documentation cards.',
        text: 'light',
      },
      {
        name: 'Graphite Blue',
        hex: '#18212B',
        rgb: '24, 33, 43',
        token: 'color.surface.blue.800',
        usage: 'Desktop sidebars, page bands, secondary navigation surfaces.',
        note: 'Adds cool sci-fi depth without becoming blue-branded.',
        text: 'light',
      },
      {
        name: 'Silver Grey',
        hex: '#AAB3BE',
        rgb: '170, 179, 190',
        token: 'color.text.secondary',
        usage: 'Secondary text, descriptions, captions, helper content.',
        note: 'Use for support text, not primary reading content.',
        text: 'dark',
      },
    ],
  },
  {
    title: 'Accent and semantic system',
    description: 'Meaningful accents for premium emphasis, information, warning, and danger.',
    colors: [
      {
        name: 'Premium Gold',
        hex: '#C7A44A',
        rgb: '199, 164, 74',
        token: 'color.accent.gold.500',
        usage: 'Premium moments, leadership/rank accents, featured modules.',
        note: 'Never use as long-form text. Use as a restrained highlight.',
        text: 'dark',
      },
      {
        name: 'Signal Cyan',
        hex: '#58C7FF',
        rgb: '88, 199, 255',
        token: 'color.semantic.info.500',
        usage: 'Info states, telemetry visuals, links, neutral system notices.',
        note: 'Use for data readouts and non-critical information.',
        text: 'dark',
      },
      {
        name: 'Warning Amber',
        hex: '#F4B860',
        rgb: '244, 184, 96',
        token: 'color.semantic.warning.500',
        usage: 'Pending, attention, partial sync, cautionary states.',
        note: 'Pair with an icon or label; do not rely on color alone.',
        text: 'dark',
      },
      {
        name: 'Alert Red',
        hex: '#FF4D4D',
        rgb: '255, 77, 77',
        token: 'color.semantic.error.500',
        usage: 'Errors, destructive actions, failed sync, critical warnings.',
        note: 'Reserved for genuine risk. Do not use as decoration.',
        text: 'dark',
      },
    ],
  },
  {
    title: 'Light mode support',
    description: 'Secondary palette for documentation reading and accessibility preference.',
    colors: [
      {
        name: 'Background Light',
        hex: '#F3F5F7',
        rgb: '243, 245, 247',
        token: 'color.light.bg.default',
        usage: 'Light mode page background.',
        note: 'Use cool grey, not pure white, to keep the tactical feel.',
        text: 'dark',
      },
      {
        name: 'Surface Light',
        hex: '#FFFFFF',
        rgb: '255, 255, 255',
        token: 'color.light.bg.surface',
        usage: 'Light mode cards and panels.',
        note: 'Add strong borders so surfaces do not feel generic.',
        text: 'dark',
      },
      {
        name: 'Text Primary Light',
        hex: '#11161C',
        rgb: '17, 22, 28',
        token: 'color.light.text.primary',
        usage: 'Main light mode copy.',
        note: 'Use this instead of pure black for smoother reading.',
        text: 'light',
      },
      {
        name: 'Primary Action Light',
        hex: '#0A7A45',
        rgb: '10, 122, 69',
        token: 'color.light.primary.600',
        usage: 'Light mode primary actions and links.',
        note: 'Darker green maintains contrast on light surfaces.',
        text: 'light',
      },
    ],
  },
] as const;

export const colorUsageExamples = [
  {
    title: 'Primary action',
    do: 'Use Command Green for one main CTA such as Sync fleet.',
    dont: 'Do not make every button and icon green.',
  },
  {
    title: 'Premium emphasis',
    do: 'Use Premium Gold for rank, leadership, featured modules, or milestone states.',
    dont: 'Do not use gold for paragraph text or standard alerts.',
  },
  {
    title: 'Danger states',
    do: 'Use Alert Red for failed sync, destructive actions, or critical errors.',
    dont: 'Do not use red for visual energy or decoration.',
  },
  {
    title: 'Readable surfaces',
    do: 'Use layered dark surfaces to separate dashboard sections.',
    dont: 'Do not put dense text directly on busy gradients or heavy glow.',
  },
] as const;

export const fontFamilies = [
  {
    name: 'Inter',
    role: 'Primary UI and body font',
    sample: 'Mission data, fleet status, blueprint notes, and settings copy stay readable.',
    token: 'font.family.body',
    usage: 'Navigation, body text, labels, forms, tables, settings, documentation content.',
  },
  {
    name: 'Space Grotesk',
    role: 'Heading and brand font',
    sample: 'CT6 Command Interface',
    token: 'font.family.heading',
    usage: 'Page titles, hero headings, dashboard section headers, brand moments.',
  },
  {
    name: 'JetBrains Mono',
    role: 'Technical data font',
    sample: 'FLEET-SYNC // 12 RECORDS // READY',
    token: 'font.family.mono',
    usage: 'Codes, IDs, logs, coordinates, telemetry, sync status, technical values.',
  },
] as const;

export const typeScale = [
  {
    style: 'Display',
    token: 'font.display',
    size: '48px',
    lineHeight: '56px',
    weight: '700',
    sample: 'Command Manual',
    usage: 'Landing page and major brand sections only.',
  },
  {
    style: 'H1',
    token: 'font.heading.h1',
    size: '36px',
    lineHeight: '44px',
    weight: '700',
    sample: 'Fleet Intelligence',
    usage: 'Main page titles and high-priority screen headers.',
  },
  {
    style: 'H2',
    token: 'font.heading.h2',
    size: '30px',
    lineHeight: '38px',
    weight: '700',
    sample: 'Mission Readiness',
    usage: 'Dashboard groups and major guideline page sections.',
  },
  {
    style: 'H3',
    token: 'font.heading.h3',
    size: '24px',
    lineHeight: '32px',
    weight: '600',
    sample: 'Blueprint Requirements',
    usage: 'Card group headings and component section titles.',
  },
  {
    style: 'Body',
    token: 'font.body.default',
    size: '16px',
    lineHeight: '24px',
    weight: '400',
    sample: 'Use this style for standard product copy, guideline text, and readable interface descriptions.',
    usage: 'Default readable copy across app and documentation.',
  },
  {
    style: 'Compact',
    token: 'font.body.compact',
    size: '14px',
    lineHeight: '20px',
    weight: '400',
    sample: 'Aegis Sabre â€¢ Combat â€¢ Synced 2 min ago',
    usage: 'Dense data cards, table rows, metadata, compact UI.',
  },
  {
    style: 'Caption',
    token: 'font.caption',
    size: '12px',
    lineHeight: '16px',
    weight: '500',
    sample: 'LAST SYNC: 02:14 UTC',
    usage: 'Timestamps, helper notes, status metadata, small labels.',
  },
] as const;

export const typographyRules = [
  {
    title: 'Use sentence case for UI',
    detail: 'Write Sync fleet, not SYNC FLEET, unless the text is a tiny status label or code.',
  },
  {
    title: 'Keep body text at 16px',
    detail: 'Use 14px only for dense tables, metadata, and compact operational cards.',
  },
  {
    title: 'Avoid decorative sci-fi fonts',
    detail: 'The app should feel tactical and premium, not fake-futuristic or hard to read.',
  },
  {
    title: 'Use mono for data only',
    detail: 'JetBrains Mono is for IDs, coordinates, logs, and technical readouts, not paragraphs.',
  },
] as const;

export const tokenCategories = [
  {
    name: 'Color',
    prefix: 'color.*',
    purpose: 'Defines background, text, border, accent, and semantic decisions.',
    example: 'color.primary.500 = #35E184',
  },
  {
    name: 'Typography',
    prefix: 'font.*',
    purpose: 'Defines font families, sizes, line heights, and weights.',
    example: 'font.heading.h1.size = 36px',
  },
  {
    name: 'Spacing',
    prefix: 'space.*',
    purpose: 'Creates a consistent 4px-based layout rhythm.',
    example: 'space.6 = 24px',
  },
  {
    name: 'Radius',
    prefix: 'radius.*',
    purpose: 'Controls button, card, modal, input, and badge shape.',
    example: 'radius.card = 16px',
  },
  {
    name: 'Shadow',
    prefix: 'shadow.*',
    purpose: 'Defines depth, focus, and controlled glow effects.',
    example: 'shadow.glow.green = 0 0 24px rgba(53, 225, 132, 0.18)',
  },
  {
    name: 'Motion',
    prefix: 'motion.*',
    purpose: 'Controls interaction speed, transitions, and feedback timing.',
    example: 'motion.fast = 150ms',
  },
  {
    name: 'Breakpoints',
    prefix: 'breakpoint.*',
    purpose: 'Defines responsive behavior for mobile, tablet, desktop, and large screens.',
    example: 'breakpoint.lg = 1024px',
  },
  {
    name: 'Z-index',
    prefix: 'z.*',
    purpose: 'Keeps nav, dropdowns, modals, toasts, and overlays layered predictably.',
    example: 'z.modal = 700',
  },
] as const;

export const tokenSnippets = [
  {
    title: 'Core color roles',
    code: `color.bg.default = #050607
color.bg.surface = #0B0E11
color.bg.elevated = #11161C
color.primary.500 = #35E184
color.text.primary = #F5F7FA
color.text.secondary = #AAB3BE`,
  },
  {
    title: 'Typography roles',
    code: `font.family.body = Inter, system-ui, sans-serif
font.family.heading = Space Grotesk, Inter, system-ui, sans-serif
font.family.mono = JetBrains Mono, ui-monospace, monospace
font.body.default.size = 16px
font.body.default.lineHeight = 24px`,
  },
  {
    title: 'Component shape and depth',
    code: `radius.button = 10px
radius.card = 16px
radius.modal = 20px
shadow.medium = 0 8px 24px rgba(0,0,0,0.36)
shadow.focus = 0 0 0 3px rgba(53,225,132,0.28)`,
  },
  {
    title: 'Motion system',
    code: `motion.fast = 150ms
motion.medium = 250ms
motion.slow = 400ms
ease.command = cubic-bezier(0.16, 1, 0.3, 1)`,
  },
] as const;