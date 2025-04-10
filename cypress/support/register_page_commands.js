//Elementos
const registerButton = '#btnRegister'
// const userName = '#user'
// const userEmail = '#email'
// const userPassword = '#password'
const messageName = '#errorMessageFirstName'
//Aqui podemos separar em elementos de fato
const elements = {
  buttons: {},
  fields: {
    user: '#user',
    email: '#email',
    password: '#password'
  },
  messages: {}
}

//Ações/métodos/funções
Cypress.Commands.add('saveRegister', () => {
    cy.get(registerButton).click()
})

Cypress.Commands.add('fillName', (user_name) => {
    cy.get(elements.fields.user)
      .type(user_name) 
      .should('have.value', user_name)
      .then((element) => {
        console.log('Campo nome preenchido com sucesso com o nome: ' + element.val())
      })
})

Cypress.Commands.add('fillEmail', (user_email) => {
    cy.get(elements.fields.email)
    .type(user_email) // aqui você pode usar o valor do arquivo JSON
      .should('have.value', user_email)
      .then((element) => {
        console.log('Campo e-mail preenchido com sucesso com o e-mail: ' + element.val())
      })
})

Cypress.Commands.add('fillPassword', (user_password) => {
    cy.get(elements.fields.password)
      .type(user_password) // aqui você pode usar o valor do arquivo JSON 
      .should('have.value', user_password)
      .then((element) => {
        console.log('Campo senha preenchido com sucesso com a senha: ' + element.val())
      })
})

Cypress.Commands.add('checkSuccessful', () => {
    cy.get('#swal2-title').should('contain', 'Cadastro realizado!')
    cy.get('button.swal2-confirm.swal2-styled').click()
})

Cypress.Commands.add('checkMessage', (message, log) => {
    cy.get(messageName)
      .should('be.visible')
      .should('contain', message)
      .then((element) => {
        console.log(element.text())
        console.log(log)
      })
})