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

router.get('/consultapagamentos', pagamentoUseCase.listarPagamentos);

module.exports = router;
