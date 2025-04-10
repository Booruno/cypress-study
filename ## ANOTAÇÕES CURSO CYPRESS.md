## ANOTAÇÕES CURSO CYPRESS

## PACKAGE.JSON
Quando criamos um projeto JS, primeira coisa se fazer é criar o package.json (npm init -y)

## NPM INSTALL CYPRESS
Vai instalar o cypress, deve criar package-lock.json, node_modules

## NPX CYPRESS INSTALL --force
Força baixar e instalar

## VERIFICAR SE FOR INSTALADO
NPX CYPRESS VERIFY

## ABRIR CYPRESS
NPX CYPRESS OPEN

## COPIAR SELETOR
INSPECIONAR ELEMENTO, ELEMENTO, COPY > COPY SELECTOR

##BASE URL
Devemos antes de fazer um testes, ir no cypress.config.js e definir a nossa base URL

## Como acessar URL
cy.visit()

## FIXTURES
Criamos aqui json para usarmos em nossos testes
Para utilizarmos, devemos fazer um require dentro do nosso teste
Criando uma const e requirindo nosso arquivo
exemplo const user_data = require('../fixtures/desafio.json')

## FAKER JS - BIBLIOTECA JS PARA GERAÇÃO DE DADOS
fakerjs.dev         
Como usar - https://fakerjs.dev/guide/usage.html

## HOOKS
Before e BeforeEach - Executam comandas antes de rodar os testes, before sera antes de tudo, before each antes de cada um

## PAGE OBJETCS
A ideia principal é organizar o código de testes separando a lógica da interface da lógica dos testes, tornando os testes mais limpos, reutilizáveis e fáceis de manter.
1 - MANUTENÇÃO
2 - ORGANIZAÇÃO
3 - RESPONSABILIDADES   
4 - CURVA DE APRENDIZADO
Nele podemos utilizar os commands, ou criar funções JS
Podemos separar em elementos e ações
