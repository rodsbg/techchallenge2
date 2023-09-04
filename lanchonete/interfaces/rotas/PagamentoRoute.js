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

/**
 * @openapi
 * /api/pedidoconfirmacaopagamento/{cpf}:
 *   post:
 *     summary: Cadastrar pedido ao cpf indicado
 *     description: Incluir pedido ao cpf indicado
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - cpf
 *              - status
 *            properties:
 *              cpf:
 *                type: string
 *                default: 12345678901
 *              statuspagamento:
 *                type: string
 *                default: Nao identificado
 *     responses:
 *       200:
 *         description: Produto Cadastrado
*/ 

//webhook recebe confirmação do pagamento

router.post('/pedidoconfirmacaopagamento/:cpf', pagamentoUseCase.buscarStatusPgtporcpf );

router.get('/consultapagamentos', pagamentoUseCase.listarPagamentos);




module.exports = router;
