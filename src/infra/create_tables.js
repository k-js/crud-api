import sqlite3  from 'sqlite3';
const db = new sqlite3.Database('./src/infra/database.db');

const CREATE = `
CREATE TABLE IF NOT EXISTS "CLIENTES"(
"id"  KEY AUTOINCREMENT,
"nome" varchar(150),
"telefone" varchar(15),
"endereco" varchar(200),
"dataNascimento" date,
"cpf" INTEGER PRIMARY varchar(14)
);`;

const INSERT = `INSERT INTO CLIENTES (id, nome, telefone, endereco, dataNascimento, cpf) 
VALUES (1, 'Maria Silva', '12345678900987', 'Rua Urbano Lopes, 400', '', '653567345' )`;


function create(){
    db.run(CREATE,(error) => {
        if(error) console.log('erro ao criar tabela', error)
    })
}

function insert(){
    db.run(INSERT ,(error) => {
     if(error) console.log('erro ao inserir tabela', error)
})
}

db.serialize(()=> {
  create();
  insert();
})

