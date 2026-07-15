# Design: Redesign IndustriesAndWhy Section

## Status

`complete`

---

## Executive Summary

Split the 429-line `IndustriesAndWhy` monolith into a shell + 4 focused sub-components. Data extracted to `src/data/industriesAndWhy.js`; inline SVG icons stay in component scope via a lookup map. `framer-motion` loaded via `LazyMotion`+`domAnimation` (~15–18 kB gzipped); `embla-carousel-react` drives the infinite marquee. All CSS rewritten with `iw-` BEM prefix; old `.industry-*`, `.reason-*`, `.material-*`, `.process-*` classes deleted in the same commit that adds new rules. Badges promoted from `::after` pseudo-elements to real DOM nodes.

---

## Architecture Decisions

### Decision: Shell + 4 sub-components over single-file refactor

| | Single-file refactor | Approach B: Shell + 4 sub-components |
|--|--|--|
| File size after | 600+ lines | Each file ~80–150 lines |
| Reviewability | Hard | Each component independently reviewable |
| Animation isolation | Blended | Each component owns its motion |
| Effort | Medium | Medium-High |

**Decision**: Shell + 4 sub-components. The monolith is already past the threshold where splitting pays for itself.

---

### Decision: Inline SVG icons stay in component scope

Icons are inline JSX — they cannot live in a plain `.js` data file without losing React element identity.

**Decision**: Text/metadata → `src/data/industriesAndWhy.js`. Icon lookup map (name → SVG JSX) → `src/components/IndustriesAndWhy/icons.jsx`. Each sub-component imports the icons it needs.

---

### Decision: `iw-` BEM prefix for all new CSS classes

Old CSS uses `.industry-*`, `.reason-*`, `.material-*`, `.process-*` — no namespace. New sub-components risk class collision during the transition period.

**Decision**: All new classes use `iw-` prefix (e.g., `.iw-marquee__track`, `.iw-benefit__icon-circle`). Old CSS deleted in the same commit as new CSS (no patch-and-keep strategy).

---

### Decision: `LazyMotion` + `domAnimation` for framer-motion

Full `framer-motion` bundle: ~38–42 kB gzipped. React 19 + first animation library on the project.

**Decision**: `import { LazyMotion, domAnimation } from 'framer-motion'` + `loadAsync()` pattern. Bundle drops to ~15–18 kB gzipped. Wrap motion components in `<LazyMotion features={domAnimation}>` at the shell level.

---

### Decision: Embla Carousel for Marquee (not CSS keyframes)

CSS infinite marquees via `@keyframes` are jerky, janky on mobile, and don't pause cleanly on hover/focus.

**Decision**: `embla-carousel-react` with `Autoplay` plugin. `loop: true`, `speed: 1`, `stopOnInteraction: false`, pause on hover and focus. Embla handles swipe physics on mobile.

---

## Component Tree

```
IndustriesAndWhy.jsx (shell)
├── LazyMotion (domAnimation)
├── IndustriesMarquee.jsx
│   └── embla-carousel (Autoplay plugin)
├── BenefitsAlternating.jsx
│   └── framer-motion whileInView (staggerChildren)
├── MaterialsHeroGrid.jsx
│   └── framer-motion whileInView
└── ProcessTimeline.jsx
    └── framer-motion scaleX/scaleY (whileInView)
```

`HomePage.jsx` wiring is unchanged — it imports `IndustriesAndWhy` (the shell) and that's it.

---

## Data Contract

All data lives in `src/data/industriesAndWhy.js`. Icons are NOT in this file.

```js
// industries[]
{ name: string }

// reasons[]
{ title: string, desc: string }

// materials[]
{ name: string, badge?: string }  // badge is optional; undefined = no badge

// steps[]
{ number: string, title: string, desc: string }
```

The `icon` field lives in `src/components/IndustriesAndWhy/icons.jsx` as a lookup map keyed by item name/number.

---

## Animation Strategy

| Sub-component | Animation | Trigger | Reduced motion |
|---|---|---|---|
| `IndustriesMarquee` | Infinite horizontal scroll | Embla autoplay | `prefers-reduced-motion`: show 1 static card |
| `BenefitsAlternating` | `opacity 0→1` + `translateY 20px→0`, stagger 0.1s | `whileInView`, `viewport={{ once: true, amount: 0.2 }}` | Skip animation, show immediately |
| `MaterialsHeroGrid` | Same fadeInUp on each card | `whileInView`, `viewport={{ once: true, amount: 0.15 }}` | Skip |
| `ProcessTimeline` | `scaleX 0→1` (desktop) or `scaleY 0→1` (mobile) on connector line; steps reveal sequentially | `whileInView` on container | Connector and step animations disabled |

Implementation: `useReducedMotion()` hook from `framer-motion` at shell level gates all `motion.*` components. CSS `@media (prefers-reduced-motion: reduce)` fallback in each CSS file.

---

## CSS Architecture

**Prefix**: `iw-` (industries-why) on all new classes.

**Token reuse** (from `:root` in `src/index.css`):
- `--clr-primary-pink`, `--clr-navy-deep`, `--clr-white`
- `--radius-full`, `--radius-md`
- `--transition-premium`
- `--shadow-sm`

**Responsive ladder** (unchanged):
| Breakpoint | Width |
|---|---|
| xs | < 576px |
| sm | 576–767px |
| md | 768–1023px |
| lg | 1024–1199px |
| xl | 1200px+ |

**Breakpoint mixins** (co-located in each sub-component's CSS):
```css
/* Mobile first */
.iw-marquee__track { /* 1 visible */ }
@media (min-width: 576px) { .iw-marquee__track { /* 3 visible */ } }
@media (min-width: 1024px) { .iw-marquee__track { /* 5–6 visible */ } }
```

**Globally reusable classes** (not prefixed — kept from old CSS):
- `.block-title` — section heading
- `.title-underline` — pink underline accent
- `.container` — max-width wrapper
- `.section-padding` — vertical padding

**Old CSS strategy**: Delete all rules in a single commit. Do not maintain two CSS files simultaneously.

---

## File Manifest

| File | Action | Description |
|------|--------|-------------|
| `src/components/IndustriesAndWhy/IndustriesAndWhy.jsx` | Rewrite | Shell — data import, LazyMotion, composes children |
| `src/components/IndustriesAndWhy/IndustriesAndWhy.css` | Replace | Shell + shared section styles; old rules deleted |
| `src/components/IndustriesAndWhy/IndustriesMarquee.jsx` | Create | Infinite carousel via Embla |
| `src/components/IndustriesAndWhy/IndustriesMarquee.css` | Create | Marquee layout and animation |
| `src/components/IndustriesAndWhy/BenefitsAlternating.jsx` | Create | Alternating editorial rows with scroll reveals |
| `src/components/IndustriesAndWhy/BenefitsAlternating.css` | Create | Alternating grid + responsive |
| `src/components/IndustriesAndWhy/MaterialsHeroGrid.jsx` | Create | Hierarchical grid (hero + compact) |
| `src/components/IndustriesAndWhy/MaterialsHeroGrid.css` | Create | Grid layouts per breakpoint |
| `src/components/IndustriesAndWhy/ProcessTimeline.jsx` | Create | 4-step timeline with animated connector |
| `src/components/IndustriesAndWhy/ProcessTimeline.css` | Create | Timeline layout + connector animation |
| `src/components/IndustriesAndWhy/icons.jsx` | Create | SVG icon lookup map (React elements) |
| `src/data/industriesAndWhy.js` | Create | Text/metadata for all 4 data arrays |
| `src/pages/HomePage/HomePage.jsx` | None | Wiring unchanged |
| `package.json` | Modify | Add `framer-motion`, `embla-carousel-react`, `embla-carousel-autoplay` |
| `src/components/IndustriesAndWhy/IndustriesAndWhy.css` old | Delete | Replaced entirely — no patch |

---

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Bundle bloat from first animation library | Medium | `LazyMotion` + `domAnimation`; target ~15–18 kB gzipped |
| Badge visibility change (hover → always-on) | Low | Intentional a11y improvement; communicate to stakeholders |
| Alternating benefits look empty without images | Medium | Use enlarged SVG icons on colored circular backgrounds |
| CSS specificity clash during migration | Medium | `iw-` prefix + single-commit old CSS deletion |
| `framer-motion` v11 + React 19 edge cases | Low | Pin to known-stable patch; `vite build` sanity check |
| Marquee pauses on hover but Embla also pauses on focus | Low | Test keyboard focus behavior; may need explicit `playOnMount` |

---

## Open Questions

- [ ] Should `BenefitsAlternating` support a future `imageUrl` field, or is the SVG-icon-as-visual approach sufficient for launch?
- [ ] Does the `materials-advisor-banner` (the dashed info box) live inside `MaterialsHeroGrid` or get its own small component?
- [ ] Should `ProcessTimeline` show an `aria-current="step"` state for the active/highlighted step, or is static display sufficient?

---

## Next Recommended

`sdd-tasks`

---

## Artifacts

- `openspec/changes/redesign-industries-section/design.md`
- Engram: `sdd/redesign-industries-section/design` (topic_key upsert)
