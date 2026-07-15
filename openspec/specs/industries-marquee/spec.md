# Industries Marquee Specification

## Purpose

Define the infinite horizontal auto-scrolling carousel that displays 8 industry types with icons.

## Requirements

### Requirement: Infinite Loop Playback

The marquee MUST scroll continuously in a horizontal loop using `embla-carousel-react` with `loop: true` and the Autoplay plugin. The scroll SHALL never reach a hard stop.

#### Scenario: Marquee loops seamlessly

- GIVEN the marquee is mounted with 8 industry items
- WHEN autoplay is active
- THEN items scroll left continuously and reappear from the right without a visible gap

#### Scenario: Autoplay starts on mount

- GIVEN the component mounts
- WHEN no user interaction has occurred
- THEN the marquee begins scrolling automatically within 500ms

### Requirement: Pause on Hover and Focus

The marquee MUST pause autoplay when the user hovers over it with a pointer OR focuses it via keyboard. Autoplay SHALL resume when hover/focus is removed.

#### Scenario: Hover pauses marquee

- GIVEN the marquee is scrolling
- WHEN the user's pointer enters the marquee container
- THEN autoplay pauses and the visible items freeze

#### Scenario: Focus pauses marquee

- GIVEN the marquee is scrolling
- WHEN the user tabs into the marquee container
- THEN autoplay pauses

#### Scenario: Hover exit resumes marquee

- GIVEN the marquee is paused due to hover
- WHEN the user's pointer leaves the container
- THEN autoplay resumes

### Requirement: Reduced Motion Support

When `prefers-reduced-motion: reduce` is active, the marquee SHALL NOT animate. It MUST display a single static industry card instead.

#### Scenario: Reduced motion shows static card

- GIVEN the user has `prefers-reduced-motion: reduce` enabled
- WHEN the marquee component renders
- THEN it displays one static industry card with no scrolling animation

### Requirement: Responsive Visible Item Count

The marquee MUST adjust the number of simultaneously visible items per breakpoint: 1 at <576px, 3 at 576–1023px, 5–6 at 1024px+.

#### Scenario: Mobile shows 1 item

- GIVEN viewport width < 576px
- WHEN the marquee renders
- THEN exactly 1 industry item is fully visible at a time

#### Scenario: Tablet shows 3 items

- GIVEN viewport width between 576px and 1023px
- WHEN the marquee renders
- THEN 3 industry items are simultaneously visible

#### Scenario: Desktop shows 5–6 items

- GIVEN viewport width >= 1024px
- WHEN the marquee renders
- THEN 5 to 6 industry items are simultaneously visible

### Requirement: Mobile Swipe Support

On touch devices, the marquee MUST support manual swipe navigation via Embla's built-in touch physics.

#### Scenario: User swipes on mobile

- GIVEN the marquee is rendered on a touch device
- WHEN the user swipes left or right
- THEN the carousel moves in the swipe direction and resumes autoplay afterward
