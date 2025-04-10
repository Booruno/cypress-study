/// <reference types="cypress" />


// Cypress.Commands.add('accessRegisterPage', () => {
//     //Acessando cadastro de usuários
//     cy.visit('/')
//     cy.get('.fa-lock').click()
//     cy.get('#btnRegister')
// })

export default {
    //Acessando cadastro de usuários
    accesRegisterPage() {
        cy.visit('/')
        cy.get('.fa-lock')
            .click()
        cy.get('#btnRegister')
    }
}