import { sqlite3 } from "sqlite3";
const db = new sqlite3.Database('./src/infra/database.db');

db.run(`CREATE TABELE IF NOT EXISTS "CLIENTES"(
"id" INTEGER PRIMARY KAY AUTOINCREMENT
"nome" varchar(220),
"cpf" int
)`,(error,)=>{
    console.log('erro ao criar tabela' , error)
})


db.run(`INSERT INTO CLIENTES (id,nome, cpf)
VALUES (1, 'maria sant', '76432123454')`, (error)=>{
    console.log('erro ao inserir tabela', error )
})

