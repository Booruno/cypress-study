/// <reference types="cypress" />
import { faker, he } from '@faker-js/faker'
import homePage from '../support/pages/home_page'
import registerPage from '../support/pages/register_page'

const user_name = faker.person.fullName()
const user_email = faker.internet.email({ provider: 'gmail.com' })  // Gera um e-mail aleatório com o domínio gmail.com
const user_password = faker.internet.password({ length: 8 }) // Gera uma senha aleatória com 8 caracteres

const user_data = require('../fixtures/desafio.json')


const screens = require('../fixtures/screens.json') // Importando o arquivo JSON com os tamanhos de tela

screens.forEach(({device, width, height}) => { //Função para iterar entre os elementos do array
  describe ('Cadastro de Usuários', () => {

    beforeEach(() => {
      if(device != 'desktop') {
        cy.viewport(width, height) // Aqui podemos definir o tamanho da tela
      }
      homePage.accesRegisterPage()
    })

    it('Cadastro de usuários com sucesso', () => {
      registerPage.fillName(user_name)
      registerPage.fillEmail(user_email)
      registerPage.fillPassword(user_password)
      registerPage.saveRegister()
      registerPage.checkSuccessful()

    })

    it('Validar campo nome vazio', () => {
      registerPage.fillEmail('booruno@gmail.com')
      registerPage.fillPassword('12345678')
      registerPage.saveRegister()
      registerPage.checkMessage('O campo nome deve ser prenchido', 'Campo nome vazio validado com sucesso')
    })

    it('Validar campo email vazio', () => {
      registerPage.fillName(user_data.user_name)
      registerPage.fillPassword(user_data.user_password)
      registerPage.saveRegister()
      registerPage.checkMessage('O campo e-mail deve ser prenchido', 'Campo e-mail vazio validado com sucesso')
    })

    it('Validar campo senha inválida', () => {
      registerPage.fillName(user_data.user_name)
      registerPage.fillEmail(user_data.user_email)
      registerPage.saveRegister()
      registerPage.checkMessage('O campo senha deve ter pelo menos 6 dígitos', 'Campo senha inválida validado com sucesso')
    })
  })
});