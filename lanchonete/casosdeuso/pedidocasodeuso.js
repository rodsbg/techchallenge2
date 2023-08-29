const pedidoService = require('../../application/services/PedidoService');


const criarPedido = async (req, res) => {
  try {

    const pedido = await pedidoService.cadastrarPedido(req.body);

    //inicia o fake checkout
       
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const listarPedidos = async(req,res) => {
  try {
    
    const pedido = await pedidoService.listarPedidos();

    if (!pedido) {
      res.status(404).json({ error: 'Nenhum Pedido Cadastrado' });
    } else {
      res.status(200).json(pedido);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
const buscarpedidosporcpfPedidos = async (req, res) => {
  try {
    const { cpf } = req.params;
    const pedidos = await produtoService.buscarpedidosporcpfPedidos(categoria);
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





module.exports = {
    criarPedido, listarPedidos, buscarpedidosporcpfPedidos
  };
  