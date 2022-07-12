const Pessoa = require("./pessoa");

class Funcionario extends Pessoa {
  constructor() {
    super("Funcionarios");
  }
}

module.exports = new Funcionario();
