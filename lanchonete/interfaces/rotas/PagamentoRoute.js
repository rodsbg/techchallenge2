const express = require('express');
const pagamentoUseCase = require('../../casosdeuso/PagamentoUseCase');
const router = express.Router(); 
const axios = require('axios');
const QRCode = require('qrcode');

/**
 * @openapi
 * /api/consultapagamentos:
 *   get:
 *     summary: Consulta Pagamento
 *     description: Consulta a lista de pagamentos disponíveis.
 *     responses:
 *       200:
 *         description: Listagem dos pagamentos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: '12345'
 *                   cpf:
 *                     type: string
 *                     example: '12345678901'
 *                   status:
 *                     type: string
 *                     example: 'Confirmado'
 */

/**
 * @openapi
 * /api/pedidoconfirmacaopagamento/{cpf}:
 *   post:
 *     summary: Cadastrar pedido ao CPF indicado
 *     description: Inclui um pedido ao CPF indicado e confirma o pagamento.
 *     parameters:
 *       - name: cpf
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: '12345678901'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cpf
 *               - status
 *             properties:
 *               cpf:
 *                 type: string
 *                 example: '12345678901'
 *               status:
 *                 type: string
 *                 example: 'Confirmado'
 *     responses:
 *       200:
 *         description: Pedido cadastrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Pedido cadastrado com sucesso'
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'Dados inválidos'
 */

/**
 * @openapi
 * /api/webhook/mercadopago:
 *   post:
 *     summary: Receber notificações de pagamento do Mercado Pago
 *     description: Endpoint que recebe notificações de pagamento do Mercado Pago e atualiza o status do pagamento.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: '1234567890'
 *               status:
 *                 type: string
 *                 example: 'approved'
 *               transaction_amount:
 *                 type: number
 *                 example: 100.00
 *     responses:
 *       200:
 *         description: Notificação recebida com sucesso
 *       400:
 *         description: Dados inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'Dados inválidos'
 */


/**
 * @openapi
 * /api/generate-qr-code:
 *   post:
 *     summary: Gera um QR Code para pagamento
 *     description: Gera um QR Code que pode ser usado para pagamentos via Mercado Pago.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 100.00
 *     responses:
 *       200:
 *         description: QR Code gerado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 qr_code_url:
 *                   type: string
 *                   example: 'https://example.com/qrcode.png'
 *       400:
 *         description: Erro ao gerar QR Code
 */

// Webhook para receber notificações de pagamento do Mercado Pago
router.post('/webhook/mercadopago', async (req, res) => {
  try {
    const notification = req.body;
    await pagamentoUseCase.processarNotificacaoPagamento(notification);
    res.status(200).send('Notificação recebida com sucesso');
  } catch (error) {
    console.error('Erro ao processar notificação de pagamento:', error);
    res.status(400).json({ error: 'Dados inválidos' });
  }
});

// Rota para confirmar pedidos ao CPF
router.post('/pedidoconfirmacaopagamento/:cpf', pagamentoUseCase.buscarStatusPgtporcpf);

// Rota para consultar pagamentos
router.get('/consultapagamentos', pagamentoUseCase.listarPagamentos);

// Substitua pelo seu Access Token do Mercado Pago
const ACCESS_TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN;  // Use uma variável de ambiente

router.post('/generate-qr-code', async (req, res) => {
  try {
    const { amount } = req.body;

    // Cria uma preferência de pagamento
    const preferenceResponse = await axios.post('https://api.mercadopago.com/v1/payments', {
      transaction_amount: amount,
      payment_method_id: 'pix',
      description: 'Descrição do pagamento',
      payer_email: 'payer@example.com'
    }, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    const preferenceId = preferenceResponse.data.id;

    // Gera o QR Code para a preferência
    const qrCodeUrl = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${preferenceId}`;

    // Gera a imagem QR Code
    QRCode.toDataURL(qrCodeUrl, (err, url) => {
      if (err) {
        console.error('Erro ao gerar QR Code:', err);
        return res.status(400).json({ error: 'Erro ao gerar QR Code' });
      }
      res.status(200).json({ qr_code_url: url });
    });
  } catch (error) {
    console.error('Erro ao criar preferência de pagamento:', error);
    res.status(400).json({ error: 'Erro ao criar preferência de pagamento' });
  }
});

module.exports = router;

