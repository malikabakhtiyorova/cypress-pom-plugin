# Cypress Page Object Model Generator
=============================================

## Overview

- This Node.js script helps generate Page Object Model (POM) files for Cypress, including page actions, locators, test files, and data files. This tool is designed to streamline the creation of page objects and tests in your Cypress project.

## Features

- **Automated File Creation**: Generates essential files for page actions, locators, data, and tests.
- **Standardized Naming and Structure**: Ensures a consistent and readable file structure.
- **Customizable Templates**: Uses template files that can be customized for your specific needs.
- **Error Handling**: Provides meaningful error messages to guide you through the file generation process.
- **Environment Agnostic**: Can be used across different operating systems and development environments.

## Requirements

- **Node.js**: Ensure you have Node.js installed (version 14.0.0 or higher recommended).
- **Cypress**: Cypress should be installed and set up in your project.

## Installation
------------

### To install the plugin, use npm:
```bash
npm install -D cypress-pom-plugin
```

## Usage
-----

To generate a new page object with its associated files, use the following command:
```bash
cypress-pom-plugin <PageName> <PageUrl>
```

### Example Command:
```bash
cypress-pom-plugin HomePage http://example.com/home
```

This will create a set of files for HomePage at the specified URL in the appropriate directories.

### Generated Files:

- Page Actions (HomePage.page.js): Contains methods for interacting with the page.
- Page Locators (HomePage.page.locators.js): Contains selectors and locators for the page elements.
- Page Tests (HomePage.test.js): A basic test file for the page.
- Page Data (HomePage.data.json): A JSON file containing data specific to the page.

## Examples
--------

Generating a Page Object for "LoginPage":

Run the following command:

cypress-pom-plugin LoginPage http://example.com/login

This will create the following files:

- cypress/pages/actions/LoginPage.page.js
- cypress/pages/locators/LoginPage.page.locators.js
- cypress/integration/tests/LoginPage.test.js
- cypress/data/LoginPage.data.json

Directory Structure after Generation:
```bash
cypress/
  ├── pages/
  │   ├── actions/
  │   │   └── LoginPage.page.js
  │   ├── locators/
  │   │   └── LoginPage.page.locators.js
  ├── integration/
  │   └── tests/
  │       └── LoginPage.test.js
  └── data/
      └── LoginPage.data.json
```
## Contributing
------------

### We welcome contributions to improve the plugin 📈

## Happy Testing 🎉
