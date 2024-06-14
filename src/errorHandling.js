export const handleErrors = (error) => {
  // Custom error handling logic
  console.error('Error:', error.message);
  // Integration with reporting tools
};

// Example usage in commands or tests
Cypress.on('uncaught:exception', handleErrors);
