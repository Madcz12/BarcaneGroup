# Process Timeline Specification

## Purpose

Define the 4-step animated timeline with a connector line that reveals progressively on scroll.

## Requirements

### Requirement: Animated Connector Line

The timeline MUST display a connector line that animates via `scaleX: 0→1` on desktop (>=768px) or `scaleY: 0→1` on mobile (<768px), triggered by `whileInView` on the container.

#### Scenario: Desktop connector scales horizontally

- GIVEN viewport width >= 768px
- WHEN the timeline container enters the viewport
- THEN the connector line animates from 0 to full width (scaleX)

#### Scenario: Mobile connector scales vertically

- GIVEN viewport width < 768px
- WHEN the timeline container enters the viewport
- THEN the connector line animates from 0 to full height (scaleY)

### Requirement: Progressive Step Reveal

Each of the 4 steps MUST reveal sequentially after the connector animation begins. Steps SHALL be rendered as `<li>` elements inside an `<ol>`.

#### Scenario: Steps reveal one by one

- GIVEN the timeline container is in view
- WHEN the connector animation starts
- THEN each step appears in order (1, 2, 3, 4) with staggered timing

#### Scenario: Steps are semantic list items

- GIVEN the timeline renders
- WHEN inspecting the DOM
- THEN steps are `<li>` elements inside an `<ol>` with `aria-label="Proceso de trabajo"`

### Requirement: Reduced Motion Disables Animations

When `prefers-reduced-motion: reduce` is active, both the connector line animation and step reveal animations MUST be disabled. All content SHALL display immediately.

#### Scenario: Reduced motion shows all steps immediately

- GIVEN `prefers-reduced-motion: reduce` is enabled
- WHEN the timeline renders
- THEN all 4 steps and the connector line are fully visible with no animation

### Requirement: Responsive Orientation Switch

The timeline MUST display vertically on mobile (<768px) with the connector line on the left and steps to the right. On desktop (>=768px), it MUST display horizontally with the connector on top and steps below.

#### Scenario: Mobile vertical layout

- GIVEN viewport width < 768px
- WHEN the timeline renders
- THEN the connector runs vertically on the left, with steps stacked to its right

#### Scenario: Desktop horizontal layout

- GIVEN viewport width >= 768px
- WHEN the timeline renders
- THEN the connector runs horizontally on top, with steps arranged below it
