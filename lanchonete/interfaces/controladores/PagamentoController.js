const pedidoRepository = require('../../repositorios/PagamentoRepository');

async function listarPagamentos() {
  
  return pedidoRepository.listarPagamentos();
}

module.exports = { listarPagamentos  }