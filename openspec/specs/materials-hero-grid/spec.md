# Materials Hero Grid Specification

## Purpose

Define the hierarchical grid layout that promotes badged materials as hero cards and displays remaining materials in a compact grid.

## Requirements

### Requirement: Hero Cards for Badged Materials

Materials with a `badge` value MUST render as larger hero cards with the badge displayed as a visible DOM element (not a pseudo-element). The badge SHALL always be visible, not hover-dependent.

#### Scenario: Badged material renders hero card with visible badge

- GIVEN a material item has `badge: "¡El más pedido!"`
- WHEN the grid renders
- THEN the material appears as a hero-sized card with a visible badge element in the DOM

#### Scenario: Badge is always visible without hover

- GIVEN a hero card is rendered
- WHEN no pointer hover or interaction occurs
- THEN the badge element remains visible

### Requirement: Compact Grid for Non-Badged Materials

Materials without a `badge` value MUST render in a compact sub-grid with smaller card sizing. No badge element SHALL appear for these items.

#### Scenario: Non-badged material renders compact card

- GIVEN a material item has `badge: undefined`
- WHEN the grid renders
- THEN the material appears in the compact grid with no badge element

### Requirement: Responsive Grid Layout

The grid MUST adapt per breakpoint: 1 column on mobile (<576px), hero cards stack vertically; 2 columns on tablet (576–1023px); 3 columns on desktop (1024px+) with hero cards spanning 2 columns.

#### Scenario: Mobile stacks all cards vertically

- GIVEN viewport width < 576px
- WHEN the grid renders
- THEN all cards (hero and compact) appear in a single vertical column

#### Scenario: Desktop hero spans 2 columns

- GIVEN viewport width >= 1024px
- WHEN a hero card renders
- THEN it spans 2 columns in the 3-column grid

### Requirement: Scroll-Triggered Card Animation

Each card MUST animate with `opacity: 0→1` and `translateY: 20px→0` on scroll entry, using `whileInView` with `viewport={{ once: true, amount: 0.15 }}`.

#### Scenario: Cards animate on scroll

- GIVEN cards are below the viewport
- WHEN the user scrolls until 15% of the grid is visible
- THEN cards fade in and slide up with staggered timing
