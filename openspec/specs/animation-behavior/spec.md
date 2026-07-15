# Animation Behavior Specification

## Purpose

Define cross-cutting animation behavior for framer-motion integration, scroll triggers, and reduced motion support.

## Requirements

### Requirement: LazyMotion Wrapper

All motion components MUST be wrapped in `<LazyMotion features={domAnimation}>` at the `IndustriesAndWhy` shell level. No motion component SHALL render outside this wrapper.

#### Scenario: Shell provides LazyMotion context

- GIVEN the `IndustriesAndWhy` shell renders
- WHEN any child motion component mounts
- THEN it is within the `LazyMotion` provider context

#### Scenario: Motion components load asynchronously

- GIVEN `LazyMotion` uses `loadAsync()` pattern
- WHEN the shell first renders
- THEN motion features load without blocking initial paint

### Requirement: Reduced Motion Gate

The system MUST gate all `motion.*` components behind a `useReducedMotion()` check at the shell level. When reduced motion is preferred, animations SHALL be skipped and content displayed immediately.

#### Scenario: Reduced motion disables all animations

- GIVEN `useReducedMotion()` returns `true`
- WHEN any sub-component renders
- THEN motion components render as static elements with no animation

### Requirement: No Layout Shift

Animations MUST NOT cause Cumulative Layout Shift (CLS). Elements SHALL reserve their final layout space before animation begins.

#### Scenario: Fade-in does not shift surrounding content

- GIVEN a benefit row is animating from `opacity: 0`
- WHEN the animation runs
- THEN surrounding content does not move or reflow

### Requirement: Viewport Trigger Consistency

All `whileInView` triggers MUST use `viewport={{ once: true }}` so animations fire only on first entry. The `amount` threshold SHALL vary per component as specified in their individual specs.

#### Scenario: Animation fires once per page load

- GIVEN a component has animated into view
- WHEN the user scrolls away and back
- THEN the animation does NOT re-trigger
