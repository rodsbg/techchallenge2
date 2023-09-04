const pagamentoRepository = require('../../repositorios/PagamentoRepository');

async function listarPagamentos() {
  
  return pagamentoRepository.listarPagamentos();
}

const buscarStatusPgtporcpf = async (cpf) => {
  try {
    return await pagamentoRepository.buscarStatusPgtporcpf(cpf);
  } catch (error) {
    throw new Error('Nenhum pedido cadastrado para o cliente');
  }
};

module.exports = { listarPagamentos, buscarStatusPgtporcpf   }