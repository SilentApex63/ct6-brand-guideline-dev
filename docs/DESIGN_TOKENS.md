# CT6 Companion Design Tokens

## Token Philosophy

Tokens should be role-based first, raw-color based second.

Good:

```text
color.text.primary
color.bg.elevated
color.border.active
```

Less useful in components:

```text
green.500
grey.900
```

Role-based tokens make it easier to support dark mode, light mode, and future app variants.

## Token Categories

```text
color
typography
spacing
radius
shadow
motion
breakpoint
z-index
```

## Important Color Rules

- `color.primary.500` is Command Green.
- Use Command Green for primary action, active state, success, and ready state.
- Use red only for error, danger, and destructive action.
- Use gold only for premium, rank, leadership, and featured highlights.
- Use cyan for neutral information and telemetry.

## CSS Variable Prefix

All CSS custom properties use the `--ct6-` prefix.

Example:

```css
background: var(--ct6-color-bg-elevated);
color: var(--ct6-color-text-primary);
border-color: var(--ct6-color-border-subtle);
```

## Example Component Mapping

```css
.ct6-button-primary {
  background: var(--ct6-color-primary-500);
  color: var(--ct6-color-text-inverse);
  border-radius: var(--ct6-radius-button);
  transition: background var(--ct6-motion-fast) var(--ct6-ease-standard);
}

.ct6-card {
  background: var(--ct6-color-bg-glass);
  border: 1px solid var(--ct6-color-border-subtle);
  border-radius: var(--ct6-radius-card);
  box-shadow: var(--ct6-shadow-small);
}
```

## Files

- `src/design-tokens/tokens.json` contains all tokens.
- `src/design-tokens/colors.json` contains color tokens.
- `src/styles/tokens.css` contains CSS variables.
