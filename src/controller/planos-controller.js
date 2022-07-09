import { Plano } from "../models/planos-models.js";
import { PlanosDAO } from "../DAO/planos-DAO.js";

const planos = (app, bdSQLite) => {
    const DAOplanos = new DAOplanos(bdSQLite);

    app.get('/planos', (req, res)=>{
        const data = async()=>{
            try{
                const planos = await DAOplanos.listarPlanos();
                res.send(planos)
            }catch(error){
                res.send(error)
            }
        }
        data();
        
    })

    app.get('/planos/:id', (req, res)=>{
        const data = async()=>{
            try{
                const planos = await DAOplanos.listarPlanosPorID(req.params.id);
                res.send(planos)
            }catch(error){
                res.send(error)
            }
        }
        data();
      
    })

    app.post('/planos', (req, res)=>{
        body = req.body;
        const NovoPlano = new Planos(body.id, body.preco, body.id_cadastro_cliente, body.qtd_meses, body.carac)
        const data = async()=>{
            try{
                const planos = await DAOplanos.CadastrarPlano(NovoPlano);
                res.send(planos)
            }catch(error){
                res.send(error)
            }
        }
        data();
      
    })

}
    
  export {planos}