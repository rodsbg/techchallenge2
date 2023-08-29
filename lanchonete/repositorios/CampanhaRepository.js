const Campanha = require('../entidades/Campanha');

const criarCampanha = async (CampanhaData) => {
  try {
    const campanha = new Campanha(CampanhaData);
    await campanha.save();
    return campanha;
  } catch (error) {
    throw new Error('Erro ao criar campanha.');
  }
};

async function listarCampanhas() {
    return Campanha.find();
  }
module.exports = { criarCampanha, listarCampanhas };