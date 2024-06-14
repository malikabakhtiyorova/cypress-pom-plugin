// SignIn.js
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