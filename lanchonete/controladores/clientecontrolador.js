const clienteService = require('../../application/services/ClienteService');
class clienteController {
    constructor(clienteService,campanhaService) {
      this.clienteService = clienteService;
      this.campanhaService = campanhaService;
    }
  
    async cadastrarCliente(req, res) {
      const { nome, email, cpf } = req.body;
  
      try {
        const cliente = await clienteService.cadastrarCliente(nome, email, cpf);
        res.status(201).json(cliente);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
    async buscarClientePorCpf(req, res) {
        const { cpf } = req.params;
        try {
          
          const cliente = await clienteService.buscarClientePorCpf(cpf);
          
          if (!cliente) {
            res.status(404).json({ error: 'Cliente não encontrado' });
          } else {
            res.status(200).json(cliente);
          }
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
      async listarClientes() {
        try {
          const cliente = await clienteService.listarClientes();
    
          if (!cliente) {
            res.status(404).json({ error: 'Nenhum Cliente cadastrado' });
          } else {
            res.status(200).json(cliente);
          }
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    async criarPromocao(req, res) {
        const { cpf, mensagem } = req.body;
    
        try {
          const promocao = await campanhaService.criarPromocao(cpf, mensagem);
          res.status(201).json({ mensagem: 'Promoção criada com sucesso.', promotion });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      }
  }
  
  module.exports = clienteController;
  
 
  