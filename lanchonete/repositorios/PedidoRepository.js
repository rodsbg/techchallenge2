const Pedido = require('../entidades/Pedido');
const Pagamento = require('../entidades/Pagamento');

const criarPedido = async (PedidoData) => {
  try {

    const pedido = new Pedido(PedidoData);
    await pedido.save();
    console.log(pedido);
    return pedido;
  } catch (error) {
    throw new Error('Erro ao criar pedido.');
  }
};

async function listarPedidos() {
    return Pedido.find();
  }

  async function  listarPedidosnaofinalizados() {
    return Pedido.find({status: { $not: 'Finalizado'}});
  }

 


const buscarpedidosporcpfPedidos = async (cpf) => {
  try {
    const pedidos = await Pedido.find({ cpf });
    return pedidos;
  } catch (error) {
    throw new Error('Erro buscar pedido pelo cpf.');
  }
};

const editarStatusPedido = async (cpf, PedidoData) => {
  try {
    const pedido = await Produto.findByIdAndUpdate(cpf, PedidoData, {
      new: true,
    });
    return pedido;
  } catch (error) {
    throw new Error('Erro ao editar o produto.');
  }
};


module.exports = { criarPedido, listarPedidos, buscarpedidosporcpfPedidos, editarStatusPedido, listarPedidosnaofinalizados };