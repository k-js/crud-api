class FuncionarioDao {
    constructor(bd) {
      this.bd = bd;
    }
    listarFuncionario() {
      return new Promise((resolve, reject) => {
        this.bd.all(`SELECT * FROM FUNCIONARIO`, (error, resultado) => {
          if (error) {
            reject({ "Error": error });
          } else {
            resolve(resultado);
          }
        })
      })
    }
    listarFuncionarioID(id) {
      return new Promise((resolve, reject) => {
        this.bd.all('SELECT * FROM FUNCIONARIO  WHERE id = ?', [id], (error, rows) => {
          if (error) {
            reject({ "ERRO": error.message })
          } else {
            resolve(rows)
          }
        })
      })
    }
  
    insereFuncionario(NovoFuncionario) {
      return new Promise((resolve, reject) => {
        this.bd.run(`INSERT INTO FUNCIONARIO ( CARGO, SALARIO, AGENCIA, CONTA) VALUES (?,?,?,?)`,
          [ NovoFuncionario.cargo,
            NovoFuncionario.salario, 
            NovoFuncionario.conta,
            NovoFuncionario.agencia
        ],
          (error) => {
            if (error) {
              reject('FUNCIONARIO não pôde ser inserido')
            } else {
              resolve('FUNCIONARIO inserido com sucesso')
            }
          })
      })
    }
    alterarFuncionario(UsuarioAtualizado) {
      return new Promise((resolve, reject) => {
        this.bd.run('UPDATE FUNCIONARIO SET CARGO = ?, SALARIO = ?, AGENCIA = ?, CONTA = ? WHERE id = ?',
         UsuarioAtualizado, (erro) => {
          if (erro) reject('Não foi possível atualizar o FUNCIONARIO');
          else resolve('FUNCIONARIO atualizado');
        });
      })
    }
    deletaFuncionario(id) {
      return new Promise((resolve, reject) => {
        this.bd.run(`DELETE FROM FUNCIONARIO WHERE ID=${id}`,
          (err) => {
            if (err) {
              reject(err)
            } else {
              resolve('FUNCIONARIO deletado com sucesso')
            }
          })
      })
    }
  
  }
  module.exports = FuncionarioDao;