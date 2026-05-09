export type GuideSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type GuidePageContent = {
  eyebrow: string;
  title: string;
  summary: string;
  sections: GuideSection[];
};

export const guideContent: Record<string, GuidePageContent> = {
  "overview": {
    "eyebrow": "Brand system overview",
    "title": "CT6 Companion Brand Guideline",
    "summary": "A dark, tactical, premium command-console system for CT6 Companion and future CT6 apps.",
    "sections": [
      {
        "heading": "Official direction",
        "body": "Use Command Glass Ops: dark operational surfaces, glass panels, gunmetal borders, command green active states, restrained gold accents, and calm tactical copy."
      },
      {
        "heading": "Core promise",
        "body": "One private CT6 command interface for missions, blueprints, ships, fleet, items, account insights, and org support."
      },
      {
        "heading": "Non-negotiables",
        "bullets": [
          "Dark mode is the primary experience.",
          "Readability is more important than visual effects.",
          "Green means primary action, active, success, or ready.",
          "Red means error, danger, or destructive action only.",
          "Mock or mask private data in all marketing assets."
        ]
      }
    ]
  },
  "foundation": {
    "eyebrow": "Strategy",
    "title": "Brand Foundation",
    "summary": "The brand should feel like a calm tactical officer: precise, organized, secure, and ready.",
    "sections": [
      {
        "heading": "Mission",
        "body": "CT6 Companion exists to give CT6 members a single reliable operational hub for missions, blueprints, ship data, fleet information, private insights, and org support tools."
      },
      {
        "heading": "Vision",
        "body": "Become the private command layer for CT6: a trusted digital companion that helps members prepare faster, coordinate better, and operate with confidence."
      },
      {
        "heading": "Values",
        "bullets": [
          "Operational clarity",
          "Readiness",
          "Trust",
          "Precision",
          "Discipline",
          "Unity",
          "Control"
        ]
      },
      {
        "heading": "Audience",
        "body": "CT6 Org members only: new members, active operators, fleet owners, mission planners, and org leadership."
      }
    ]
  },
  "strategy": {
    "eyebrow": "Positioning",
    "title": "Brand Strategy",
    "summary": "CT6 Companion is a private org companion app and tactical game-support dashboard.",
    "sections": [
      {
        "heading": "Main benefit",
        "body": "Members access mission, fleet, blueprint, ship, item, and account data from one organized command center instead of switching between multiple tools."
      },
      {
        "heading": "Differentiator",
        "body": "Unlike general tools, CT6 Companion is designed for CT6 workflows, CT6-only access, private account context, and internal operational readiness."
      },
      {
        "heading": "Archetype",
        "body": "Primary: Ruler. Secondary: Sage. The app should feel controlled, authoritative, structured, intelligent, and precise."
      },
      {
        "heading": "Positioning statement",
        "body": "For CT6 Org members, CT6 Companion is a private operational companion app that helps them access missions, blueprints, ship data, account insights, fleet details, and org resources from one premium command interface, so they can feel prepared, focused, and in control."
      }
    ]
  },
  "logo": {
    "eyebrow": "Identity",
    "title": "Logo System",
    "summary": "The logo should communicate command, precision, and CT6 identity without imitating third-party marks.",
    "sections": [
      {
        "heading": "Recommended concept",
        "body": "Create a CT6 monogram or angular command insignia inside a shield, hex, or coordinate-inspired mark."
      },
      {
        "heading": "Recommended logo type",
        "bullets": [
          "Primary: combination mark",
          "Compact: symbol mark",
          "Icon: CT6 monogram or command insignia",
          "Marketing: wordmark plus symbol"
        ]
      },
      {
        "heading": "Usage rules",
        "bullets": [
          "Keep clear space equal to the height of the C in CT6.",
          "Use monochrome, green, or gold variants only.",
          "Do not stretch, rotate, glow heavily, or place over busy imagery.",
          "Do not copy official Star Citizen, RSI, or other third-party marks."
        ]
      }
    ]
  },
  "app-icon": {
    "eyebrow": "Identity",
    "title": "App Icon",
    "summary": "The app icon should be a bold CT6 command insignia on a dark premium field.",
    "sections": [
      {
        "heading": "Icon layers",
        "bullets": [
          "Background: deep black or gunmetal radial field",
          "Symbol: CT6 monogram or angular command badge",
          "Accent: one green or gold edge highlight",
          "Texture: subtle grid, carbon, or glass reflection"
        ]
      },
      {
        "heading": "Rules",
        "bullets": [
          "Test at 16px, 32px, 64px, 128px, and 1024px.",
          "Avoid tiny ship details and long text.",
          "Use one accent color only.",
          "Keep it distinct from third-party branding."
        ]
      }
    ]
  },
  "colors": {
    "eyebrow": "Visual system",
    "title": "Color System",
    "summary": "Dark-first, command-oriented palette with green for action/readiness, gold for premium emphasis, and red for danger only.",
    "sections": [
      {
        "heading": "Primary colors",
        "bullets": [
          "Void Black #050607",
          "Command Green #35E184",
          "Tactical White #F5F7FA",
          "Gunsteel #2B323A"
        ]
      },
      {
        "heading": "Semantic colors",
        "bullets": [
          "Success #35E184",
          "Warning #F4B860",
          "Error #FF4D4D",
          "Info #58C7FF"
        ]
      },
      {
        "heading": "Accessibility",
        "body": "Use text labels or icons alongside color. Do not use red/green alone for status. Maintain at least 4.5:1 contrast for normal text."
      }
    ]
  },
  "typography": {
    "eyebrow": "Visual system",
    "title": "Typography",
    "summary": "Use Inter for UI, Space Grotesk for headings, and JetBrains Mono for technical data.",
    "sections": [
      {
        "heading": "Families",
        "bullets": [
          "Body/UI: Inter",
          "Headings/brand moments: Space Grotesk",
          "Data/codes/logs: JetBrains Mono"
        ]
      },
      {
        "heading": "Rules",
        "bullets": [
          "Minimum body text is 16px.",
          "Use 14px only for dense tables and compact cards.",
          "Use sentence case for interface labels.",
          "Avoid decorative sci-fi fonts for body copy."
        ]
      }
    ]
  },
  "layout": {
    "eyebrow": "Structure",
    "title": "Layout & Spacing",
    "summary": "Use a 4px base grid and keep operational data readable even in dense screens.",
    "sections": [
      {
        "heading": "Spacing",
        "body": "Use tokens space.1 through space.12. Standard card padding is 20\u201324px on desktop and 16px on mobile."
      },
      {
        "heading": "Grid",
        "bullets": [
          "Mobile: 4 columns, 16px margin",
          "Tablet: 8 columns, 24px margin",
          "Desktop: 12 columns, 32px margin",
          "Max content width: 1440px"
        ]
      },
      {
        "heading": "Density",
        "body": "Default density should be standard. Use compact density for fleet lists, ship tables, and blueprint databases only."
      }
    ]
  },
  "components": {
    "eyebrow": "Interface",
    "title": "UI Components",
    "summary": "Components should feel like premium command-console modules: glass surfaces, thin borders, clear hierarchy, and controlled interaction states.",
    "sections": [
      {
        "heading": "Core components",
        "bullets": [
          "Button",
          "Input",
          "Select",
          "Card",
          "Badge",
          "Tabs",
          "Modal",
          "Toast",
          "Sidebar",
          "Bottom sheet",
          "Data table",
          "Empty state",
          "Loading state"
        ]
      },
      {
        "heading": "Button hierarchy",
        "body": "Primary buttons use Command Green with dark text. Secondary buttons use glass surfaces and steel borders. Danger buttons use red only for destructive actions."
      },
      {
        "heading": "Cards",
        "body": "Cards use Obsidian or Glass Surface backgrounds, 1px subtle borders, 16px radius, and clear action rows."
      }
    ]
  },
  "iconography": {
    "eyebrow": "Visual language",
    "title": "Iconography",
    "summary": "Use clean outlined icons with a technical feel. Standard UI icons should come from a consistent library; CT6-specific icons can be custom.",
    "sections": [
      {
        "heading": "Style",
        "bullets": [
          "Outlined",
          "2px stroke at 24px",
          "Slightly rounded technical corners",
          "Consistent optical size"
        ]
      },
      {
        "heading": "Color rules",
        "bullets": [
          "Default: Silver Grey",
          "Active: Command Green",
          "Danger: Alert Red",
          "Premium: Gold",
          "Info: Cyan"
        ]
      }
    ]
  },
  "illustration": {
    "eyebrow": "Visual language",
    "title": "Illustration Style",
    "summary": "Illustrations should feel like tactical schematics, mission diagrams, blueprint overlays, and command visuals.",
    "sections": [
      {
        "heading": "Use",
        "bullets": [
          "Empty states",
          "Onboarding",
          "Static guideline pages",
          "Feature intros",
          "Marketing modules"
        ]
      },
      {
        "heading": "Avoid",
        "bullets": [
          "Cartoon mascots",
          "Cute blobs",
          "Pastel visuals",
          "Busy sci-fi explosions",
          "Unreadable technical decoration"
        ]
      }
    ]
  },
  "imagery": {
    "eyebrow": "Visual language",
    "title": "Photography & Imagery",
    "summary": "Photography is secondary. Prefer UI mockups, technical graphics, schematic visuals, and privacy-safe screenshots.",
    "sections": [
      {
        "heading": "Mood",
        "body": "Cinematic, dark, premium, industrial, tactical, focused."
      },
      {
        "heading": "Rules",
        "bullets": [
          "Use dark overlays behind text.",
          "Mask private data.",
          "Avoid stock office photos.",
          "Avoid implying official third-party affiliation without permission."
        ]
      }
    ]
  },
  "motion": {
    "eyebrow": "Interaction",
    "title": "Motion & Interaction",
    "summary": "Motion should feel precise, fast, and controlled, supporting clarity rather than spectacle.",
    "sections": [
      {
        "heading": "Timing",
        "bullets": [
          "Small interactions: 100\u2013150ms",
          "Modals: 220\u2013300ms",
          "Screen transitions: 250\u2013400ms",
          "Skeleton shimmer: 1200\u20131800ms"
        ]
      },
      {
        "heading": "Reduced motion",
        "body": "Replace slides with fades, remove shimmer, remove pulsing effects, and keep state changes immediate."
      }
    ]
  },
  "voice-tone": {
    "eyebrow": "Content",
    "title": "Voice & Tone",
    "summary": "CT6 Companion speaks like a calm operations officer: direct, professional, serious, and useful.",
    "sections": [
      {
        "heading": "Principles",
        "bullets": [
          "Direct",
          "Controlled",
          "Professional",
          "Motivational",
          "Clear",
          "Respectful"
        ]
      },
      {
        "heading": "Example",
        "body": "Good: Fleet sync complete. 12 records updated. Bad: WOW!!! Your fleet is totally ready!"
      }
    ]
  },
  "microcopy": {
    "eyebrow": "Content",
    "title": "Microcopy",
    "summary": "Use specific, calm, useful copy for buttons, forms, errors, confirmations, navigation, tooltips, and notifications.",
    "sections": [
      {
        "heading": "Button labels",
        "bullets": [
          "Sync fleet",
          "Open mission board",
          "Save loadout",
          "View details",
          "Confirm access",
          "Remove item"
        ]
      },
      {
        "heading": "Error pattern",
        "body": "Say what failed, then give the next step. Example: Fleet sync failed. Check your connection and try again."
      }
    ]
  },
  "accessibility": {
    "eyebrow": "Usability",
    "title": "Accessibility",
    "summary": "The brand must remain usable, readable, keyboard-friendly, and color-blind-friendly.",
    "sections": [
      {
        "heading": "Core rules",
        "bullets": [
          "Normal text contrast: 4.5:1 or higher",
          "Touch targets: 44px preferred",
          "Visible keyboard focus states",
          "Screen-reader labels for icon-only actions",
          "No status by color alone"
        ]
      },
      {
        "heading": "Error accessibility",
        "body": "Place error messages near fields, announce them to assistive tech, and provide recovery actions."
      }
    ]
  },
  "themes": {
    "eyebrow": "Theming",
    "title": "Dark & Light Mode",
    "summary": "Dark mode is the primary brand mode. Light mode is a secondary accessibility and documentation mode.",
    "sections": [
      {
        "heading": "Dark mode",
        "body": "Use layered dark surfaces, green active states, restrained glow, and high-contrast text."
      },
      {
        "heading": "Light mode",
        "body": "Use cool grey backgrounds, strong borders, dark text, and restrained CT6 accents so it still feels tactical."
      }
    ]
  },
  "app-store": {
    "eyebrow": "Launch",
    "title": "App Store Guidelines",
    "summary": "App store visuals should show the product clearly, use mock data, and avoid implying unauthorized official affiliation.",
    "sections": [
      {
        "heading": "Screenshot style",
        "bullets": [
          "Dark CT6 background",
          "Device mockups",
          "Short feature captions",
          "Green/gold accents",
          "Masked private data"
        ]
      },
      {
        "heading": "Caption examples",
        "bullets": [
          "Your CT6 command dashboard",
          "Track missions from one operational view",
          "Review private fleet insights securely"
        ]
      }
    ]
  },
  "social": {
    "eyebrow": "Marketing",
    "title": "Social Media Guidelines",
    "summary": "Social assets should be dark, product-first, premium, and privacy-safe.",
    "sections": [
      {
        "heading": "Templates",
        "bullets": [
          "Feature card",
          "Mission update",
          "System update",
          "UI spotlight",
          "Release notes",
          "Member guide"
        ]
      },
      {
        "heading": "Rules",
        "bullets": [
          "One message per post",
          "Mask private data",
          "Use clear product screenshots",
          "Avoid meme-heavy or childish tone"
        ]
      }
    ]
  },
  "email-notifications": {
    "eyebrow": "Messaging",
    "title": "Email & Notifications",
    "summary": "Messages should be useful, restrained, and never reveal sensitive private data in previews.",
    "sections": [
      {
        "heading": "Email layout",
        "bullets": [
          "Logo header",
          "Clear heading",
          "Short body",
          "One green CTA",
          "Support/privacy footer"
        ]
      },
      {
        "heading": "Push examples",
        "bullets": [
          "New CT6 mission available. Review assignment details.",
          "Fleet sync complete. Updated data is now available.",
          "New sign-in detected. Review account activity."
        ]
      }
    ]
  },
  "tokens": {
    "eyebrow": "Engineering",
    "title": "Design Tokens",
    "summary": "Tokens make the brand system reusable across apps, components, code, docs, and marketing surfaces.",
    "sections": [
      {
        "heading": "Token files",
        "bullets": [
          "src/design-tokens/colors.json",
          "src/design-tokens/typography.json",
          "src/design-tokens/spacing.json",
          "src/design-tokens/radius.json",
          "src/design-tokens/shadows.json",
          "src/design-tokens/motion.json",
          "src/design-tokens/tokens.json"
        ]
      },
      {
        "heading": "Naming principle",
        "body": "Use role-based names for UI decisions, such as color.text.primary and color.bg.elevated, instead of only raw color names."
      }
    ]
  },
  "do-dont": {
    "eyebrow": "Examples",
    "title": "Do & Don\u2019t",
    "summary": "Specific examples help designers, developers, marketers, and writers avoid inconsistent decisions.",
    "sections": [
      {
        "heading": "Do",
        "bullets": [
          "Use green for primary action and active state.",
          "Use Inter for readable UI text.",
          "Use clear error messages with recovery steps.",
          "Mask private data in screenshots."
        ]
      },
      {
        "heading": "Don\u2019t",
        "bullets": [
          "Use red for decoration.",
          "Use decorative sci-fi fonts for body text.",
          "Overuse glow effects.",
          "Expose real account details in public materials."
        ]
      }
    ]
  },
  "assets": {
    "eyebrow": "Production",
    "title": "Brand Asset Checklist",
    "summary": "Assets still needed to complete the CT6 Companion brand kit.",
    "sections": [
      {
        "heading": "Core assets",
        "bullets": [
          "Primary logo",
          "Symbol mark",
          "Wordmark",
          "App icon",
          "Favicon",
          "Social avatar",
          "Logo clear-space guide"
        ]
      },
      {
        "heading": "Product assets",
        "bullets": [
          "Dashboard mockups",
          "Mission screen",
          "Blueprint screen",
          "Fleet overview",
          "Private insights screen",
          "Settings screen",
          "Onboarding screens"
        ]
      }
    ]
  },
  "implementation": {
    "eyebrow": "Production",
    "title": "Implementation Checklist",
    "summary": "Use this checklist to move from guideline to usable app system.",
    "sections": [
      {
        "heading": "Phase 1",
        "bullets": [
          "Finalize logo and icon",
          "Confirm legal boundaries for third-party references",
          "Apply tokens in CSS and components",
          "Build base layout shell"
        ]
      },
      {
        "heading": "Phase 2",
        "bullets": [
          "Create component library",
          "Build mock screens",
          "Add accessibility states",
          "Create screenshot-safe demo data",
          "Prepare app store and social templates"
        ]
      }
    ]
  }
} as const satisfies Record<string, GuidePageContent>;
