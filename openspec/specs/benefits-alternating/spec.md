# Benefits Alternating Specification

## Purpose

Define the editorial two-column layout that alternates visual/text sides for 6 benefits, with scroll-triggered entrance animations.

## Requirements

### Requirement: Alternating Visual/Text Pattern

The system SHALL render each benefit as a two-column row where the visual side (enlarged SVG icon on colored background) and text side (title + description) alternate positions: odd rows have visual-left/text-right, even rows have text-left/visual-right.

#### Scenario: First benefit has visual on left

- GIVEN the benefits list is rendered on a viewport >= 768px
- WHEN the first benefit (index 0) renders
- THEN the visual element appears in the left column and text in the right

#### Scenario: Second benefit has visual on right

- GIVEN the benefits list is rendered on a viewport >= 768px
- WHEN the second benefit (index 1) renders
- THEN the text appears in the left column and visual in the right

### Requirement: Scroll-Triggered Entrance Animation

Each benefit row MUST animate with `opacity: 0→1` and `translateY: 20px→0` when scrolled into view. The animation SHALL use `whileInView` with `viewport={{ once: true, amount: 0.2 }}` and stagger children by 0.1s.

#### Scenario: Benefit row animates on scroll

- GIVEN a benefit row is below the viewport
- WHEN the user scrolls until 20% of the row is visible
- THEN the row fades in and slides up over the configured duration

#### Scenario: Animation triggers only once

- GIVEN a benefit row has already animated into view
- WHEN the user scrolls past it and back
- THEN the row does NOT re-animate; it remains fully visible

### Requirement: Mobile Single-Column Stacking

On viewports < 768px, each benefit row MUST stack vertically with the visual element above the text. The alternating left/right pattern SHALL NOT apply.

#### Scenario: Mobile stacks visual above text

- GIVEN viewport width < 768px
- WHEN any benefit row renders
- THEN the visual element appears above the text in a single column

### Requirement: SVG Icon as Visual Placeholder

Each benefit's visual side MUST display an enlarged SVG icon centered within a colored circular background. The icon SHALL be sourced from the `icons.jsx` lookup map.

#### Scenario: Benefit displays icon on colored circle

- GIVEN a benefit row renders
- WHEN the visual side is inspected
- THEN it contains an SVG icon centered within a circular colored background element
