export type ComponentExample = {
  id: string;
  title: string;
  category: string;
  purpose: string;
  visualStyle: string;
  spacing: string;
  typography: string;
  colorUsage: string;
  states: readonly string[];
  dos: readonly string[];
  donts: readonly string[];
};

export const componentExamples = [
  {
    id: 'buttons',
    title: 'Buttons',
    category: 'Actions',
    purpose: 'Trigger primary, secondary, destructive, and low-emphasis actions across the static guideline and future CT6 apps.',
    visualStyle: 'Command Green for the primary action, glass/gunmetal for secondary actions, red only for destructive decisions, and text-only styling for low-emphasis actions.',
    spacing: 'Minimum height 44px on mobile. Use 12â€“14px vertical padding and 18â€“24px horizontal padding.',
    typography: 'Inter, 14px, 600 weight, sentence case.',
    colorUsage: 'Primary uses Command Green with dark text. Secondary uses dark glass surface with steel border. Danger uses Alert Red border/fill.',
    states: ['Default', 'Hover', 'Pressed', 'Focus', 'Disabled', 'Danger'],
    dos: ['Use one primary button per section.', 'Make action labels specific.', 'Keep focus states visible.'],
    donts: ['Do not make every action green.', 'Do not use red for normal navigation.', 'Do not use vague labels like Submit.'],
  },
  {
    id: 'inputs',
    title: 'Inputs & Selects',
    category: 'Forms',
    purpose: 'Capture search, filters, sync settings, profile preferences, and structured CT6 app data.',
    visualStyle: 'Dark surface, 1px steel border, clear label, muted helper text, green focus ring, red error border.',
    spacing: 'Use 12px vertical and 14â€“16px horizontal padding. Keep field groups separated by 16â€“24px.',
    typography: 'Labels use 13px/600. Field text uses Inter 14â€“16px.',
    colorUsage: 'Neutral by default, green on focus/active, red for errors, muted text for placeholders.',
    states: ['Empty', 'Filled', 'Focused', 'Disabled', 'Error', 'Readonly'],
    dos: ['Use labels above fields.', 'Use placeholders for examples only.', 'Explain errors near the field.'],
    donts: ['Do not rely only on placeholder text.', 'Do not hide required states.', 'Do not use neon borders by default.'],
  },
  {
    id: 'cards',
    title: 'Cards',
    category: 'Surfaces',
    purpose: 'Group missions, ships, blueprint details, account insights, and component rules into readable modules.',
    visualStyle: 'Layered dark glass surface, subtle border, restrained shadow, clear heading, metadata, and action area.',
    spacing: 'Compact cards use 16px padding. Standard dashboard cards use 20â€“24px padding.',
    typography: 'Titles use Space Grotesk or Inter 600. Body copy uses Inter 14â€“16px.',
    colorUsage: 'Obsidian/gunmetal surfaces, Tactical White headings, Silver Grey body text, green or gold accent line when needed.',
    states: ['Default', 'Hover', 'Selected', 'Disabled', 'Warning', 'Premium'],
    dos: ['Keep one purpose per card.', 'Use status badges consistently.', 'Use spacing to separate dense data.'],
    donts: ['Do not mix unrelated content.', 'Do not overuse glow.', 'Do not place unreadable text over glass.'],
  },
  {
    id: 'badges',
    title: 'Badges & Status',
    category: 'Feedback',
    purpose: 'Show readiness, privacy, sync, mission priority, role, and system state without forcing users to read long text.',
    visualStyle: 'Small capsule or angular tag with semantic color accent and readable label.',
    spacing: 'Use 4px vertical and 8â€“10px horizontal padding. Keep badges close to the thing they describe.',
    typography: '11â€“12px, 600 weight, optional uppercase for compact operational tags.',
    colorUsage: 'Green for ready/synced, amber for warning/pending, red for danger/error, blue for information, gold for premium/leadership.',
    states: ['Ready', 'Synced', 'Pending', 'Private', 'Critical', 'Leadership'],
    dos: ['Pair color with text.', 'Use a small set of reusable statuses.', 'Keep labels short.'],
    donts: ['Do not create unlimited badge colors.', 'Do not use color alone.', 'Do not make status text cryptic.'],
  },
  {
    id: 'tables',
    title: 'Data Tables',
    category: 'Data',
    purpose: 'Display dense ship, blueprint, fleet, item, and account insight data with scan-friendly hierarchy.',
    visualStyle: 'Dark rows, muted dividers, sticky-style headers where possible, clear numeric alignment, compact status badges.',
    spacing: 'Use 12px vertical and 16px horizontal cell padding. Compact mode can reduce to 10px/12px on desktop only.',
    typography: 'Inter 14px for data. JetBrains Mono for IDs, codes, and coordinates.',
    colorUsage: 'Neutral text for most data, green for good/ready values, amber for attention, red only for true issues.',
    states: ['Default', 'Hover row', 'Selected row', 'Sorted column', 'Empty', 'Loading'],
    dos: ['Align numbers consistently.', 'Use filters for long tables.', 'Keep row actions predictable.'],
    donts: ['Do not use center alignment for dense data.', 'Do not hide critical labels behind color.', 'Do not place huge actions in every row.'],
  },
  {
    id: 'feedback',
    title: 'Feedback States',
    category: 'System',
    purpose: 'Tell users when something is loading, empty, complete, failed, private, or unavailable.',
    visualStyle: 'Calm system panels, semantic left accent, short message, clear recovery action when needed.',
    spacing: 'Use 16â€“24px padding for banners/cards. Toasts use 12â€“16px padding.',
    typography: 'Title 14â€“16px/600. Body 13â€“14px regular.',
    colorUsage: 'Semantic accent only; avoid full-screen alarm colors. Pair icon, text, and color.',
    states: ['Loading', 'Success', 'Warning', 'Error', 'Empty', 'Unavailable'],
    dos: ['Say what happened.', 'Give the next action.', 'Keep messages calm.'],
    donts: ['Do not use panic language.', 'Do not blame the user.', 'Do not animate critical states aggressively.'],
  },
] as const satisfies readonly ComponentExample[];

