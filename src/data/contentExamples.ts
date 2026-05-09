export type VoicePrinciple = {
  title: string;
  description: string;
  example: string;
};

export type ToneExample = {
  situation: string;
  bad: string;
  good: string;
  reason: string;
};

export type CopyPattern = {
  category: string;
  guidance: string;
  examples: string[];
};

export const voicePrinciples: readonly VoicePrinciple[] = [
  {
    title: 'Direct',
    description: 'Say what happened, what it means, and what the member can do next.',
    example: 'Fleet sync complete. 12 records updated.',
  },
  {
    title: 'Controlled',
    description: 'Keep language calm even when reporting failure, access limits, or security issues.',
    example: 'Sync failed. Check your connection and try again.',
  },
  {
    title: 'Professional',
    description: 'Use serious operational language without fake radio chatter or childish hype.',
    example: 'Access is limited to CT6 members.',
  },
  {
    title: 'Useful',
    description: 'Every message should help the member understand status, progress, or next action.',
    example: 'Connect your account to view private fleet details.',
  },
  {
    title: 'Premium',
    description: 'Write with restraint. The app should feel elite because it is precise, not loud.',
    example: 'Command dashboard ready.',
  },
];

export const wordsToUse = [
  'ready',
  'synced',
  'assigned',
  'verified',
  'secured',
  'available',
  'review',
  'confirm',
  'resolve',
  'connect',
  'mission',
  'fleet',
  'blueprint',
  'status',
] as const;

export const wordsToAvoid = [
  'oopsie',
  'lol',
  'cute',
  'insane',
  'dominate',
  'panic',
  'crushed it',
  'secret stuff',
  'official RSI',
  'Star Citizen official',
] as const;

export const toneExamples: readonly ToneExample[] = [
  {
    situation: 'Welcome message',
    bad: 'Yo pilot, ready to dominate?',
    good: 'Welcome to CT6 Companion. Your command dashboard is ready.',
    reason: 'Professional, serious, and clear about what the user is entering.',
  },
  {
    situation: 'Empty state',
    bad: 'Nothing here lol.',
    good: 'No missions assigned yet. CT6 operations will appear here when available.',
    reason: 'Explains why the screen is empty and sets the right expectation.',
  },
  {
    situation: 'Error message',
    bad: 'Critical failure. System broken.',
    good: 'Fleet sync failed. Check your connection and try again.',
    reason: 'Calm, specific, and recoverable.',
  },
  {
    situation: 'Success message',
    bad: 'Awesome!!! You crushed it!',
    good: 'Blueprint saved to your library.',
    reason: 'Specific and controlled without unnecessary hype.',
  },
  {
    situation: 'Push notification',
    bad: 'HEY! New stuff dropped!',
    good: 'New CT6 mission available. Review assignment details.',
    reason: 'Useful in a notification preview and not childish.',
  },
  {
    situation: 'Security message',
    bad: 'Give us your info.',
    good: 'Your private data is used only to display CT6 Companion insights.',
    reason: 'Trust-building and direct about data use.',
  },
  {
    situation: 'Settings page',
    bad: 'Tweak random stuff.',
    good: 'Manage sync, privacy, notifications, and display preferences.',
    reason: 'Names the exact settings the member can control.',
  },
  {
    situation: 'Help and support',
    bad: 'We have no idea what happened.',
    good: 'Send a support request with your sync ID so CT6 support can review the issue.',
    reason: 'Gives a useful next action without blaming the user.',
  },
];

export const copyPatterns: readonly CopyPattern[] = [
  {
    category: 'Button labels',
    guidance: 'Use short verb-first labels. One action, one outcome.',
    examples: ['Sync fleet', 'Open dashboard', 'Save mission', 'Confirm access', 'View details', 'Remove item'],
  },
  {
    category: 'Form labels',
    guidance: 'Use clear nouns above fields. Do not replace labels with placeholders.',
    examples: ['RSI handle', 'Mission type', 'Ship name', 'Fleet status', 'Notification preference'],
  },
  {
    category: 'Placeholders',
    guidance: 'Use placeholders only for examples, formats, or search hints.',
    examples: ['Search ships, variants, or manufacturers', 'Enter RSI handle', 'Filter by mission status'],
  },
  {
    category: 'Errors',
    guidance: 'Say what failed, then give a recovery step.',
    examples: ['RSI handle is required.', 'Fleet sync failed. Check your connection and try again.', 'You do not have access to this CT6 module.'],
  },
  {
    category: 'Confirmations',
    guidance: 'Confirm the completed result. Add a count or detail when useful.',
    examples: ['Fleet sync complete. 12 records updated.', 'Mission saved to your CT6 plan.', 'Settings updated.'],
  },
  {
    category: 'Tooltips',
    guidance: 'Explain what the control does. Avoid lore or decoration.',
    examples: ['Shows private fleet data from your connected account.', 'Filters missions by current status.', 'Copies this token name to your reference notes.'],
  },
  {
    category: 'Empty states',
    guidance: 'Explain why content is missing and what action comes next.',
    examples: ['No fleet data synced. Connect your account to view private fleet details.', 'No blueprints saved. Add blueprints to build your reference library.'],
  },
  {
    category: 'Notifications',
    guidance: 'Keep notifications short and avoid sensitive private details in previews.',
    examples: ['New CT6 mission available. Review assignment details.', 'Fleet sync complete. Updated data is now available.', 'New sign-in detected. Review account activity.'],
  },
];