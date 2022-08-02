class PlanosDAO{
    constructor(bd){
        this.bd = bd;
    }
    listagemPlanos(){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM PLANOS`, (error, resultado)=>{
                if(error) reject(error);
                else resolve(resultado)
            })
        })
    }
    listagemPlanosID(id){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM PLANOS WHERE id = ${id}`, (error, resultado)=>{
                if(error) reject(error);
                else resolve(resultado)
            })
        })
    }
    NovoPlano(plano){
        return new Promise((resolve, reject) => {
            this.bd.run(
                `INSERT INTO PLANOS (preco, id_cadastro_cliente, qtd_meses, carac)
                 VALUES (?, ?, ?, ?) `,
                 [ plano.preco,
                    plano.id_cadastro_cliente,
                    plano.qtd_meses,
                    plano.carac ],

                (error) => {
                    if (error) {
                      reject('Plano não cadastrado')
                    } else {
                      resolve('Plano cadastrado')
                    }
                  }
                )
        })
    }
    AlterarPlano(PlanoAtualizado){
        return new Promise((resolve, reject) => {
            this.bd.run(` UPDATE PLANOS SET 
            preco = ?, 
            id_cadastro_cliente = ?,
            qtd_meses = ?,
            carac = ?
            WHERE id = ?`, PlanoAtualizado,

             (error)=>{
                if(error) reject('Plano não alterado');
                else resolve('Plano alterado')
            });
        })
    }
    DeletarPlano(id){
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM PLANO WHERE id = ${id} `, (error)=>{
                if(error) reject('Plano não deletado');
                else resolve('Plano deletado')
            })
         })
    }  
}

export {PlanosDAO};