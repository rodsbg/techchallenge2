const Pagamento = require('../entidades/Pagamento');

const criarPagamento = async (PedidoData) => {
  try {
    const pagamento = new Pedido(PedidoData);
    await pagamento.save();
    return pagamento;
  } catch (error) {
    throw new Error('Erro ao criar pedido.');
  }
};

async function listarPagamentos() {
    return Pagamento.find();
  }
module.exports = { listarPagamentos, criarPagamento };