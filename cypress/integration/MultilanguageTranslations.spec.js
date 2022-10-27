describe('Multilanguage Translations Tests', function () {
  it('Successful Added And Deleted Multilanguage Word Translation', function () {
    // 1. sign in
    // 2. visit /settings
    // 3. choose translate from pl
    // 4. visit /panel
    // 5. add word 'chess'
    // 6. check if chess is visible on the list
    // 7. visit /settings
    // 8. choose translate from de
    // 9. visit /panel
    // 10. add word 'chess'
    // 11. check if chess is visible on the list
    // 12. delete chess from the list
    // 13. visit /settings
    // 14. choose translate from pl
    // 15. visit /panel
    // 16. check if chess is visible on the list
    // 17. delete chess from the list

    //point 1
    cy.visit('http://127.0.0.1:8000/login')

    cy.get('#login-email-input').type(Cypress.env('user_name'), { log: false })
    cy.get('#login-password-input').type(Cypress.env('user_password'), { log: false })
    cy.get('#login-submit').click()

    cy.url().should('contain', '/panel')

    //point 2
    cy.get('.menu-link__settings').click()
    cy.url().should('contain', '/settings')

    //point 3
    cy.get('.settings__select-country > .MuiFormControl-root')
      .click()
      .get('.MuiPaper-root > ul > li[data-value="pl"]')
      .click()

    //point 4
    cy.get('.menu-link__panel').click()
    cy.url().should('contain', '/panel')

    //point 5
    cy.get('#custom-new-word-input').type('chess')
    cy.get('#custom-new-word-submit').click()

    //point 6
    cy.get('#words-table').contains('td', 'chess').should('be.visible')

    //point 7
    cy.get('.menu-link__settings').click()
    cy.url().should('contain', '/settings')

    //point 8
    cy.get('.settings__select-country > .MuiFormControl-root')
      .click()
      .get('.MuiPaper-root > ul > li[data-value="de"]')
      .click()

    //point 9
    cy.get('.menu-link__panel').click()
    cy.url().should('contain', '/panel')

    //point 10
    cy.get('#custom-new-word-input').type('chess')
    cy.get('#custom-new-word-submit').click()

    //point 11
    cy.get('#words-table').contains('td', 'chess').should('be.visible')

    //point 12
    cy.get('#delete-row-chess').click()
    cy.get('#words-table').contains('td', 'chess').should('not.be.visible')

    //point 13
    cy.get('.menu-link__settings').click()
    cy.url().should('contain', '/settings')

    //point 14
    cy.get('.settings__select-country > .MuiFormControl-root')
      .click()
      .get('.MuiPaper-root > ul > li[data-value="pl"]')
      .click()

    //point 15
    cy.get('.menu-link__panel').click()
    cy.url().should('contain', '/panel')

    //point 16
    cy.get('#words-table').contains('td', 'chess').should('be.visible')

    //point 17
    cy.get('#delete-row-chess').click()
    cy.get('#words-table').contains('td', 'chess').should('not.be.visible')
  })
})
