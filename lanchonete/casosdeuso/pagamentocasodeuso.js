const pagamentoService = require('../../application/services/PagamentoService');

const listarPagamentos = async(req,res) => {
  try {
    
    const pagamento = await pagamentoService.listarPagamentos();

    if (!pagamento) {
      res.status(404).json({ error: 'Nenhum Pagamento realizado' });
    } else {
      res.status(200).json(pagamento);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = {
   listarPagamentos
  };
  