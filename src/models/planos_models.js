let id = 0;

class Planos {
    constructor(preco, id_cadastro_cliente, qtd_meses, carac){
        this.id = id++;
        this.preco = preco;
        this.id_cadastro_cliente = id_cadastro_cliente;
        this.qtd_meses = qtd_meses;
        this.carac = carac;
    }
}

export {Planos};