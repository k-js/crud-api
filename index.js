import express from "express"; 
import { bdSQLite } from "./src/infra/sqlite.js";
const app=express(); 






const customExpress = require("./src/config/customExpress");
const conexao = require("./src/infrastructure/conexao");
const Tabelas = require("./src/infrastructure/tabelas");
conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Conectado com sucesso!!");
    Tabelas.init(conexao);
    const app = customExpress();
    app.listen(2000, () => console.log("servidor rodando na porta 2000"));
  }
});