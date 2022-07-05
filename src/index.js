import express from "express"; 
const app=express(); 

app.use(express.json());

import { bdSQLite } from "./infra/sqlite.js";

const funcionario = require('../crud-api/src/controller/funcionario-controller'); 

import { cliente } from "./controller/cliente-controller.js";

cliente(app, bdSQLite);
funcionario(app, bdSQLite);

app.listen(3000, () => { console.log('RODANDO NA PORTA 3000')})