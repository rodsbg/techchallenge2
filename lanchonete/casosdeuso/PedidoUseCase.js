const pedidoController = require('../interfaces/controladores/PedidoController');


const criarPedido = async (req, res) => {
  try {

    const pedido = await pedidoController.cadastrarPedido(req.body);

    //inicia o checkout e retorna o pedido
       
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const listarPedidos = async(req,res) => {
  try {
    
    const pedido = await pedidoController.listarPedidos();

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
    const pedidos = await produtoController.buscarpedidosporcpfPedidos(categoria);
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//consulta status do pedido e retorna se pagamento foi aprovado ou não

const consultaStatuspagamento = async (req, res) => {
  try {
    const { cpf } = req.params;
    const pedidos = await produtoController.buscarpedidosporcpfPedidos(categoria);
    res.json(pedidos.status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



//Listar Pedidos exceto finalizados
const listarPedidosnaofinalizados = async(req,res) => {
  try {
    
    const pedido = await pedidoController.listarPedidosnaofinalizados();

    if (!pedido) {
      res.status(404).json({ error: 'Nenhum Pedido Cadastrado' });
    } else {
      res.status(200).json(pedido);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



module.exports = {
    criarPedido, listarPedidos, buscarpedidosporcpfPedidos, listarPedidosnaofinalizados, consultaStatuspagamento };
  