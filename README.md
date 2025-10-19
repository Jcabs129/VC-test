# VC Tech Test - Playwright Automation

## Requirements
  ● Runnable through the command line
  ● One test that successfully performs a search for offers in local restaurants in London, on any
  given day, for an given number of people.
  ● One test that fails (on purpose!) and will provide useful data for debugging (think logs,
  screenshots, videos, etc.)
  ● Written in JavaScript


## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Running Tests](#running-tests)
    - [Available Scripts](#available-scripts)
    - [CLI Flags and Options](#cli-flags-and-options)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
  - [Use Options](#use-options)
  - [Debug Mode Usage](#debug-mode-usage)

## Overview

This project uses Playwright for end-to-end testing with a focus on reliability, debugging capabilities, and comprehensive reporting. The configuration is optimized for both local development and CI/CD environments.

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```
### Running Tests
4. Run your first test:
   ```bash
   # Run all tests in headless mode
   npm run test
   
   # Or run tests with visible browser
   npm run test:headed
   
   # Or run tests in debug mode
   npm run test:debug
   ```

#### Available Scripts
The project includes several npm scripts for different testing scenarios:

| Script | Command | Description |
|--------|---------|-------------|
| `test` | `npm test` | Run all tests in headless mode |
| `test:debug` | `npm run test:debug` | Run tests in debug mode with browser visible |
| `test:ui` | `npm run test:ui` | Open Playwright UI for interactive test running |
| `test:headed` | `npm run test:headed` | Run tests with browser visible (no debugging) |
| `test:report` | `npm run test:report` | Open the latest HTML test report |

#### CLI Flags and Options

Playwright provides various command-line flags for different testing scenarios:

##### Debugging and Development Flags

- **`--trace on`** - Record detailed traces for all tests
- **`--video on`** - Record videos for all tests
- **`--screenshot on`** - Take screenshots for all tests
- **`--slow-mo=1000`** - Add 1-second delay between actions (useful for debugging)

## Project Structure

```
vc-tech-test/
├──  fixtures/                    # Test fixtures and shared test data
│   └── pageObjectFixture.js       # Page Object Model fixtures
├──  node_modules/               # Node.js dependencies (auto-generated)
├──  pages/                      # Page Object Model files
│   ├── landing.page.js            # Landing page object
│   └── restaurantVoucher.page.js  # Restaurant voucher page object
├──  playwright-report/          # Generated HTML test reports
│   ├──  data/                   # Report assets (screenshots, videos)
│   └── index.html                 # Main report file
├──  test-results/               # Test execution artifacts
│   └──  [test-run-folder]/      # Individual test run results
├──  tests/                      # Test specifications
│   ├──  test-data/              # Test data and constants
│   │   └── uiText.js             # UI text constants and test data
│   ├── 01-performsSearch.spec.js # Search functionality tests
│   └── 02-emailUnicode.spec.js   # Email validation tests
├──  utils/                      # Utility functions and helpers
│   └── randomSelectionHelpers.js  # Random data generation utilities
├── package-lock.json              # Dependency lock file
├── package.json                   # Project configuration and scripts
├── playwright.config.ts           # Playwright test configuration
└── README.md                      # Project documentation
```

## Configuration

### Use Options

The `use` configuration object contains shared settings for all tests:
- **`trace: 'on-first-retry'`** - Captures detailed execution traces when tests fail and retry, useful for debugging
- **`screenshot: 'only-on-failure'`** - Takes screenshots only when tests fail, saving storage space
- **`video: 'retain-on-failure'`** - Records videos only for failed tests, helpful for visual debugging
- **`testIdAttribute: 'data-qa'`** - Uses `data-qa` attributes as test selectors for more reliable element targeting

### Debug Mode Usage

When using debug mode (`npm run test:debug`):
1. Tests will pause at breakpoints
2. Browser dev tools are available
3. You can step through test execution
4. Inspect elements and network requests
