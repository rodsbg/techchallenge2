const pagamentoController = require('../interfaces/controladores/PagamentoController');

const listarPagamentos = async (req, res) => {
  try {
    const pagamentos = await pagamentoController.listarPagamentos();

    if (!pagamentos || pagamentos.length === 0) {
      res.status(404).json({ error: 'Nenhum pagamento realizado' });
    } else {
      res.status(200).json(pagamentos);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const buscarStatusPgtporcpf = async (req, res) => {
  try {
    const { cpf } = req.params;
    const pagamento = await pagamentoController.buscarStatusPgtporcpf(cpf);

    if (!pagamento) {
      res.status(404).json({ error: 'Pagamento não encontrado para o CPF fornecido' });
    } else {
      res.status(200).json(pagamento);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const processarNotificacaoPagamento = async (notification) => {
  const { id, status, transaction_amount } = notification;

  try {
    // Lógica para processar a notificação de pagamento
    await pagamentoController.processarNotificacao(id, status, transaction_amount);
  } catch (error) {
    console.error('Erro ao processar notificação de pagamento:', error.message);
  }
};

module.exports = { listarPagamentos, buscarStatusPgtporcpf, processarNotificacaoPagamento };
