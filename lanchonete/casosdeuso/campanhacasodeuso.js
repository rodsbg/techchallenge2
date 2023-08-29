const campanhaService = require('../../application/services/CampanhaService');

const criarCampanha = async (req, res) => {
  try {
    const campanha = await campanhaService.cadastrarCampanha(req.body);
    res.status(201).json(campanha);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    criarCampanha
  };
  