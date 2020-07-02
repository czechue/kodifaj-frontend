/// <reference types="cypress" />

context('Header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Header', () => {
    // https://on.cypress.io/type
    cy.findByText(/Prosta Karuzela - test1 5/).click();
  });
});
