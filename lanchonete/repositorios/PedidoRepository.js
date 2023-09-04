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

const statusDesejados = ['Pronto', 'Em Preparacao', 'Recebido'];

// Consulta e ordenação personalizada
return Pedido.find({ status: { $in: statusDesejados } })
  .sort({ 
    status: {
      $cond: {
        if: { $eq: ['$status', 'Pronto'] }, // Primeiro classificar "Pronto"
        then: 1,
        else: {
          $cond: {
            if: { $eq: ['$status', 'Em Preparacao'] }, // Em seguida, classificar "Em Preparação"
            then: 2,
            else: 3 // Por último, "Recebido"
          }
        }
      }
    }
  })
  }
//retorna identificação do pedido
const buscarpedidosporcpfPedidos = async (cpf) => {
  try {
    const pedidos = await Pedido.find({ cpf });
    return pedidos;
  } catch (error) {
    throw new Error('Erro buscar pedido pelo cpf.');
  }
};
//altera status do pedido
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