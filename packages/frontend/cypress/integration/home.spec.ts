context('Header', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', '**/api/tasks/*', 'fixture/taskResponse.json').as('taskResponse');
  });

  it('Header', () => {
    cy.visit('http://localhost:3000/');
    cy.findByText(/Prosta Karuzela - test1 5/).click();
    cy.wait(1000);
    cy.get('header').findByText('Kodifaj').click();
    cy.findByText(/Prosta Karuzela - test1 5/).click();

    cy.wait('@taskResponse').its('url').should('include', '/5e14e877fa42402079e38e44');
  });
});
