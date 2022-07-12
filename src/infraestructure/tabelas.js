class Tabelas {
    init(conexao) {
      this.conexao = conexao;
      this.criarClientes();
      this.criarFuncionarios();
      this.criarTreinos();
    }
  
    criarTreinos() {
      const sql =
        "CREATE TABLE IF NOT EXISTS Treinos  (id int NOT NULL AUTO_INCREMENT,id_funcionario int NOT NULL,id_cliente int NOT NULL, quantidade_aulas int NOT NULL, exercicios varchar(100) NOT NULL, PRIMARY KEY(id))";
  
      this.conexao.query(sql, (erro) => {
        if (erro) {
          console.log(erro);
        } else {
          console.log("Tabela Treinos criada com sucesso");
        }
      });
    }
  
    criarClientes() {
      const query =
        "CREATE TABLE IF NOT EXISTS Clientes (id int NOT NULL AUTO_INCREMENT,nome varchar (50), PRIMARY KEY (id))";
  
      this.conexao.query(query, (erro) => {
        if (erro) {
          console.log(erro);
        } else {
          console.log("Tabela Clientes foi criada com sucesso");
        }
      });
    }
  
    criarFuncionarios() {
      const query =
        "CREATE TABLE IF NOT EXISTS Funcionarios (id int NOT NULL AUTO_INCREMENT,nome varchar (50), PRIMARY KEY (id))";
  
      this.conexao.query(query, (erro) => {
        if (erro) {
          console.log(erro);
        } else {
          console.log("Tabela Funcionarios foi criada com sucesso");
        }
      });
    }
  }
  
  module.exports = new Tabelas();
  