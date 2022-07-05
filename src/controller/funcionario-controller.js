const Funcionario  = require('../models/funcionario-model');
const bdSQLite = require('../infra/sqlite-db')
const FuncionarioDao = require('../DAO/funcionario_dao')

const funcionario = (app) =>{
    
 const DadosDAO = new FuncionarioDao(bdSQLite)


    app.get('/funcionario', (req, res) => {
        DadosDAO.listarFuncionario()
        .then((resultado) => {
          res.status(200).json(resultado)})
        .catch((err) => {res.send(err)})
      

    })
    app.post('/funcionario',(req, res) => {
      const body = req.body;
      const NovoFuncionario = new Funcionario(body.cargo, body.salario, body.conta, body.agencia)
      DadosDAO.insereFuncionario(NovoFuncionario)
      .then((result) => {
        res.status(201).send("Funcionario inserido com sucesso");
      }).catch((err) => {
          res.send(err);
        })     
      }) 

        app.get('/funcionario/:id', (req, res) => {
        const id = req.params.id;
        DadosDAO.listarFuncionarioID(id)
        .then((result) => {
          res.send(result);
        }).catch((err) => {
          res.send(err);
          })
       
        })
        app.put('/funcionario/:id', (req, res) => {
     
        const body = req.body
        const id = req.params.id;

              const funcionario = DadosDAO.listarFuncionarioID(id);
              const DadoNovoFuncionario = new Funcionario(
                      body.cargo || funcionario.cargo,
                      body.salario || funcionario.salario,
                      body.conta || funcionario.conta,
                      body.agencia || funcionario.agencia
                      )
                const parametro = 
                [   DadoNovoFuncionario.cargo, 
                    DadoNovoFuncionario.salario, 
                    DadoNovoFuncionario.conta,
                    DadoNovoFuncionario.agencia,
                    id
                ];
              const FuncionarioAtual = DadosDAO.alterarFuncionario(parametro)
                .then((result) => {
                  res.send(FuncionarioAtual, result)
                })
                .catch((error) => {
                  res.send(err);
                })


        })

        app.delete('/funcionario/:id', (req, res) => {
              DadosDAO.deletaFuncionario(req.params.id)
              .then((resultado)=>{
                res.send(`Funcionario deletado com sucesso`, resultado);
              }).catch((err)=>{
                res.send(err);
              })

        })   
        }


module.exports = funcionario;