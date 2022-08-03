import sqlite3  from 'sqlite3';
const db = new sqlite3.Database('./src/infra/database.db');

const CREATE = `
CREATE TABLE IF NOT EXISTS "PLANOS"(
"id" INTEGER PRIMARY KEY AUTOINCREMENT,
"preco" tinyint,
"id_cadastro_cliente" INTEGER DEFAULT 0,
"qtd_meses" tinyint,
"carac" varchar(120) );`;

const INSERT = `INSERT INTO PLANOS (id, preco, id_cadastro_cliente, qtd_meses, carac) VALUES (1, '180', '1', '3', 'plano familia')`;

function create(){
    db.run(CREATE,(error) => {
        if(error) console.log('Erro ao criar tabela', error);
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

