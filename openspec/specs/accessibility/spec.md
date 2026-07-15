# Accessibility Specification

## Purpose

Define screen reader support, keyboard navigation, and ARIA requirements for all sub-components.

## Requirements

### Requirement: Marquee ARIA Roles

The marquee MUST have `aria-roledescription="carousel"` and `aria-label="Industrias que servimos"`. Each industry item within the carousel SHALL be a list item in an accessible list.

#### Scenario: Screen reader announces carousel

- GIVEN a screen reader is active
- WHEN focus reaches the marquee
- THEN it announces "carousel" and "Industrias que servimos"

### Requirement: Badge DOM Visibility

Material badges MUST be real DOM elements (not `::after` pseudo-elements) so they are announced by screen readers and visible to touch/keyboard users.

#### Scenario: Badge is in DOM and announced

- GIVEN a material card with a badge renders
- WHEN a screen reader reads the card
- THEN the badge text is announced as part of the card content

#### Scenario: Badge visible without hover

- GIVEN a material card with a badge
- WHEN no pointer interaction occurs
- THEN the badge is visually present in the card

### Requirement: SVG Icons aria-hidden

All decorative SVG icons MUST have `aria-hidden="true"` so screen readers skip them. Icons SHALL NOT be announced as content.

#### Scenario: Decorative icon skipped by screen reader

- GIVEN an SVG icon renders in any sub-component
- WHEN a screen reader traverses the DOM
- THEN the SVG is skipped due to `aria-hidden="true"`

### Requirement: Keyboard Navigation

All interactive elements (marquee controls, if any) MUST be reachable via Tab key. The document flow SHALL NOT create tab traps.

#### Scenario: Tab navigates through section

- GIVEN the user navigates with Tab key
- WHEN focus enters the IndustriesAndWhy section
- THEN focus moves through all interactive elements in document order and exits normally

### Requirement: Timeline Semantic Structure

The process timeline MUST use an `<ol>` with `aria-label="Proceso de trabajo"` and each step as an `<li>`.

#### Scenario: Screen reader announces ordered list

- GIVEN the timeline renders
- WHEN a screen reader reaches it
- THEN it announces "Proceso de trabajo" as an ordered list with 4 items
