import express from "express"; 
import { bdSQLite } from "./src/infra/sqlite.js";
const app=express(); 

app.use(express.json());

import { cliente } from "./src/controller/cliente-controller.js";
cliente(app, bdSQLite);

// import { funcionario } from "./src/controller/funcionario-controller.js";
// funcionario(app, bdSQLite);

import { planos } from "./src/controller/planos-controller.js" //controller do plano ;

app.listen(3000, () => { console.log('RODANDO NA PORTA 3000')})