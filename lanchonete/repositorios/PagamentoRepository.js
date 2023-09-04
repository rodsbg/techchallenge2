const Pagamento = require('../entidades/Pagamento');

const criarPagamento = async (PedidoData) => {
  try {
    const pagamento = new Pedido(PedidoData);
    await pagamento.save();
    //retorna pedido e status do pagamento
    return pagamento;
  } catch (error) {
    throw new Error('Erro ao registrar pagamento.');
  }
};

async function listarPagamentos() {
    return Pagamento.find();
  }

const buscarStatusPgtporcpf = async (cpf) => {
    try {
      const pedidos = await Pagamento.find({ cpf });
      return pedidos;
    } catch (error) {
      throw new Error('Erro buscar pagamento pelo cpf.');
    }
  };
module.exports = { listarPagamentos, criarPagamento, buscarStatusPgtporcpf };