const express = require('express');
const pagamentoController = require('../controladores/pagamentocontrolador');
const router = express.Router();

/**
 * @openapi
 * /api/consultapagamentos:
 *   get:
 *     summary: Consulta Pagamento (FakeCheckout)
 *     description: Consulta Pagamento (FakeCheckout)
 *     responses:
 *       200:
 *         description: Listagem dos pagamentos
*/ 

router.get('/consultapagamentos', pagamentoController.listarPagamentos);

module.exports = router;
