// Signin.js
class Signin {
  constructor() {
    this.selectors = {
      // Define selectors here
    };
  }

  // Define methods to interact with the page
  visit() {
    cy.visit('/singiin');
  }

  // Add more methods as needed
}

export default new Signin();