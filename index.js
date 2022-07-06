import express from "express"; 
const app=express(); 

app.use(express.json());


import { bdSQLite } from "./src/infra/sqlite.js";

import { cliente } from "./src/controller/cliente-controller.js";
cliente(app, bdSQLite);

import { funcionario } from "./src/controller/funcionario-controller.js";
funcionario(app, bdSQLite);

import { plano }

app.listen(3000, () => { console.log('RODANDO NA PORTA 3000')})