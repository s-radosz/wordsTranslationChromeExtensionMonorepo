describe('Login Tests', function () {
  it('Successfull login', function () {
    cy.visit('http://127.0.0.1:8000/login')

    cy.get('#login-email-input').type(Cypress.env('user_name'))
    cy.get('#login-password-input').type(Cypress.env('user_password'))
    cy.get('#login-submit').click()

    cy.url().should('contain', '/panel')
    cy.get('#logout-btn').should('be.visible')
  })
})
