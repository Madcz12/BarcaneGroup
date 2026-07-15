# Tasks: Redesign IndustriesAndWhy Section

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~2,150 (1,190 added + 960 deleted) |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 → PR 2 → PR 3 → PR 4 |
| Delivery strategy | ask-always |
| Chain strategy | feature-branch-chain |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: feature-branch-chain
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Data + icons + deps | PR 1 | base: feature/redesign-industries-section; ~363 added |
| 2 | Marquee + Benefits components | PR 2 | base: PR 1 branch; ~310 added |
| 3 | Materials + Process components | PR 3 | base: PR 2 branch; ~330 added |
| 4 | Shell rewrite + CSS migration | PR 4 | base: PR 3 branch; ~1,140 changed (mostly deletions); merge feature → main |

## Phase 1: Foundation (Data + Icons + Deps)

- [x] 1.1 Create `src/data/industriesAndWhy.js` — export `industries`, `reasons`, `materials`, `steps`. No JSX, plain objects only.
- [x] 1.2 Create `src/components/IndustriesAndWhy/icons.jsx` — SVG icon lookup map keyed by name/number. `aria-hidden="true"` on all SVGs.
- [x] 1.3 Edit `package.json` — add `framer-motion`, `embla-carousel-react`, `embla-carousel-autoplay`.
- [x] 1.4 Run `npm install` — verify no peer conflicts on React 19.

## Phase 2: Marquee + Benefits Components

- [x] 2.1 Create `IndustriesMarquee.jsx` — Embla carousel, `loop: true`, Autoplay plugin, pause on hover/focus, mobile swipe, reduced-motion fallback.
- [x] 2.2 Create `IndustriesMarquee.css` — `iw-` BEM prefix, responsive visible items (1/3/5-6 per breakpoint), token reuse.
- [x] 2.3 Create `BenefitsAlternating.jsx` — alternating two-column rows, framer-motion `whileInView` stagger children, mobile single-column stack.
- [x] 2.4 Create `BenefitsAlternating.css` — `iw-` BEM prefix, alternating grid, responsive collapse at 768px.

## Phase 3: Materials + Process Components

- [x] 3.1 Create `MaterialsHeroGrid.jsx` — hero cards for badged materials (always-visible DOM badges), compact grid for rest, `whileInView` card animation.
- [x] 3.2 Create `MaterialsHeroGrid.css` — `iw-` BEM prefix, hero/compact grid variants, responsive columns (1/2/3), advisor-banner styles.
- [x] 3.3 Create `ProcessTimeline.jsx` — `<ol>` + `<li>` steps, animated connector line (scaleX desktop / scaleY mobile), sequential step reveal.
- [x] 3.4 Create `ProcessTimeline.css` — `iw-` BEM prefix, connector animation keyframes, horizontal/vertical orientation switch at 768px.

## Phase 4: Shell Rewrite + CSS Migration

- [x] 4.1 Rewrite `IndustriesAndWhy.jsx` — shell imports data + 4 sub-components, `<LazyMotion features={domAnimation}>` wrapper, `useReducedMotion()` gate.
- [x] 4.2 Replace `IndustriesAndWhy.css` — shell/section styles only (`iw-` prefix); delete ALL `.industry-*`, `.reason-*`, `.material-*`, `.process-*` rules in same commit.
- [x] 4.3 Add advisor banner component inside `MaterialsHeroGrid` — info/alert box with icon and advisory text.

## Phase 5: Verification

- [x] 5.1 Run `vite build` — must complete with zero errors/warnings.
- [x] 5.2 Visual check — each sub-component renders at xs/sm/md/lg/xl breakpoints; reduced-motion disables animations.
- [x] 5.3 Bundle check — only `LazyMotion` + `domAnimation` imported; total gzipped <= 25 kB.
- [x] 5.4 A11y check — marquee ARIA roles, timeline `<ol aria-label>`, badges as real DOM, SVGs skip via `aria-hidden`.