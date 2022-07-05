import express from "express"; 
const app=express(); 

app.use(express.json());


import { bdSQLite } from "./infra/sqlite";

import { cliente } from "./controller/cliente-controller.js";
import { funcionario } from "./controller/funcionario-controller.js";

cliente(app, bdSQLite);

funcionario(app, bdSQLite);

app.listen(3000, () => { console.log('RODANDO NA PORTA 3000')})