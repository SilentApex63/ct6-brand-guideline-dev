export type LogoVariant = {
  name: string;
  usage: string;
  asset: string;
  note: string;
};

export type IdentityRule = {
  title: string;
  body: string;
};

export type AssetChecklistItem = {
  category: string;
  asset: string;
  status: 'Ready' | 'Needed' | 'Derived' | 'Review';
  note: string;
};

export const logoVariants: LogoVariant[] = [
  {
    name: 'Primary emblem',
    usage: 'Brand identity, guideline cover, hero sections, launch visuals.',
    asset: '/brand-assets/ct6-logo-transparent.png',
    note: 'Use on dark or controlled backgrounds. This is the most expressive CT6 identity asset.',
  },
  {
    name: 'White-background export',
    usage: 'Documents, print mockups, neutral previews, and asset review.',
    asset: '/brand-assets/ct6-logo-primary.png',
    note: 'Use when the logo must be reviewed against a light neutral canvas.',
  },
  {
    name: 'Vector source',
    usage: 'Production exports, scaling, and final asset preparation.',
    asset: '/brand-assets/ct6-logo-vector.svg',
    note: 'Use as the source of truth for future SVG/PNG exports where possible.',
  },
];

export const logoUsageRules: IdentityRule[] = [
  {
    title: 'Use the full emblem for brand moments',
    body: 'The current logo is detailed and premium. It works best on landing pages, brand covers, social graphics, and launch material where it has enough space.',
  },
  {
    title: 'Do not force the full emblem into tiny UI slots',
    body: 'At small sizes, the cobra detail, lower banner, and text will lose clarity. Use a simplified CT6/cobra symbol for favicon and compact app icon needs.',
  },
  {
    title: 'Keep background contrast controlled',
    body: 'The transparent logo should sit on Void Black, Obsidian, Gunsteel, or a subtle tactical gradient. Avoid busy screenshots behind it.',
  },
  {
    title: 'Preserve the metallic identity',
    body: 'Do not recolor the entire logo into flat green, red, pink, or rainbow gradients. The steel/black/green finish is part of the CT6 identity.',
  },
];

export const logoDontRules: IdentityRule[] = [
  {
    title: 'Do not stretch or squash',
    body: 'Keep the logo aspect ratio locked. Distortion makes the insignia feel unprofessional.',
  },
  {
    title: 'Do not add heavy extra glow',
    body: 'The logo already has green highlights. Additional glow should be subtle and only used in hero graphics.',
  },
  {
    title: 'Do not place on bright/busy imagery',
    body: 'Busy backgrounds reduce legibility and make the emblem look less premium.',
  },
  {
    title: 'Do not use the full logo as a tiny nav icon',
    body: 'Use a simplified CT6 mark, cobra head, or monogram for compact interface usage.',
  },
];

export const appIconGuidance: IdentityRule[] = [
  {
    title: 'Recommended app icon direction',
    body: 'Use a simplified CT6 monogram or cobra-head command mark on a dark gunmetal field. Keep one green highlight and avoid tiny text.',
  },
  {
    title: 'Full logo is not the app icon',
    body: 'The full COBRA TEAM 6 emblem is excellent for brand pages, but the lower banner and fine detail are too complex for small app icon sizes.',
  },
  {
    title: 'Safe area',
    body: 'Keep the main symbol inside a 76 percent visual safe area so it does not feel clipped inside iOS, Android, or web masks.',
  },
  {
    title: 'Small-size testing',
    body: 'Test at 16px, 32px, 64px, 128px, 512px, and 1024px. The icon must still read as CT6 at 32px.',
  },
];

export const assetChecklist: AssetChecklistItem[] = [
  { category: 'Logo', asset: 'Primary emblem PNG', status: 'Ready', note: 'Provided: transparent background export.' },
  { category: 'Logo', asset: 'White-background PNG', status: 'Ready', note: 'Provided: useful for neutral review and documentation.' },
  { category: 'Logo', asset: 'SVG/vector source', status: 'Ready', note: 'Provided: use for production scaling and future exports.' },
  { category: 'Logo', asset: 'One-color logo version', status: 'Needed', note: 'Needed for embossing, footer marks, and fallback usage.' },
  { category: 'Logo', asset: 'Horizontal lockup', status: 'Needed', note: 'Needed for website headers, emails, and app store captions.' },
  { category: 'Logo', asset: 'Clear-space diagram', status: 'Derived', note: 'Derived in this guideline from the emblem bounding box.' },
  { category: 'App icon', asset: 'Simplified CT6/cobra app icon', status: 'Needed', note: 'Should be created from the logo language, not the full detailed emblem.' },
  { category: 'App icon', asset: 'iOS icon exports', status: 'Needed', note: '1024px master plus platform export sizes.' },
  { category: 'App icon', asset: 'Android adaptive icon', status: 'Needed', note: 'Foreground symbol and dark background layer.' },
  { category: 'Web', asset: 'Favicon set', status: 'Needed', note: '16px, 32px, 48px, 180px, 192px, 512px.' },
  { category: 'Marketing', asset: 'Social avatar', status: 'Needed', note: 'Use simplified symbol, not the full detailed banner.' },
  { category: 'Marketing', asset: 'Launch hero graphic', status: 'Review', note: 'Use the full emblem with CT6 Command Glass Ops background.' },
  { category: 'Documentation', asset: 'Logo usage examples', status: 'Derived', note: 'Covered in the logo and app icon pages.' },
];