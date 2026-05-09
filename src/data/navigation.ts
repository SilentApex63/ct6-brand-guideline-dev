export type NavigationGroup =
  | 'Command'
  | 'Identity'
  | 'Design System'
  | 'Experience'
  | 'Launch'
  | 'Governance';

export type NavigationItem = {
  slug: string;
  label: string;
  href: string;
  group: NavigationGroup;
  index: string;
};

export const navigation: readonly NavigationItem[] = [
  { slug: 'overview', label: 'Overview', href: '/overview', group: 'Command', index: '01' },
  { slug: 'foundation', label: 'Brand Foundation', href: '/foundation', group: 'Command', index: '02' },
  { slug: 'strategy', label: 'Brand Strategy', href: '/strategy', group: 'Command', index: '03' },

  { slug: 'logo', label: 'Logo System', href: '/logo', group: 'Identity', index: '04' },
  { slug: 'app-icon', label: 'App Icon', href: '/app-icon', group: 'Identity', index: '05' },

  { slug: 'colors', label: 'Color System', href: '/colors', group: 'Design System', index: '06' },
  { slug: 'typography', label: 'Typography', href: '/typography', group: 'Design System', index: '07' },
  { slug: 'layout', label: 'Layout & Spacing', href: '/layout', group: 'Design System', index: '08' },
  { slug: 'components', label: 'UI Components', href: '/components', group: 'Design System', index: '09' },
  { slug: 'iconography', label: 'Iconography', href: '/iconography', group: 'Design System', index: '10' },
  { slug: 'illustration', label: 'Illustration', href: '/illustration', group: 'Design System', index: '11' },
  { slug: 'imagery', label: 'Photography & Imagery', href: '/imagery', group: 'Design System', index: '12' },
  { slug: 'motion', label: 'Motion & Interaction', href: '/motion', group: 'Design System', index: '13' },

  { slug: 'voice-tone', label: 'Voice & Tone', href: '/voice-tone', group: 'Experience', index: '14' },
  { slug: 'microcopy', label: 'Microcopy', href: '/microcopy', group: 'Experience', index: '15' },
  { slug: 'accessibility', label: 'Accessibility', href: '/accessibility', group: 'Experience', index: '16' },
  { slug: 'themes', label: 'Dark & Light Mode', href: '/themes', group: 'Experience', index: '17' },

  { slug: 'app-store', label: 'App Store', href: '/app-store', group: 'Launch', index: '18' },
  { slug: 'social', label: 'Social Media', href: '/social', group: 'Launch', index: '19' },
  { slug: 'email-notifications', label: 'Email & Notifications', href: '/email-notifications', group: 'Launch', index: '20' },

  { slug: 'tokens', label: 'Design Tokens', href: '/tokens', group: 'Governance', index: '21' },
  { slug: 'do-dont', label: 'Do & Don’t', href: '/do-dont', group: 'Governance', index: '22' },
  { slug: 'assets', label: 'Asset Checklist', href: '/assets', group: 'Governance', index: '23' },
  { slug: 'implementation', label: 'Implementation Checklist', href: '/implementation', group: 'Governance', index: '24' },
] as const;

export const navigationGroups: readonly NavigationGroup[] = [
  'Command',
  'Identity',
  'Design System',
  'Experience',
  'Launch',
  'Governance',
] as const;

export function getNavigationItem(slug: string) {
  return navigation.find((item) => item.slug === slug);
}

export function getAdjacentNavigation(slug: string) {
  const index = navigation.findIndex((item) => item.slug === slug);

  return {
    previous: index > 0 ? navigation[index - 1] : undefined,
    next: index >= 0 && index < navigation.length - 1 ? navigation[index + 1] : undefined,
  };
}
