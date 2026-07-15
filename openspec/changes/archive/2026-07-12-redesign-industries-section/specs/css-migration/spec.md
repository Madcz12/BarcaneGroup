# CSS Migration Specification

## Purpose

Define the CSS namespace strategy, class naming convention, and old-CSS removal process.

## Requirements

### Requirement: iw- BEM Prefix

All new CSS classes for this section MUST use the `iw-` prefix (e.g., `.iw-marquee__track`, `.iw-benefit__icon-circle`). No new class SHALL lack this prefix.

#### Scenario: New classes use iw- prefix

- GIVEN a new CSS rule is written for any sub-component
- WHEN the class name is inspected
- THEN it starts with `iw-`

#### Scenario: No class collision with old CSS

- GIVEN old CSS uses `.industry-*`, `.reason-*`, `.material-*`, `.process-*`
- WHEN new CSS uses `iw-*` classes
- THEN no selector matches both old and new elements

### Requirement: Reusable Global Classes Preserved

The system SHALL retain `.block-title`, `.title-underline`, `.container`, and `.section-padding` from the existing CSS. These SHALL NOT be renamed or prefixed.

#### Scenario: Global classes still apply

- GIVEN a sub-component uses `.block-title`
- WHEN it renders
- THEN the styling from `src/index.css` or the shared stylesheet applies correctly

### Requirement: Old CSS Deletion

All old `.industry-*`, `.reason-*`, `.material-*`, and `.process-*` rules MUST be deleted in the same commit that introduces the new `iw-*` CSS. No patch-and-keep strategy SHALL be used.

#### Scenario: Old classes removed in single commit

- GIVEN the migration commit is applied
- WHEN the CSS file is inspected
- THEN no `.industry-*`, `.reason-*`, `.material-*`, or `.process-*` rules remain

### Requirement: CSS Token Reuse

New CSS MUST use existing tokens (`--clr-primary-pink`, `--clr-navy-deep`, `--clr-white`, `--radius-full`, `--radius-md`, `--transition-premium`, `--shadow-sm`). No new CSS custom properties SHALL be introduced unless absolutely necessary.

#### Scenario: New rules reference existing tokens

- GIVEN a new CSS rule sets a color
- WHEN the value is inspected
- THEN it uses an existing `--clr-*` token, not a hardcoded hex value
