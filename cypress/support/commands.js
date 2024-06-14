import LoginPage from '../pageObjects/LoginPage';

// Command to perform login
Cypress.Commands.add('login', (username, password) => {
  LoginPage.visit();
  LoginPage.login(username, password);
});
