// src/app/repositories/produtoRepository.js
const Produto = require('../entidades/Produto');

const criarProduto = async (produtoData) => {
  try {
    //console.log(produtoData, "repository");
    const produto = new Produto(produtoData);
    await produto.save();
    return produto;
  } catch (error) {
    throw new Error('Erro ao cadastrar produto.');
  }
};

const editarProduto = async (produtoData) => {
  try {

  codigo = {codigo : produtoData.codigo}
  //console.log(codigo, "   " ,produtoData, "Repo");

    const produto = await Produto.findOneAndUpdate(codigo, produtoData);

    return produto;
  } catch (error) {
    throw new Error('Erro ao editar o produto.');
  }
};

const removerProduto = async (produtoId) => {
  try {
    await Produto.findOneAndDelete(produtoId);
  } catch (error) {
    throw new Error('Produto nao cadastrado.');
  }
};

const buscarProdutosPorCategoria = async (categoria) => {
  try {
    const produtos = await Produto.find({ categoria });
    return produtos;
  } catch (error) {
    throw new Error('Erro ao buscar produtos por categoria.');
  }
};

const buscarprodutoporcodigo = async (codigo) => {
  try {
    const produtos = await Produto.find({ codigo });
//    console.log(produtos,"repo");
    return produtos;
  } catch (error) {
    throw new Error('Erro ao buscar produtos por codigo.');
  }
};



module.exports = {
  criarProduto,
  editarProduto,
  removerProduto,
  buscarProdutosPorCategoria,
  buscarprodutoporcodigo,
};
