const clienteRepository = require('../../repositorios/ClienteRepository');

async function cadastrarCliente(clienteData) {
  const clienteExistente = await clienteRepository.buscarClientePorCpf(clienteData.cpf);
  if (clienteExistente) {
    throw new Error('CPF já cadastrado.');
  }

  const cliente = await clienteRepository.cadastrarCliente(clienteData);
  return cliente;
}

async function buscarClientePorCpf(clienteData) {
  const clienteExistente = await clienteRepository.buscarClientePorCpf(clienteData);
  
  if (!clienteExistente) {
    throw new Error('CPF não cadastrado.');
  }

  return clienteExistente
}

async function listarClientes() {
  return clienteRepository.listarClientes();
}

module.exports = { cadastrarCliente, buscarClientePorCpf, listarClientes};
