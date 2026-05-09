export type LaunchChannel = {
  id: string;
  title: string;
  purpose: string;
  rules: string[];
};

export type StoreScreenshot = {
  title: string;
  caption: string;
  focus: string;
  avoid: string;
};

export type SocialTemplate = {
  type: string;
  layout: string;
  copy: string;
  visual: string;
};

export type MessageExample = {
  situation: string;
  bad: string;
  good: string;
  why: string;
};

export const storeScreenshots: StoreScreenshot[] = [
  {
    title: 'Command Dashboard',
    caption: 'Your CT6 command dashboard',
    focus: 'Show the main dashboard with module cards, status indicators, and a clear CT6 command-console feel.',
    avoid: 'Do not use cinematic art without product UI. The store listing must prove what the app does.',
  },
  {
    title: 'Fleet Insights',
    caption: 'Review private fleet insights securely',
    focus: 'Show masked fleet data, card grouping, sync status, and privacy-safe member context.',
    avoid: 'Do not expose real fleet/account data or member identifiers.',
  },
  {
    title: 'Blueprint Library',
    caption: 'Access blueprint data faster',
    focus: 'Show filters, blueprint status badges, requirements, and practical data hierarchy.',
    avoid: 'Do not create a cluttered database screenshot with unreadable rows.',
  },
  {
    title: 'Mission Readiness',
    caption: 'Prepare for CT6 operations',
    focus: 'Show mission cards, priority badges, owner/status labels, and next actions.',
    avoid: 'Do not use hype copy or fake combat promises.',
  },
];

export const launchChannels: LaunchChannel[] = [
  {
    id: 'app-store',
    title: 'App Store / Google Play',
    purpose: 'Present CT6 Companion as a serious private org tool with clear product value.',
    rules: [
      'Use dark product mockups with masked data.',
      'Use short captions: 3 to 6 words where possible.',
      'Show actual UI screens before abstract art.',
      'Do not imply official RSI, Star Citizen, or CIG affiliation unless approved.',
    ],
  },
  {
    id: 'discord',
    title: 'Discord Announcements',
    purpose: 'Inform CT6 members quickly with a clear action and release context.',
    rules: [
      'Lead with what changed and who it affects.',
      'Use one primary call-to-action.',
      'Keep release notes grouped by module.',
      'Avoid vague hype, memes, or excessive emoji.',
    ],
  },
  {
    id: 'social',
    title: 'Social / Community Posts',
    purpose: 'Show progress, features, and CT6 identity without exposing private data.',
    rules: [
      'Use one message per post.',
      'Use product screenshots, dark backgrounds, and CT6 logo placement.',
      'Use restrained hashtags.',
      'Avoid bright unrelated visuals and over-dramatic military language.',
    ],
  },
  {
    id: 'email',
    title: 'Email / Notifications',
    purpose: 'Send useful, controlled updates without leaking private information.',
    rules: [
      'Never include sensitive account details in notification previews.',
      'Use direct subject lines.',
      'Group non-urgent updates.',
      'Make security messages calm and actionable.',
    ],
  },
];

export const socialTemplates: SocialTemplate[] = [
  {
    type: 'Feature Announcement',
    layout: 'Logo top-left, UI screenshot center, one-line headline, green CTA strip.',
    copy: 'New module: Fleet Insights. CT6 members can now review synced ship and item data from a private dashboard.',
    visual: 'Dark mockup, Command Green highlights, masked data, no busy background.',
  },
  {
    type: 'Release Notes',
    layout: 'Version tag, three grouped changes, footer CTA.',
    copy: 'CT6 Companion v0.2: improved dashboard structure, added blueprint references, refined sync messaging.',
    visual: 'Command-panel card layout with small module badges.',
  },
  {
    type: 'System Notice',
    layout: 'Warning/info badge, concise message, next action.',
    copy: 'Scheduled maintenance: CT6 Companion may be unavailable during the update window.',
    visual: 'Muted dark surface, amber warning accent, no dramatic alert imagery.',
  },
  {
    type: 'UI Spotlight',
    layout: 'Single product screenshot, one feature callout, short benefit statement.',
    copy: 'Mission readiness now shows status, priority, and owner in one clean operational card.',
    visual: 'Zoomed UI crop with subtle green annotation lines.',
  },
];

export const communicationExamples: MessageExample[] = [
  {
    situation: 'Launch announcement',
    bad: 'The ultimate app is finally here!!! Get ready to dominate the verse.',
    good: 'CT6 Companion is now available for CT6 members. Access missions, blueprints, ship data, private fleet insights, and org support tools from one command interface.',
    why: 'Clear, serious, CT6-specific, and avoids overpromising.',
  },
  {
    situation: 'Feature announcement',
    bad: 'Fleet stuff added.',
    good: 'New module: Fleet Insights. Members can now review synced ship and item data from a private dashboard built for faster planning.',
    why: 'Explains the feature, user benefit, and context.',
  },
  {
    situation: 'Push notification',
    bad: 'HEY! New mission dropped!',
    good: 'New CT6 mission available. Review assignment details.',
    why: 'Short, useful, and professional.',
  },
  {
    situation: 'Security notification',
    bad: 'Something suspicious happened.',
    good: 'New sign-in detected. Review your account activity in Settings.',
    why: 'Specific and calm, with a next step.',
  },
  {
    situation: 'Email subject',
    bad: 'Important!!!',
    good: 'CT6 Companion: Fleet sync completed',
    why: 'Tells the member exactly what the email is about.',
  },
];

export const emailStructure = [
  { section: 'Header', rule: 'CT6 logo, dark background, concise title.' },
  { section: 'Context', rule: 'One or two lines explaining what changed.' },
  { section: 'Details', rule: 'Grouped bullets or cards. Do not bury the main action.' },
  { section: 'CTA', rule: 'One primary green CTA. Secondary links only when necessary.' },
  { section: 'Footer', rule: 'Support link, privacy note, and notification preference link where relevant.' },
];

export const notificationRules = [
  'Send only when useful to the member.',
  'Keep notification previews free of sensitive account/fleet data.',
  'Use direct verbs: review, open, confirm, sync, update.',
  'Group low-priority updates into summaries.',
  'Let members control notification categories.',
  'Do not use emoji or hype language in operational notifications.',
];
