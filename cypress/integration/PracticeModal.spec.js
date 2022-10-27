describe('Practice Modal Tests', function () {
  it('Successful Show And Use Practice Modal', function () {
    cy.visit('http://127.0.0.1:8000/login')

    cy.get('#login-email-input').type(Cypress.env('user_name'), { log: false })
    cy.get('#login-password-input').type(Cypress.env('user_password'), { log: false })
    cy.get('#login-submit').click()

    cy.url().should('contain', '/panel')

    cy.get('#custom-new-word-input').type('dog')
    cy.get('#custom-new-word-submit').click()

    cy.get('#words-table').contains('td', 'dog').should('be.visible')

    cy.get('#start-practice-button').click()
    cy.get('.select-word__container').should('be.visible')

    cy.wait(1000)
    cy.get('.close-icon__container > img').click()
    cy.wait(1000)
    cy.get('.select-word__container').should('not.be.visible')

    cy.get('#delete-row-dog').click()
    cy.get('#words-table').contains('td', 'dog').should('not.be.visible')
  })
})
