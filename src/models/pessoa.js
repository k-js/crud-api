const conexao = require("../infrastructure/conexao");
class Pessoa {
  #tableName;

  constructor(tableName) {
    this.#tableName = tableName;
  }

  create(pessoa, res) {
    const sql = `INSERT INTO ${this.#tableName} SET ?`;

    conexao.query(sql, pessoa, (erro) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(pessoa);
      }
    });
  }

  getById(id, res) {
    const sql = `SELECT * FROM ${this.#tableName} WHERE id=${id}`;
    conexao.query(sql, (erro, resultados) => {
      const pessoa = resultados[0];
      if (erro || !pessoa) {
        res.sendStatus(404);
      } else {
        res.status(200).json(pessoa);
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

  updateById(id, newPerson, res) {
    const sql = `UPDATE ${this.#tableName} SET ? WHERE id=?`;

    conexao.query(sql, [newPerson, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ ...newPerson, id });
      }
    });
  }
}

module.exports = Pessoa;
