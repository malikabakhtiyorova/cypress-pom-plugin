export const clickElement = (selector) => {
  cy.get(selector).click();
};

export const typeText = (selector, text) => {
  cy.get(selector).type(text);
};
