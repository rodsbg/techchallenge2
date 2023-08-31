const express = require('express');
const clienteService = require('../../application/services/ClienteService');
const clienteController = require('../../interfaces/controllers/ClienteController');
const router = express.Router();


/**
 * @openapi
 * /api/clientes:
 *   post:
 *     summary: Cadastrar Cliente (obrigatorio cpf, nome e email)
 *     description: Inserir os dados do cliente para cadastro (cpf, nome e email)
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - nome
 *              - cpf
 *              - email
 *            properties:
 *              nome:
 *                type: string
 *                default: Joao da Silva
 *              cpf:
 *                type: number
 *                default: 12345678901
 *              email:
 *                type: string
 *                default: jsilva@gmail.com
 *     responses:
 *       201:
 *         description: Cliente Cadastrado
*/ 

/**
 * @openapi
 * /api/clientes:
 *   get:
 *     summary: lista todos os clientes
 *     description: lista todos os clientes
 *     responses:
 *       200:
 *         description: Cliente Cadastrado
*/ 

/**
 * @openapi
 * /api/clientes/{cpf}:
 *   get:
 *     summary: Consulta cliente pelo cpf
 *     description: Inserir o CPF cadastrado para consulta
 *     parameters:
 *     - in: path
 *       name: cpf
 *       type: integer
 *       required: true
 *       description: CPF
 *       defaut: 12345678901
 *     responses:
 *       200:
 *         description: Cliente ativo
*/ 

router.post('/clientes', async (req, res) => {
  try {
    const { nome, cpf, email } = req.body;
    const cliente = await clienteService.cadastrarCliente(req.body);
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/clientes', async (req, res) => {
  try {
    const cliente = await clienteService.listarClientes();

    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar clientes.' });
  }
});

router.get('/clientes/:cpf', async (req, res) => {
  try {
    const { cpf } = req.params;
    const cliente = await clienteService.buscarClientePorCpf(cpf);
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar cpf.' });
    
  }
});
module.exports = router;
