import Empresa from './Empresa.js';
import Cliente from './Cliente.js';
import Endereco from './Endereco.js';
import Telefone from './Telefone.js';

// Criar endereço da empresa
const enderecoEmpresa = new Endereco('SP', 'São Paulo', 'Av Andrômeda', 987);

// Criar empresa
const empresa = new Empresa(
    'Mercado Online LTDA',
    'Mercado Online',
    '12345678000199',
    enderecoEmpresa
);

// Adicionar telefones à empresa
empresa.telefones.add(new Telefone('99999999', '99999999'));

// Criar clientes
const cliente1 = new Cliente('João', '99999999', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 987));
cliente1.telefones.add(new Telefone('99999999', '99999999'));
cliente1.telefones.add(new Telefone('99999999', '99999999'));

const cliente2 = new Cliente('Gabriel', '88888888', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 432));
cliente2.telefones.add(new Telefone('88888888', '88888888'));
cliente2.telefones.add(new Telefone('88888888', '88888888'));

const cliente3 = new Cliente('Barbara', '77777777', new Endereco('SP', 'São José dos Campos', 'Av São João', 789));
cliente3.telefones.add(new Telefone('77777777', '77777777'));
cliente3.telefones.add(new Telefone('77777777', '77777777'));

const cliente4 = new Cliente('Rafael', '66666666', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 432));
cliente4.telefones.add(new Telefone('66666666', '66666666'));
cliente4.telefones.add(new Telefone('66666666', '66666666'));

const cliente5 = new Cliente('Marcus', '55555555', new Endereco('SP', 'São José dos Campos', 'Av Andrômeda', 432));
cliente5.telefones.add(new Telefone('66666666', '66666666'));
cliente5.telefones.add(new Telefone('66666666', '66666666'));

// Adicionar clientes à empresa
empresa.clientes.add(cliente1);
empresa.clientes.add(cliente2);
empresa.clientes.add(cliente3);
empresa.clientes.add(cliente4);
empresa.clientes.add(cliente5);

// Exibir detalhes
console.log(empresa.detalhe());
