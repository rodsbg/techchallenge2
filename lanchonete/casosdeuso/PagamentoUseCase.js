const pagamentoController = require('../interfaces/controladores/PagamentoController');

const listarPagamentos = async(req,res) => {
  try {
    
    const pagamento = await pagamentoController.listarPagamentos();

    if (!pagamento) {
      res.status(404).json({ error: 'Nenhum Pagamento realizado' });
    } else {
      res.status(200).json(pagamento);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const buscarStatusPgtporcpf  = async (req, res) => {
  try {
    const { cpf } = req.params;
    const pagamento = await pagamentoController.buscarStatusPgtporcpf(categoria);
    res.json(pagamento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { listarPagamentos, buscarStatusPgtporcpf  };
  