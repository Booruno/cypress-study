/// <reference types="cypress" />

describe ('Assets', () => {
    it('Verificar se está visivel', () => {
        cy.visit('/')
          .get(".header-logo")
        
          cy.get('.fa-user').click()
  
          cy.get('.account_form > h3')
            .should('be.visible')
            .should('contain', 'Login')

          cy.get('.account_form > h3')
            .then((element) => {
              console.log(element.text())
              expect(element.text()).eq('Login')
              expect(element).to.be.visible
            }
          )
    })
})