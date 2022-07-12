const Treino = require("../models/treino");

module.exports = (app) => {
  app.post("/treino", (req, res) => {
    const treino = req.body;
    Treino.create(treino, res);
  });

  app.get("/treino/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Treino.getById(id, res);
  });

  app.delete("/treino/:id", (req, res) => {
    const id = parseInt(req.params.id);
    Treino.deleteById(id, res);
  });

  app.patch("/treino/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const treinoAtualizado = req.body;
    Treino.updateById(id, treinoAtualizado, res);
  });
};