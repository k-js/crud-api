import { sqlite3 } from "sqlite3";
import { Funcionario } from "../models/funcionario-model.js";
import { FuncionarioDao } from "../DAO/funcionario_dao.js";

const funcionario = (app) => {
  const DadosDAO = new FuncionarioDao(bdSQLite);

  app.get("/funcionario", (req, res) => {
    const data = async () => {
      try {
        const funcionarios = await DadosDAO.listarFuncionario();
        res.status(200).json(funcionarios);
      } catch (error) {
        res.status(404).json(error);
      }
    };
    data();
  });
  app.post("/funcionario", (req, res) => {
    const body = req.body;
    const NovoFuncionario = new Funcionario(
      body.cargo,
      body.salario,
      body.conta,
      body.agencia
    );
    const data = async () => {
      try {
        const funcionarios = await DadosDAO.insereFuncionario(NovoFuncionario);
        res.status(201).json(funcionarios);
      } catch (error) {
        res.status(404).json(error);
      }
    };
    data();
  });

  app.get("/funcionario/:id", (req, res) => {
    const data = async () => {
      try {
        const funcionarios = await DadosDAO.listarFuncionarioID(req.params.id);
        res.status(200).json(funcionarios);
      } catch (error) {
        res.status(404).json(error);
      }
    };
    data();
  });

  app.put("/funcionario/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const data = async () => {
      try {
        const funcionario = await DadosDAO.listarFuncionarioID(id);
        const DadoNovoFuncionario = new Funcionario(
          body.cargo || funcionario.cargo,
          body.salario || funcionario.salario,
          body.conta || funcionario.conta,
          body.agencia || funcionario.agencia
        );
        const parametro = [
          DadoNovoFuncionario.cargo,
          DadoNovoFuncionario.salario,
          DadoNovoFuncionario.conta,
          DadoNovoFuncionario.agencia,
          id,
        ];
        const FuncionarioAtual = await DadosDAO.alterarFuncionario(parametro);
        res.status(201).json(FuncionarioAtual);
      } catch (error) {
        res.status(404).json(error);
      }
    };
    data();
  });

  app.delete("/funcionario/:id", (req, res) => {
    const data = async()=>{
      try{
          const func = await DadosDAO.deletaFuncionario(req.params.id);
          res.status(201).json(func)
      }catch(error){
          res.status(404).json(error)
      }
  }
  data();
  });
};

module.exports = funcionario;
