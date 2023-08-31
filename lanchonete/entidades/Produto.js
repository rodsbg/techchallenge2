
const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  codigo: {
    type: Number,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    enum: ['lanche', 'acompanhamento', 'bebida', 'sobremesa'],
    required: true,
  },
  descricao:{
    type: String,
    required: true,
  },
  preco:{
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Produto', ProdutoSchema);
