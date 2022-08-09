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
    listarClientesID(cpf){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM CLIENTES WHERE cpf = ${cpf}`, (error, resultado)=>{
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
    AlterarCliente(ClienteAtualizado){
        return new Promise((resolve, reject) => {
            this.bd.run(`
            UPDATE CLIENTES
            SET nome = ?, telefone = ?, endereco = ?, dataNascimento = ?, cpf = ? WHERE id = ?`, ClienteAtualizado,
             (error)=>{
                if(error) reject(error.message);
                else resolve('Plano alterado com sucesso!')
            })
        })
    }
    DeletarCliente(cpf){
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM CLIENTES WHERE id = ${cpf} `, (error)=>{
                if(error) reject(error);
                else resolve("DEU CERTO DELETAR CLIENTE")
            })
         })
    }   
}

export default ClienteDAO

