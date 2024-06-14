// LoginPage.js
class LoginPage {
  constructor() {
    this.selectors = {
      // Define selectors here
    };
  }

  // Define methods to interact with the page
  visit() {
    cy.visit('//login');
  }

  // Add more methods as needed
}

export default new LoginPage();