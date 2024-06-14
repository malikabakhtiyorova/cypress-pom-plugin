# Cypress POM Plugin

This plugin provides a Page Object Model (POM) structure for Cypress to improve test maintainability and readability.

## Features
- Easy generation of page objects
- Abstraction for selectors and actions
- Custom commands integration

## Installation
```bash
npm install cypress-pom-plugin
```

### How to use *{example}*
```bash
cypress-pom-plugin SignIn /signin
```

```js

// cypress/pageObjects/SignIn.js  *{if no cypress/pageObjects folder, package will auto generate}*

class SignIn {
  constructor() {
    this.selectors = {
      // Define selectors here
    };
  }

  // Define methods to interact with the page
  visit() {
    cy.visit('/signin');
  }

  // Add more methods as needed
}

export default new SignIn();
```