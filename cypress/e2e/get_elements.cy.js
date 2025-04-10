const baseURL = "http://localhost:3000";

//Por padrão, precisamos do describe para rodar os testes
// Aqui temos um pamaetro que é o nome do teste, no caso "Login"
// O describe é uma função que recebe dois parâmetros, o primeiro é o nome do teste e o segundo é uma função que contém os testes que serão executados
// Estamos usando uma função anonima para passar os testes que serão, vulgo arrow function
describe("Get Elements", () => {
  // O it é uma função que recebe dois parâmetros, o primeiro é uma descrição do teste e o segundo é uma função que contém o teste que será executado
  // Aqui temos um teste que é o "Login com sucesso"
  it("Obter elementos", () => {

    //Vista o baseUrl + /login
    //cy.visit é uma função que recebe um parâmetro que é o caminho que será acessado
    cy.visit("/")
    //selecionar o elemento"
      .get(".header-logo");
 
      cy.get("#top_header")
      //Contains - serve para encontrar elementos por texto
      //Geralmente diminuimos o escopo do elemento e depois fazemos a busca
      .contains("Login");

      cy.get("#top_header")
      //find - serve para encontrar elementos dentro de um elemento
      .find(".top_header_right")
      .contains("Login");

    //as () - um alias para o elemento
    //posso usar para dar um apelido para um bloco de codigo grande
    //depois é só dar um get no apelido
    cy.get("#top_header")
      .find(".top_header_right")
      .contains("Login")
      .as("loginButton");

    //cy.get("@loginButton") - aqui estamos pegando o elemento que criamos o alias
    //cy.get("@loginButton").click() - aqui estamos clicando no elemento que criamos o alias   
    cy.get("@loginButton").click();

  });
});
