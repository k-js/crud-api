import express from "express"; 
import { bdSQLite } from "./src/infra/sqlite.js";
import cors from "cors"

const app=express(); 

app.use(express.json());

app.use(cors());

import { cliente } from "./src/controller/cliente-controller.js";
cliente(app, bdSQLite);


import { planos } from "./src/controller/planos-controller.js" 
planos(app, bdSQLite)

app.listen(3000, () => { console.log('RODANDO NA PORTA 3000')})