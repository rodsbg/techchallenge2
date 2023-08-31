const Cliente = require('../entidades/Cliente');

async function cadastrarCliente(clienteData) {
  const cliente = new Cliente(clienteData);
  await cliente.save();
  return cliente;
}

async function buscarClientePorCpf(cpf) {
  return Cliente.findOne({ cpf });
}

async function listarClientes() {
  return Cliente.find();
}
module.exports = { cadastrarCliente, buscarClientePorCpf, listarClientes };
