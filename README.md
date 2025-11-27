# Sistema de Cadastro de Clientes

## Contexto

Este projeto implementa um módulo JavaScript ES6 para gerenciar cadastro de clientes e empresas. O sistema utiliza classes para representar:

- **Telefone**: Armazena DDD e número
- **Endereço**: Armazena estado, cidade, rua e número
- **Cliente**: Possui nome, CPF (privado), endereço e lista de telefones
- **Empresa**: Possui razão social, nome fantasia, CNPJ (privado), endereço, conjunto de clientes e telefones

O módulo foi desenvolvido seguindo boas práticas de encapsulamento, com atributos privados protegidos (CPF e CNPJ) e métodos de acesso (getters).

## Como executar

Execute o arquivo de teste com Node.js:

```bash
node teste.js
```

O programa criará uma empresa com 5 clientes e exibirá os detalhes formatados no console.
