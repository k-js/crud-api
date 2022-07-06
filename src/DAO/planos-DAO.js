class PlanosDAO{
    constructor(bd){
        this.bd = bd;
    }
    listagemPlanos(){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM CLIENTES`, (error, resultado)=>{
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

}

export {PlanosDAO};