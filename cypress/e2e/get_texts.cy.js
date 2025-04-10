describe ('Get Texts', () => {
    it('Obter textos de um elemento', () => {
        cy.visit('/')
          .get(".header-logo")
        
        cy.get(".top_header_left > p")
        //then executa uma função com o elemento encontrado
            .then((element) => {
                //.text pega o texto do elemento
                //o texto é retornado como uma string
                console.log(element.text())
                element.hide()
            })
    })
})