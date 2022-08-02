import { Clientes } from "../models/cliente-models.js";
import { ClienteDAO } from "../dao/clienteDAO.js";

const cliente = (app, bdSQLite) => {
    
  const DAOCliente = new ClienteDAO(bdSQLite);

  // ROTA PARA PUXAR CLIENTES
  app.get('/clientes', (req, res)=>{
      const data = async()=>{
          try{
              const clientes = await DAOCliente.listarClientes();
              res.status(200).json(clientes)
          }catch(error){
              res.status(404).json(error)
          }
      }
      data();
      
  })
  // ROTA PARA PUXAR CLIENTES POR PARAMETRO
  app.get('/clientes/:id', (req, res)=>{
      const data = async()=>{
          try{
              const clientes = await DAOCliente.listarClientesID(req.params.id);
              res.status(200).json(clientes)
          }catch(error){
              res.status(404).json(error)
          }
      }
      data();
    
  })
  // ROTA PARA CADASTRAR CLIENTES
  app.post('/clientes', (req, res)=>{
      const body = req.body;
      const NovoCliente = new Clientes(body.nome, body.telefone, body.endereco, body.dataNascimento, body.cpf)
      const data = async()=>{
          try{
              const clientes = await DAOCliente.CadastrarClientes(NovoCliente );
              res.status(201).json(clientes)
          }catch(error){
              res.status(404).json(error)
          }
      }
      data();
    
  })
  // ROTA PARA ALTERAR CLIENTE
  app.put('/clientes/:id', (req, res)=>{
     const body = req.body;
      const id = req.params.id;
          const data = async()=>{
              try{
                  const ClienteDadosAntigo= await DAOCliente.listarClientesID(id);
                  const ClienteAtualizado = new 
                      Clientes(body.nome || ClienteDadosAntigo[0].nome, 
                              body.telefone || ClienteDadosAntigo[0].telefone,
                              body.endereco || ClienteDadosAntigo[0].endereco,
                              body.dataNascimento || ClienteDadosAntigo[0].dataNascimento,
                              body.cpf || ClienteDadosAntigo[0].cpf)

                  const parametro = 
                  [ClienteAtualizado.nome, 
                      ClienteAtualizado.telefone, 
                      ClienteAtualizado.endereco,
                      ClienteAtualizado.dataNascimento, 
                      ClienteAtualizado.cpf, 
                      id]
                  const clientes = await DAOCliente.AlterarCliente(parametro);
                  res.status(201).json(clientes)
              }catch(error){
                  res.status(404).json(error)
              }
          }
          data();   
      
  })   
  // ROTA PARA DELETAR CLIENTE
  app.delete('/clientes/:id', (req, res)=>{
      const data = async()=>{
          try{
              const clientes = await DAOCliente.DeletarCliente(req.params.id);
              res.status(201).json(clientes)
          }catch(error){
              res.status(404).json(error)
          }
      }
      data();
  })
}

export {cliente}