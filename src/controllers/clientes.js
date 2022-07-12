const Cliente = require("../models/cliente");

module.exports = (app) => {
  app.post("/cliente", (req, res) => {
    const cliente = req.body;
    console.log(cliente);
    Cliente.create(cliente, res);
  });

  app.get("/cliente/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Cliente.getById(id, res);
  });

  app.delete("/cliente/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Cliente.deleteById(id, res);
  });

  app.patch("/cliente/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const novoCliente = req.body;
    Cliente.updateById(id, novoCliente, res);
  });
};
