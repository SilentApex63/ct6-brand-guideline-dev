export const colorRows = [
  { name: 'Void Black', token: 'color.primary.950', hex: '#050607', usage: 'Primary dark app background' },
  { name: 'Command Green', token: 'color.primary.500', hex: '#35E184', usage: 'Primary actions, active states, ready/success signals' },
  { name: 'Tactical White', token: 'color.text.primary', hex: '#F5F7FA', usage: 'Primary text on dark surfaces' },
  { name: 'Gunsteel', token: 'color.neutral.700', hex: '#2B323A', usage: 'Cards, panels, secondary surfaces' },
  { name: 'Premium Gold', token: 'color.accent.gold.500', hex: '#C7A44A', usage: 'Premium highlights, rank, featured moments' },
  { name: 'Alert Red', token: 'color.semantic.error.500', hex: '#FF4D4D', usage: 'Errors, danger, destructive actions' },
  { name: 'Signal Cyan', token: 'color.semantic.info.500', hex: '#58C7FF', usage: 'Info, links, telemetry visuals' },
  { name: 'Warning Amber', token: 'color.semantic.warning.500', hex: '#F4B860', usage: 'Pending, caution, partial sync, warning states' },
  { name: 'Carbon', token: 'color.bg.surface', hex: '#0B0E11', usage: 'Base surfaces and grouped page sections' },
  { name: 'Obsidian', token: 'color.bg.elevated', hex: '#11161C', usage: 'Elevated cards, modals, sheets, and key panels' },
  { name: 'Graphite Blue', token: 'color.surface.blue.800', hex: '#18212B', usage: 'Desktop sidebars and secondary navigation surfaces' },
  { name: 'Silver Grey', token: 'color.text.secondary', hex: '#AAB3BE', usage: 'Secondary copy, descriptions, helper text' },
] as const;

export const typographyRows = [
  { style: 'Display', token: 'font.display', size: '48px', lineHeight: '56px', weight: '700', usage: 'Marketing hero, major brand page' },
  { style: 'H1', token: 'font.heading.h1', size: '36px', lineHeight: '44px', weight: '700', usage: 'Main page title' },
  { style: 'H2', token: 'font.heading.h2', size: '30px', lineHeight: '38px', weight: '700', usage: 'Dashboard section title' },
  { style: 'H3', token: 'font.heading.h3', size: '24px', lineHeight: '32px', weight: '600', usage: 'Card group heading' },
  { style: 'H4', token: 'font.heading.h4', size: '20px', lineHeight: '28px', weight: '600', usage: 'Card title and compact section title' },
  { style: 'Body Large', token: 'font.body.large', size: '18px', lineHeight: '28px', weight: '400', usage: 'Long-form guideline intro copy' },
  { style: 'Body', token: 'font.body.default', size: '16px', lineHeight: '24px', weight: '400', usage: 'Standard app and guideline copy' },
  { style: 'Compact', token: 'font.body.compact', size: '14px', lineHeight: '20px', weight: '400', usage: 'Tables and dense cards' },
  { style: 'Label', token: 'font.label', size: '13px', lineHeight: '18px', weight: '600', usage: 'Form labels and metadata labels' },
  { style: 'Caption', token: 'font.caption', size: '12px', lineHeight: '16px', weight: '500', usage: 'Timestamps and helper text' },
  { style: 'Button', token: 'font.button', size: '14px', lineHeight: '20px', weight: '600', usage: 'Buttons and CTAs' },
] as const;

export const spacingRows = [
  { token: 'space.0', value: '0px', usage: 'Reset' },
  { token: 'space.1', value: '4px', usage: 'Tiny gap' },
  { token: 'space.2', value: '8px', usage: 'Icon gap' },
  { token: 'space.3', value: '12px', usage: 'Compact component gap' },
  { token: 'space.4', value: '16px', usage: 'Mobile card padding' },
  { token: 'space.5', value: '20px', usage: 'Standard card padding' },
  { token: 'space.6', value: '24px', usage: 'Panel padding' },
  { token: 'space.7', value: '32px', usage: 'Desktop section gap' },
  { token: 'space.8', value: '40px', usage: 'Large section gap' },
  { token: 'space.9', value: '48px', usage: 'Major section gap' },
  { token: 'space.10', value: '64px', usage: 'Guideline page section gap' },
  { token: 'space.11', value: '80px', usage: 'Hero spacing' },
  { token: 'space.12', value: '96px', usage: 'Large page rhythm' },
] as const;

export const radiusRows = [
  { token: 'radius.none', value: '0px', usage: 'Sharp utility layouts only' },
  { token: 'radius.xs', value: '4px', usage: 'Small technical surfaces' },
  { token: 'radius.sm', value: '8px', usage: 'Small controls and compact modules' },
  { token: 'radius.md', value: '12px', usage: 'Inputs and mid-sized controls' },
  { token: 'radius.card', value: '16px', usage: 'Default cards and modules' },
  { token: 'radius.modal', value: '20px', usage: 'Modals and bottom sheets' },
  { token: 'radius.button', value: '10px', usage: 'Buttons and action controls' },
  { token: 'radius.badge', value: '999px', usage: 'Badges and status pills' },
] as const;

export const shadowRows = [
  { token: 'shadow.none', value: 'none', usage: 'Flat utility surfaces' },
  { token: 'shadow.small', value: '0 2px 8px rgba(0,0,0,0.28)', usage: 'Small cards and hover elevation' },
  { token: 'shadow.medium', value: '0 8px 24px rgba(0,0,0,0.36)', usage: 'Panels and elevated surfaces' },
  { token: 'shadow.large', value: '0 16px 48px rgba(0,0,0,0.48)', usage: 'Modals and major overlays' },
  { token: 'shadow.glow.green', value: '0 0 24px rgba(53,225,132,0.18)', usage: 'Primary command emphasis' },
  { token: 'shadow.focus', value: '0 0 0 3px rgba(53,225,132,0.28)', usage: 'Keyboard focus states' },
] as const;

export const motionRows = [
  { token: 'motion.instant', value: '80ms', usage: 'Immediate UI response' },
  { token: 'motion.fast', value: '150ms', usage: 'Hover, press, and small state changes' },
  { token: 'motion.medium', value: '250ms', usage: 'Modals, toasts, and panels' },
  { token: 'motion.slow', value: '400ms', usage: 'Screen transitions and major movement' },
  { token: 'ease.standard', value: 'cubic-bezier(0.2, 0, 0, 1)', usage: 'Default interface easing' },
  { token: 'ease.command', value: 'cubic-bezier(0.16, 1, 0.3, 1)', usage: 'Premium command motion' },
] as const;

export const breakpointRows = [
  { token: 'breakpoint.xs', value: '360px', usage: 'Small mobile' },
  { token: 'breakpoint.sm', value: '480px', usage: 'Large mobile' },
  { token: 'breakpoint.md', value: '768px', usage: 'Tablet' },
  { token: 'breakpoint.lg', value: '1024px', usage: 'Desktop layout begins' },
  { token: 'breakpoint.xl', value: '1280px', usage: 'Wide desktop' },
  { token: 'breakpoint.2xl', value: '1440px', usage: 'Max content width' },
  { token: 'breakpoint.3xl', value: '1920px', usage: 'Large command displays' },
] as const;

export const zIndexRows = [
  { token: 'z.base', value: '0', usage: 'Base content' },
  { token: 'z.card', value: '10', usage: 'Elevated cards' },
  { token: 'z.nav', value: '100', usage: 'Sidebar and navigation' },
  { token: 'z.sticky', value: '200', usage: 'Sticky command bars' },
  { token: 'z.dropdown', value: '400', usage: 'Dropdown menus' },
  { token: 'z.modal', value: '700', usage: 'Modals and sheets' },
  { token: 'z.toast', value: '900', usage: 'Toasts and alerts' },
  { token: 'z.system', value: '1000', usage: 'System-level overlays' },
] as const;