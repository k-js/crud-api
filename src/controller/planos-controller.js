import { Planos } from "../models/planos-models.js";
import { PlanosDAO } from "../dao/planoDAO.js";

const planos = (app, bdSQLite) => {
    const DAOplanos = new PlanosDAO(bdSQLite);

    app.get('/planos', (req, res) => {
        const data = async () => {
            try {
                const planos = await DAOplanos.listagemPlanos();
                res.send(planos)
            } catch (error) {
                res.send(error)
            }
        }
        data();

    })

    app.get('/planos/:id', (req, res) => {
        const data = async () => {
            try {
                const planos = await DAOplanos.listagemPlanosID(req.params.id);
                res.send(planos)
            } catch (error) {
                res.send(error)
            }
        }
        data();

    })

    app.post('/planos', (req, res) => {
        const body = req.body;
        const NovoPlano = new Planos(body.id, body.preco, body.id_cadastro_cliente, body.qtd_meses, body.carac)
        const data = async () => {
            try {
                const planos = await DAOplanos.NovoPlano(NovoPlano);
                res.status(201).json(planos)
            } catch (error) {
                res.status(404).json(error)
            }
        }
        data();

    })

    app.put('/planos/:id', (req, res) => {
        const body = req.body;
        const id = parseInt(req.params.id)
        const data = async () => {
            try {
                const PlanosDadosAntigo = await DAOplanos.listagemPlanosID(id);
                const PlanoAtualizado = new
                    Planos(body.preco || PlanosDadosAntigo[0].preco,
                        body.id_cadastro_cliente || PlanosDadosAntigo[0].id_cadastro_cliente,
                        body.qtd_meses || PlanosDadosAntigo[0].qtd_meses,
                        body.carac || PlanosDadosAntigo[0].carac)
                        console.log(PlanoAtualizado)

                const parametro =
                    [PlanoAtualizado.preco,
                    PlanoAtualizado.id_cadastro_cliente,
                    PlanoAtualizado.qtd_meses,
                    PlanoAtualizado.carac,
                        id]
                const planos = await DAOplanos.AlterarPlano(parametro);
                res.status(201).json(planos)
            } catch (error) {
                res.status(404).json(error)
            }
        }
        data();

    })

}

export { planos }