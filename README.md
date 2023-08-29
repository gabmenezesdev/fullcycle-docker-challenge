# Desafio Docker Full Cycle

## Descrição do Projeto
<p align="center">Projeto criado com o objetivo de concluir o desafio proposto pelo curso dev full cycle 3.0</p>

###Desafio 1

criar uma imagem no docker usando GO lang e ao rodar:
docker run docker-name/fullcycle
deve ser apresentado o seguinte resultado: Full Cycle Rocks!!
Obs:
A imagem deve ter no máximo 2mb

###Desafio 2

O usuário acessa o nginx, o mesmo fará uma chamada para a aplicação aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

# Como usar a imagem gerada?
    Imagem gerada no desafio 1:
        docker run galante/fullcycle

    Código do desafio 2 está dentro da pasta desafio_2.