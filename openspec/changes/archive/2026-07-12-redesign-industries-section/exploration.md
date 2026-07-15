# Exploration: Redesign IndustriesAndWhy Section

## Current State

`IndustriesAndWhy.jsx` is a monolithic 429-line component that renders four distinct sub-sections inline: (1) an 8-item industries grid, (2) a 6-item benefits list + 9-item materials grid in a split-column layout, (3) a 4-step process flow. All data arrays (`industries`, `reasons`, `materials`, `steps`) are hardcoded inside the component. The companion CSS (`IndustriesAndWhy.css`, 531 lines) relies heavily on glass-morphism card patterns (`backdrop-filter: blur`, semi-transparent borders) and hover-only interactions. The section sits between `Services` (beige background, `#e4cbd0`) and `FeaturedProducts` (white background) on the landing page.

### Key layout observations
- **Industries row**: 2→4→8 column grid. Cards have identical glass styling.
- **Benefits row**: Vertical flex list with hover-dim sibling effect (`:hover` dims non-hovered items).
- **Materials row**: 2→3 column grid. Badges (`¡El más pedido!`, `Alta Demanda`) are `::after` pseudo-elements that only appear on hover — invisible to screen readers and touch users.
- **Process row**: Vertical stack on mobile, horizontal row on desktop (`768px+`). A dashed `::before` line connects steps on desktop. No scroll-triggered motion.

## Affected Areas

- `src/components/IndustriesAndWhy/IndustriesAndWhy.jsx` — full rewrite of layout logic, data extraction
- `src/components/IndustriesAndWhy/IndustriesAndWhy.css` — most rules will be replaced; only `.block-title`, `.title-underline`, and `scroll-margin-top` behavior are safely reusable
- `src/pages/HomePage/HomePage.jsx` — wiring unchanged if IndustriesAndWhy remains a shell component
- `src/data/` — new file `industriesAndWhy.js` needed
- `package.json` — new dependencies `framer-motion`, `embla-carousel-react`

## Approaches

1. **In-place refactor (keep single file)**
   - Pros: No new files, minimal import changes, fastest to implement.
   - Cons: File grows even larger with animation logic; harder to review; no separation of concerns.
   - Effort: Medium

2. **Approach B: Narrative redesign with alternating sections + component split**
   - Pros: Each sub-section is independently reviewable; aligns with user intent; scroll animations add perceived quality; badges become always-visible.
   - Cons: More files, more CSS to write, bundle size increase from `framer-motion`.
   - Effort: Medium-High

### Recommendation
**Approach B** is the right call. The current monolith is already too large, and the UX improvements (visible badges, scroll motion, alternating layout) justify the extra files. A shell component with four co-located sub-components keeps the HomePage wiring unchanged.

## Design Constraints

| Constraint | Value | Impact |
|---|---|---|
| Breakpoints | `576px`, `768px`, `1024px`, `1200px` | New layouts must follow same ladder |
| Background | `linear-gradient(180deg, #ffcbba 0%, #fff0eb 100%)` | Marquee/icons must contrast against warm gradient |
| Tokens | `--clr-primary-pink`, `--clr-navy-deep`, `--clr-white`, `--radius-md/full`, `--transition-premium` | Sufficient; no new tokens needed |
| Container | `max-width: 1240px`, `padding: 20px` | All sub-sections must stay within `.container` |
| React version | `^19.2.7` | `framer-motion` v11+ is compatible |
| No animation library today | CSS keyframes only (`fadeInUp`, `pulse`) | First library addition; set precedent for reduced-motion handling |

## Key Findings

### CSS Reuse vs. Rewrite
- **Reusable**: `.block-title`, `.title-underline`, `.container`, `.section-padding`, `scroll-margin-top: 100px` pattern.
- **Must rewrite**: `.industries-horizontal-grid` (grid → marquee), `.reasons-list` (flex list → alternating editorial), `.materials-grid` (uniform grid → hierarchical hero + compact), `.process-flow-container` (static → scroll-driven timeline).
- The glass-morphism pattern (`rgba(255,255,255,0.55)` + `backdrop-filter`) is used across ~12 rules. The redesign explicitly moves **away** from card borders for industries and benefits, so these rules can be deleted after migration.

### Responsive Behavior Breakdown
- **< 576px**: industries 2-col, materials 2-col, process vertical, split-row stacked.
- **576–767px**: industries 4-col, materials 3-col, process still vertical.
- **768–1023px**: process switches to horizontal row; split-row still stacked.
- **1024px+**: industries 8-col, split-row becomes 2-col grid (`1.15fr 0.85fr`), materials 3-col.
- **New layouts needed**:
  - Marquee: full-width overflow container on all breakpoints; embla handles swipe on mobile.
  - Alternating benefits: single column on mobile, alternating 2-col on tablet+.
  - Materials hero grid: 1-col hero cards on mobile, 2-col on tablet, 3-col on desktop with 1–2 hero cards spanning 2 columns.
  - Timeline: vertical on mobile (left-aligned line), horizontal on desktop (top-down line).

### Bundle Impact
- `framer-motion` (latest): ~38–42 kB gzipped. With `LazyMotion` + `domAnimation` feature, drops to ~15–18 kB gzipped.
- `embla-carousel-react` + `embla-carousel-autoplay`: ~6–8 kB gzipped total.
- **Recommendation**: import `LazyMotion` and `domAnimation` from `framer-motion` to cut bundle cost by ~50%.

### Component Extraction
Recommended file tree:
```
src/components/IndustriesAndWhy/
├── IndustriesAndWhy.jsx       (shell — imports 4 sub-components)
├── IndustriesAndWhy.css       (shared section styles only)
├── IndustriesMarquee.jsx
├── IndustriesMarquee.css
├── BenefitsAlternating.jsx
├── BenefitsAlternating.css
├── MaterialsHeroGrid.jsx
├── MaterialsHeroGrid.css
├── ProcessTimeline.jsx
├── ProcessTimeline.css
└── icons.jsx                  (shared SVG icon components)
```

`HomePage.jsx` wiring **does not change**.

### Data Model
- Current shape is adequate for text data.
- **Problem**: Icons are inline JSX SVGs. They cannot be cleanly moved to a plain `.js` data file without losing React element identity.
- **Solution**: Extract text data (`name`, `title`, `desc`, `badge`) to `src/data/industriesAndWhy.js`. Keep icon mapping in `icons.jsx` (or inside each sub-component) using a lookup object keyed by item name/ID.
- **Enhancement needed**: Benefits alternating layout wants imagery. Currently benefits have no images. Decision: use abstract SVG shapes/gradients as visual placeholders, or add `imageUrl` to data and accept that some benefits may ship without images initially.

### Animation Strategy
- **Entrance animations**: `framer-motion` `whileInView` with `viewport={{ once: true, amount: 0.3 }}`. Use on parent containers with `staggerChildren` for child items.
- **Timeline connector**: On desktop, an SVG line or `motion.div` with `scaleX` from 0→1. On mobile, `scaleY` from 0→1. Triggered by `whileInView`.
- **Marquee**: `embla-carousel-react` with `Autoplay` plugin, `loop: true`, `speed: 1`. Pause on hover.
- **Reduced motion**: Wrap all `motion.*` components in a `useReducedMotion` check (or CSS `@media (prefers-reduced-motion: reduce)` fallback).

### Accessibility
- **Marquee**: Must have `aria-roledescription="carousel"`, `aria-label="Industrias que servimos"`, and a pause/respect `prefers-reduced-motion`.
- **Badges**: Moving from `::after` pseudo-elements to real DOM elements fixes the hover-only accessibility bug.
- **Focus**: Alternating layout must not create tab traps; standard document flow is fine.
- **Timeline steps**: Each step should be a `<li>` inside an `<ol>` with `aria-label="Proceso de trabajo"`.

## Risks

1. **Bundle bloat from framer-motion**: Even with `LazyMotion`, this is the first animation library. If later pages also adopt it, the cost is amortized; if not, it’s a one-section tax.
2. **Pseudo-element badge removal is a breaking visual change**: Users currently hovering to see badges will now see them always. This is intentional UX improvement, but stakeholders should be aware.
3. **Alternating benefits without images**: If no images are provided, the "visual" side will look empty. Need placeholder strategy (abstract color blocks, icons at larger scale, or delayed until images are ready).
4. **Browser compatibility**: `embla-carousel` requires modern JS (no IE11 concern). `framer-motion` v11 supports React 19 but had some initial compat issues — we should pin to a known-stable patch.
5. **CSS specificity fights**: The existing CSS has many element selectors (`.material-card-item::after`, `.process-flow-container::before`). Co-existing old and new CSS during migration could cause specificity clashes. Plan: write new classes with distinct BEM-style prefixes (e.g., `.iw-marquee__track`) and delete old rules in a single cleanup pass.

## Opportunities

1. **Icon registry**: The entire site embeds inline SVGs. A shared `Icon` component with a name→SVG mapping would reduce JSX noise across all components, not just this section.
2. **Scroll-driven animations elsewhere**: Once `framer-motion` is in the bundle, `Services` and `FeaturedProducts` cards could also get `whileInView` fade-ins for minimal extra cost.
3. **Marquee reuse**: The same `embla-carousel` marquee pattern could replace the manual scroll implementation in `FeaturedProducts` later.
4. **Data-driven sections**: Extracting data to `src/data/` sets a precedent for CMS integration later.

## Concrete Decisions for Design Phase

1. **Sub-components**: Yes — split into 4 files under `IndustriesAndWhy/`.
2. **Data extraction**: Text to `src/data/industriesAndWhy.js`; icons stay in component scope via a lookup map.
3. **Bundle optimization**: Use `LazyMotion` + `domAnimation` from `framer-motion`.
4. **CSS strategy**: New BEM-style classes with `iw-` prefix; delete old CSS in one sweep after all sub-sections are ported.
5. **Reduced motion**: Implement a `ReducedMotionProvider` or at least a shared hook at the `IndustriesAndWhy` shell level.
6. **Badge visibility**: Badges become real DOM nodes, always visible, positioned absolutely within card.
7. **Responsive timeline**: Mobile = vertical line on left, steps to right; Desktop = horizontal line on top/bottom, steps below.
8. **Benefits imagery**: Use enlarged SVG icons on colored circular backgrounds as the "visual" side until real images are provided.

## Ready for Proposal

**Yes.** The scope is clear, the Approach B plan is validated by the codebase, and the risks are manageable. The orchestrator can tell the user: the redesign will split the monolithic component into 4 narrative sub-sections with scroll-triggered animations, always-visible badges, and extracted data files. Bundle cost is ~20–25 kB gzipped with `LazyMotion` optimizations.
