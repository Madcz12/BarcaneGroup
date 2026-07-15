# Proposal: Redesign IndustriesAndWhy Section

## Intent

The current `IndustriesAndWhy` section is a 429-line monolithic component with repetitive glass-morphism cards, hover-only badges (invisible to touch/keyboard users), and hardcoded data. We need to transform it into a visually impressive, narrative-driven section with scroll-triggered animations, always-visible badges, and clean data separation.

## Scope

### In Scope
- Split into 4 sub-components: `IndustriesMarquee`, `BenefitsAlternating`, `MaterialsHeroGrid`, `ProcessTimeline`
- Extract text data to `src/data/industriesAndWhy.js`; keep icon mapping in component scope
- Add `framer-motion` (with `LazyMotion` + `domAnimation`) and `embla-carousel-react`
- Rewrite CSS with new `iw-` BEM prefix; delete old rules after migration
- Implement scroll-triggered entrance animations, infinite marquee, and animated timeline
- Make badges always-visible DOM elements (remove `::after` hover-only anti-pattern)
- Mobile-first responsive using existing breakpoints (576/768/1024/1200px)

### Out of Scope
- Adding real photography to benefits (use enlarged SVG placeholders)
- Shared `Icon` registry for the whole site
- Scroll-driven animations for other sections (`Services`, `FeaturedProducts`)
- CMS integration beyond static JS data file

## Capabilities

### New Capabilities
- `industries-marquee`: Infinite horizontal auto-scrolling carousel of industry icons
- `benefits-alternating`: Editorial two-column layout alternating visual/text sides with `whileInView` reveals
- `materials-hero-grid`: Hierarchical grid with hero cards (always-visible badges) + compact sub-grid
- `process-timeline`: Animated 4-step connector line (`scaleX`/`scaleY`) with progressive step reveals

### Modified Capabilities
- None (pure redesign; no existing specs to delta)

## Approach

Use **Approach B: Narrative redesign with alternating sections + component split**. The shell component `IndustriesAndWhy.jsx` imports four co-located sub-components. `framer-motion` is loaded via `LazyMotion`/`domAnimation` to keep bundle impact at ~15–18 kB gzipped. `embla-carousel-react` drives the marquee with `loop` + `Autoplay`. Badges move from `::after` pseudo-elements to real DOM nodes for accessibility. Old CSS is cleaned up in a final sweep commit.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/components/IndustriesAndWhy/` | Major | 4 new sub-component files + shell rewrite |
| `src/components/IndustriesAndWhy/IndustriesAndWhy.css` | Major | Most rules replaced; keep `.block-title`, `.title-underline`, `.container` |
| `src/data/industriesAndWhy.js` | New | Extracted text data for industries, benefits, materials, process |
| `package.json` | Modified | Add `framer-motion`, `embla-carousel-react` |
| `src/pages/HomePage/HomePage.jsx` | None | Wiring unchanged if shell stays |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Bundle bloat from first animation library | Med | Use `LazyMotion` + `domAnimation`; ~15–18 kB gzipped |
| Badge visibility change surprises stakeholders | Low | Communicate UX improvement intent; always-visible is correct a11y |
| Alternating benefits look empty without images | Med | Use enlarged SVG icons on colored circular backgrounds as placeholders |
| CSS specificity clashes during migration | Med | New `iw-` BEM prefix; delete old rules in single cleanup pass |
| `framer-motion` v11 React 19 compat edge cases | Low | Pin to known-stable patch; test build before deploy |

## Rollback Plan

1. Revert the commit(s) that add new files and modify `IndustriesAndWhy.jsx`
2. Restore the previous `IndustriesAndWhy.css` (or the backup created in the cleanup sweep)
3. Remove new dependencies from `package.json` and reinstall
4. `HomePage.jsx` wiring stays unchanged, so no parent-level rollback needed

## Dependencies

- `framer-motion` v11+ (React 19 compatible)
- `embla-carousel-react` + `embla-carousel-autoplay`

## Success Criteria

- [ ] Marquee loops infinitely, pauses on hover, respects `prefers-reduced-motion`
- [ ] Benefits alternate left/right on tablet+; single column on mobile
- [ ] Badges are always visible; no hover-only pseudo-elements remain
- [ ] Timeline connector animates on scroll; steps reveal progressively
- [ ] All data lives in `src/data/industriesAndWhy.js`; no hardcoded arrays in JSX
- [ ] No visual regression at any breakpoint (576/768/1024/1200px)
- [ ] Build passes; bundle increase under 25 kB gzipped
