// {{PageName}}.js

import {{PageName}}Locators from '../locators/{{PageName}}.page.locators'
import * as {{PageName}}Data from '../../data/{{PageName}}.data.json'

class {{PageName}} {
  pageLocators = new {{PageName}}Locators()

  constructor() {
  }

  // Define methods to interact with the page
  visit() {
    cy.visit(this.pageLocators.path);
  }

  // Add more methods as needed
}

export default new {{PageName}}();