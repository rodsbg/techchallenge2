const express = require('express');
const pedidoController = require('../../interfaces/controllers/PedidoController');
const router = express.Router();

/**
 * @openapi
 * /api/pedido:
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
 *              - lanche
 *              - acompanhamento
 *              - bebida
 *              - status
 *              - ondecomer
 *            properties:
 *              cpf:
 *                type: string
 *                default: 12345678901
 *              lanche:
 *                type: string
 *                default: 1
 *              acompanhamento:
 *                type: string
 *                default: 2
 *              bebida:
 *                type: string
 *                default: 3
 *              status:
 *                type: string
 *                default: Enviado
 *              ondecomer:
 *                type: string
 *                default: Viagem
 *     responses:
 *       200:
 *         description: Produto Cadastrado
*/ 

/**
 * @openapi
 * /api/pedidos/{cpf}:
 *   get:
 *     summary: Acompanhamento do pedido por cpf
 *     description: Acompanhamento status do pedido por cpf
 *     parameters:
 *     - in: path
 *       name: cpf
 *       type: string
 *       required: true
 *       description: cpf do cliente para consultar pedido
 *       default: 12345678901
 *     responses:
 *       200:
 *         description: Consulta status do pedido por cpf
 *       404:
 *         description: Não há pedidos para esse cpf
 */


/**
 * @openapi
 * /api/pedido:
 *   get:
 *     summary: lista todos os pedidos
 *     description: lista todos os pedidos
 *     responses:
 *       200:
 *         description: Listagem ok
*/ 
router.post('/pedido', pedidoController.criarPedido);
router.get('/pedido', pedidoController.listarPedidos);
router.get('/pedido/:cpf', pedidoController.buscarpedidosporcpfPedidos);

module.exports = router;
