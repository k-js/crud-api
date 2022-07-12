const Pessoa = require("./pessoa");

class Cliente extends Pessoa {
  constructor() {
    super("Clientes");
  }
}

module.exports = new Cliente();
