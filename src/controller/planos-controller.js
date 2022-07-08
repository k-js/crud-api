import { Planos } from "../models/planos-models";
import { PlanosDAO } from "../DAO/planos-DAO";

const planos = (app) =>{

    app.post("planos", (req, res) =>{
        res.send("ajagsyadkai")
    })
}