# 🏋️‍♀️ ACADEMIA API RESILIA 


<h3 align="center">
Projeto Final do Módulo 04 - Resilia Edu.
</h3>

<p align="center">
  <a href="#computer-sobre-o-projeto">Sobre o projeto</a> | <a href="#rocket-tecnologias">Tecnologias</a> | <a href="#books-guia-de-instalação-e-execução">Guia de instalação e execução</a> | <a href="#rocket-dependências">Dependências</a> | <a href="#rocket-Rotas-da-API">Rotas da API</a> | <a href="#rocket-colaboradores">Colaboradores</a> 
</p>

## :computer: Sobre o projeto

Desenvolvimento de uma API produto mínimo viável de um aplicativo. Construídas para fins didáticos, como fechamento do Módulo 4 da Resilia Educação. Para que esse projeto Back-End fosse construído utilizamos os conceitos de organização MVC, assim como o banco de dados SQLite. Buscando além dos conhecimentos adquiridos em aula. 

## :rocket: Tecnologias

   * `SQLite3`
   * `Node.Js`
   * `Express`
   * `Nodemon`
   
## :books: Guia de instalação e execução

### Pré-requisitos

   * [Git](https://git-scm.com/)
   * [Node.js](https://nodejs.org/en/)
   * [vscode](https://code.visualstudio.com/)
   * [Insomnia](https://insomnia.rest/)

### Como executar

O ambiente de desenvolvimento da API teve como suporte as ferramentas: VSCode, NodeJS e NPM. Para executar o projeto dentro com esses suportes, baixe e instale o NodeJS, o VSCode e verifique se com a instalaçao dessa ferramenta o NPM já esteja executando através do comando ```npm --version``` . 
A resposta deve trazer a versão instalada do NPM.
Feito isso, deve seguir os seguintes passos:

   * Baixe este repositório ou clone ```https://github.com/k-js/crud-api.git```
   * Execute ```npm install``` para instalar as dependências de todos pacotes
   * após a instalação das dependências, rode a API com o comando ```npm start``` 

Você pode realizar requisições REST através do Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Gympoint&uri=https%3A%2F%2Fgithub.com%2k-js20%2Fgympoint%2Fblob%2Ffeature%2Fmonorepo%2F.github%2FInsomnia_2020-08-07.json)

## :rocket: Dependências

```js
 "dependencies": {
    "express": "^4.18.1",
    "nodemon": "^2.0.16",
    "sqlite3": "^5.0.8"
  }
```

## :rocket: Rotas da API

| Método | Rota | Funcionalidade |
| ------ | ----- | ----------- |
| **GET** | `http://localhost:3000/clientes` | Gets em todos|
| **GET** | `http://localhost:3000/clientes/{id}` | Gets em clientes por {id} |
| **POST** | `http://localhost:3000/clientes` | Entrada de novo cliente |
| **PUT** | `http://localhost:3000/clientes/{id}` | Alterações por {id} |
| **DELETE** | `http://localhost:3000/clientes/{id}` | Deleção de cliente {id} |

## :rocket: Colaboradores

<table align="center">
  <tr>
<td align="center"><a href="https://github.com/k-js"><img src="https://github.com/account" width="100px;" alt=""/><br /><sub><b>k-js</b></sub></a><br /><a href="contribuiçes" title="Documentation">📖</a></td><td align="center"><a href="https://github.com/alebulka"><img src="https://avatars.githubusercontent.com/u/100357451?v=4" width="100px;" alt=""/><br /><sub><b>Alebulka</b></sub></a><br /><a href="contribuiçes" title="Documentation">💻</a></td><td align="center"><a href="https://github.com/Thaiscrist"><img src="https://avatars.githubusercontent.com/u/100290383?v=4" width="100px;" alt=""/><br /><sub><b>Thaiscrist</b></sub></a><br /><a href="contribuiçes" title="Documentation">🌍</a></td>
 </tr>
</table>
