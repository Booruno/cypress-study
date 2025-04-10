**ANOTAÇÕES SOBRE Q.A**

## CENÁRIO DE TESTES - Escopo global do teste, por exemplo, validar o sistema de cadastro de um novo usuário no sistema.
Um cenário de testes pode ter vários casos de testes.

## CASOS DE TESTES - SERVEM PARA DEFINIR OQUE VAMOS FAZER EM CADA TESTE, DIVIDEMOS EM ALGUNS PASSOS, SENDO ELES:
*São diferentes do cenários de testes

1. OBJETIVO - Devemos descrever o objetivo do teste, oque a demanda necessita fazer.
2. PRÉ-CONDIÇÕES - Bem dizer são os requisitos para alcançarmos o objetivo.
3. PASSOS - Passos a serem executas para realizar o objetivo
4. RESULTADOS - O resultado esperado do nosso objetivo.
----

## API REST
Principais características:
- Utiliza métodos HTTP:
    1. GET - Realiza uma busca
    2. POST - Cria um novo recurso 
    3. PUT - Atualiza algo existente
    4. DELETE - Remove
- Usa JSON ou XML, geralmente JSON por ser mais atual
- Retornos 2xx são sucesso
- Retornos 4xx são erros
- Retornos 5xx são erros de servidor
----


## PLANOS DE TESTES

1. FUNCIONAIS
Objetivo é validar se o sistema atende aos requisitos funcionais.
Teste funcionalidades específicas do sistema, como login, cadastro de usuários, etc...
Como é testado: Criando casos de testes com base nos requisitos e validando resultados esperados.

2. TESTES REGRESSIVOS
Aqui o objetivo é que novas funcionalidades não quebram oque já funciona e já foi validada.
Como testamos isso? Executamos novamentos os testes funcionais após uma alteração.
Temos um exemplo, alteração feita nos campos de login, testar se o login continua funcionando normalmente.

3. TESTES INTEGRADOS
Objetivo é verificar se diferentes módulos funcionam em conjunto, por exemplo, front e back-end.
Exemplo, verificar se cadastrar um usuário no front-end, se ele foi cadastrado no banco de dados.

4. TESTES EXPLORATÓRIOS
Bem dizer são testes a fim de encontrar bugs e falhas no sistema, que não foram previstas nos casos de testes.

----

## RELATÓRIO DE TESTES
Documento que apresenta os resultados dos testes realizados em um sistema, detalhando oque foi testado, quais falhas foram encontradas e o status da qualidade geral do software.

Temos como estrutura de exemplo,

1. Resumo - Visão geral dos testes e principais resultados
2. Objetivo - Oque foi testado e porque
3. Escopo - Funcionalidades, modulos, areas cobertas pelo teste
4. Ambiente de testes - Servidor, banco de dados, plataforma, navegador
5. Tipos de testes - Funcionais, regressivos etc...
6. Resultados - Quantidade de casos executados, aprovados, falhos
7. Defeitos encontrados - Lista de bugs, severidade
8. Conclusao e recomendacao
