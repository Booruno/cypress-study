/// <reference types="cypress" />

describe ('Interações', () => {
    it('Digitar em um campo', () => {
        cy.visit('/')
          .get(".header-logo")
        
        cy.get(".form-control")
            .type("1brunoocunha@gmail.com")
    })

    it('Click', () => {
        cy.visit('/')
          .get(".header-logo")
          
        // cy.get(".fa-user").click()

        //clique por cordenadas
        // cy.get(".fa-user").click(100,100, {force: true})
        cy.get(".form-control")
        .type("1brunoocunha@gmail.com{enter}")  
    })

    it('Select', () => {
        cy.visit('/')
          .get(".header-logo")
        
        cy.get(".footer_one_widget")
        .contains("Checkout View Two").click()

        cy.get("#country")
        .select("Bahrain")
    })

    it.only('Check', () => {
        cy.visit('/')
          .get(".header-logo")
        
        cy.get(".footer_one_widget")
        .contains("Checkout View One").click()

        cy.get("#materialUnchecked")
        .check()
        .uncheck()
    })
})