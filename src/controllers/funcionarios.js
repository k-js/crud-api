const Funcionario = require("../models/funcionario");

module.exports = (app) => {
  app.post("/funcionario", (req, res) => {
    const funcionario = req.body;
    Funcionario.create(funcionario, res);
  });

  app.get("/funcionario/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Funcionario.getById(id, res);
  });

  app.delete("/funcionario/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Funcionario.deleteById(id, res);
  });

  app.patch("/funcionario/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const novoFuncionario = req.body;
    Funcionario.updateById(id, novoFuncionario, res);
  });
};