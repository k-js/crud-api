const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "admin",
  password: "FsjeR!Pj&RMBjR&^zkax2j",
  database: "Treinos",
});

module.exports = conexao;
