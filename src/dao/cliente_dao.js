class ClienteDAO{
    constructor(bd){
        this.bd = bd;
    }
    listarClientes(){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM CLIENTES`, (error, resultado)=>{
                if(error) reject(error);
                else resolve(resultado)
            })
        })
    }
    listarClientesID(id){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM CLIENTES WHERE id = ${id}`, (error, resultado)=>{
                if(error) reject(error);
                else resolve(resultado)
            })
        })
    }
    CadastrarClientes(Cliente){
        return new Promise((resolve, reject) => {
            this.bd.run(
                `INSERT INTO CLIENTES (nome, telefone, endereco, dataNascimento, cpf)
                 VALUES (?, ?, ?, ?, ?) `,
                 [Cliente.nome, Cliente.telefone, Cliente.endereco, Cliente.dataNascimento, Cliente.cpf],
            (error)=>{
                if(error) reject(error.message);
                else resolve('DEU CERTO INSERIR CLIENTE')
            })
        })
    }
    AlterarCliente(ClienteAtualizado, id) { // Certifique-se de passar o ID como um parâmetro separado
        return new Promise((resolve, reject) => {
          const parametro = [
            ClienteAtualizado.nome,
            ClienteAtualizado.telefone,
            ClienteAtualizado.endereco,
            ClienteAtualizado.dataNascimento,
            ClienteAtualizado.cpf,
            id // Adicione o ID no final do array
          ];
      
          this.bd.run(`UPDATE CLIENTES SET nome = ?, telefone = ?, endereco = ?, dataNascimento = ?, cpf = ? WHERE id = ?`,
            parametro, // Passe o array como argumento aqui
            (error) => {
              if (error) {
                reject(error.message);
              } else {
                resolve('Cliente alterado com sucesso!');
              }
            }
          );
        });
      }
             
    DeletarCliente(id){
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE  FROM CLIENTES WHERE id = ${id} `, (error)=>{
                if(error) reject(error);
                else resolve("DEU CERTO DELETAR CLIENTE")
            })
         })
    }   
}

export default ClienteDAO

