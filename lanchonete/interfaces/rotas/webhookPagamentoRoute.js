const express = require('express');
const pagamentoUseCase = require('../../casosdeuso/PagamentoUseCase');
const router = express.Router();

/**
 * @openapi
 * /api/consultapagamentos:
 *   get:
 *     summary: Consulta Pagamento
 *     description: Consulta Pagamento
 *     responses:
 *       200:
 *         description: Listagem dos pagamentos
*/ 

// Rota para receber notificações do Mercado Pago
router.post('/api/consultapgtomercadopago', (req, res) => {
    const data = req.body; // Dados da notificação
  
    // Aqui você pode processar os dados da notificação como necessário
    console.log('Notificação do Mercado Pago:', data);
  
    // Responda ao Mercado Pago para confirmar o recebimento da notificação
    res.status(200).send('OK');
  });

router.get('/consultapagamentos', pagamentoUseCase.listarPagamentos);

module.exports = router;
