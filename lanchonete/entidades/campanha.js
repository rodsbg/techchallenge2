const mongoose = require('mongoose');

const campanhaSchema = new mongoose.Schema({
  cpf: {
    type: String,
    required: true,
  },
  campanha: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Campanha', campanhaSchema);