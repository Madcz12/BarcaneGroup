# Data Extraction Specification

## Purpose

Define how section data is separated from component JSX, establishing a clean import contract and data shape for all four sub-sections.

## Requirements

### Requirement: Data File Structure

The system SHALL provide a single plain JavaScript module at `src/data/industriesAndWhy.js` exporting four named arrays: `industries`, `reasons`, `materials`, and `steps`. No JSX or React elements SHALL appear in this file.

#### Scenario: Module exports all four arrays

- GIVEN `src/data/industriesAndWhy.js` exists
- WHEN a component imports `{ industries, reasons, materials, steps }` from it
- THEN each import resolves to a non-empty array of plain objects

#### Scenario: No JSX in data file

- GIVEN the data file is a `.js` module (not `.jsx`)
- WHEN the file is parsed by a non-React tool (e.g., Node, test runner)
- THEN it executes without errors and returns plain data objects

### Requirement: Industry Data Shape

Each industry entry MUST have a `name` field (string). The system SHALL export exactly 8 industry entries.

#### Scenario: Industry array has 8 items with names

- GIVEN the `industries` array is imported
- WHEN iterating over it
- THEN each item has a `name` string and the array length is 8

### Requirement: Reason Data Shape

Each benefit entry MUST have `title` (string) and `desc` (string). The system SHALL export exactly 6 benefit entries.

#### Scenario: Reason array has 6 items with title and description

- GIVEN the `reasons` array is imported
- WHEN iterating over it
- THEN each item has `title` and `desc` strings and the array length is 6

### Requirement: Material Data Shape

Each material entry MUST have `name` (string) and MAY have `badge` (string). The system SHALL export exactly 9 material entries. Items without a badge have `badge` as `undefined`.

#### Scenario: Materials with and without badges

- GIVEN the `materials` array is imported
- WHEN filtering items where `badge` is defined
- THEN at least 2 items have a badge string; remaining items have `badge` as `undefined`

#### Scenario: Material without badge renders without badge UI

- GIVEN a material item with `badge: undefined`
- WHEN the component renders it
- THEN no badge element appears in the DOM for that item

### Requirement: Step Data Shape

Each process step MUST have `number` (string), `title` (string), and `desc` (string). The system SHALL export exactly 4 steps.

#### Scenario: Steps array has 4 items with required fields

- GIVEN the `steps` array is imported
- WHEN iterating over it
- THEN each item has `number`, `title`, and `desc` strings and the array length is 4

### Requirement: Icon Lookup Separation

SVG icon components MUST NOT be in the data file. The system SHALL provide an icon lookup map in `src/components/IndustriesAndWhy/icons.jsx` keyed by item name or number.

#### Scenario: Icon map returns SVG for known key

- GIVEN the icons module is imported
- WHEN accessing a key matching an industry name
- THEN it returns a valid React SVG element

#### Scenario: Unknown key returns undefined or fallback

- GIVEN the icons module is imported
- WHEN accessing a key not in the map
- THEN it returns `undefined` or a fallback, without throwing
