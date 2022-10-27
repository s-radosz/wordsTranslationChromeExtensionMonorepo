describe('Login Tests', function () {
  it('Successfull login', function () {
    cy.visit('http://127.0.0.1:8000/login')

    cy.get('#login-email-input').type(Cypress.env('user_name'), { log: false })
    cy.get('#login-password-input').type(Cypress.env('user_password'), { log: false })
    cy.get('#login-submit').click()

    cy.url().should('contain', '/panel')
  })
})
