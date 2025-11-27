class Empresa {
    #cnpj;

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.#cnpj = cnpj;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get cnpj() {
        return this.#cnpj;
    }

    detalhe() {
        let resultado = `----------------\nNome fantasia: ${this.nomeFantasia}\n`;
        
        this.clientes.forEach(cliente => {
            resultado += `----------------\nNome: ${cliente.nome}\n`;
            resultado += `Estádio: SP cidade: ${cliente.endereco.cidade} rua: ${cliente.endereco.rua} numero: ${cliente.endereco.numero}\n`;
            
            const telefonesArray = Array.from(cliente.telefones);
            telefonesArray.forEach(telefone => {
                resultado += `ddd: ${telefone.ddd} numero: ${telefone.numero}\n`;
            });
        });
        
        return resultado;
    }
}

export default Empresa;
