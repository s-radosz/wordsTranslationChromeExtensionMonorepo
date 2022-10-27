describe('Add New Word Translation Tests', function () {
  it('Successful Added And Deleted', function () {
    cy.visit('http://127.0.0.1:8000/login')

    cy.get('#login-email-input').type(Cypress.env('user_name'), { log: false })
    cy.get('#login-password-input').type(Cypress.env('user_password'), { log: false })
    cy.get('#login-submit').click()

    cy.url().should('contain', '/panel')

    cy.get('#custom-new-word-input').type('dog')
    cy.get('#custom-new-word-submit').click()

    cy.get('#words-table').contains('td', 'dog').should('be.visible')

    cy.get('#delete-row-dog').click()
    cy.get('#words-table').contains('td', 'dog').should('not.be.visible')
  })
})
