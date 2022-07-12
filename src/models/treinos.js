const treino = require("../controllers/treino");
const conexao = require("../infrastructure/conexao");

class Treino {
  #tableName = "Treinos";

  create(treino, res) {
    const sql = `INSERT INTO ${this.#tableName} SET ?`;

    conexao.query(sql, treino, (erro) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(treino);
      }
    });
  }

  getById(id, res) {
    const sql = `SELECT * FROM ${this.#tableName} WHERE id=${id}`;
    conexao.query(sql, (erro, resultados) => {
      const treino = resultados[0];
      if (erro || !treino) {
        res.sendStatus(404);
      } else {
        res.status(200).json(treino);
      }
    });
  }

  deleteById(id, res) {
    const sql = `DELETE FROM ${this.#tableName} WHERE id=?`;
    conexao.query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ id });
      }
    });
  }

  updateById(id, treinoAtualizado, res) {
    const sql = `UPDATE ${this.#tableName} SET ? WHERE id=?`;

    conexao.query(sql, [treinoAtualizado, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ ...treinoAtualizado, id });
      }
    });
  }
}

module.exports = new Treino();
