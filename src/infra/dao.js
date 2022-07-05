const sqlite3 = require('sqlite3')

class AppDAO {
  constructor(dbFilePath) {
    this.db = new sqlite3.Database(dbFilePath, (err) => {
      if (err) {
        console.log('Aconteceu um erro na hora de conectar ao DB', err)
      } else {
        console.log('Conectado com sucesso')
      }
    })
  }
}

module.exports = AppDAO