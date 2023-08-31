const campanhaController = require('../interfaces/controladores/CampanhaController');

const criarCampanha = async (req, res) => {
  try {
    const campanha = await campanhaController.cadastrarCampanha(req.body);
    res.status(201).json(campanha);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    criarCampanha
  };
  