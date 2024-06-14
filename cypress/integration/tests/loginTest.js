describe('Login Test', () => {
  it('should log in successfully', () => {
    cy.login('testuser', 'password123');
    cy.get('#greeting').should('contain', 'Welcome, testuser');
  });
});
