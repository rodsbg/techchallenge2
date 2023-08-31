const express = require('express');
const campanhaController = require('../controladores/CampanhaController');
const campanhaUseCase = require('../../casosdeuso/CampanhaUseCase');
const router = express.Router();



/**
 * @openapi
 * /api/campanha/{cpf}:
 *   put:
 *     summary: Incluir campanha ao cpf indicado
 *     description: Incluir campanha ao cpf indicado
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - cpf
 *              - campanha
 *            properties:
 *              cpf:
 *                type: string
 *                default: 12345678901
 *              campanha:
 *                type: string
 *                default: 15% de desconto nas proximas compras
 * 
 *     responses:
 *       200:
 *         description: Cliente ativo
*/ 

/**
 * @openapi
 * /api/campanha:
 *   get:
 *     summary: lista todas as campanhas
 *     description: lista todas as campanhas
 *     responses:
 *       200:
 *         description: Listagem ok
*/ 


router.put('/campanha/:cpf', campanhaUseCase.criarCampanha);

router.get('/campanha', async (req, res) => {
    try {
      const campanha = await campanhaController.listarCampanhas();
      
      res.json(campanha);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar campanhas.' });
    }
  });

module.exports = router;
