
const produtoRepository = require('../../repositorios/ProdutoRepository');

const criarProduto = async (produtoData) => {
  try {

    return await produtoRepository.criarProduto(produtoData);

  } catch (error) {
    throw new Error('Erro ao cadastrar o produto.');
  }
};

const editarProduto = async (produtoData) => {
  try {
    
    //console.log(codigo, "Controller")
    return await produtoRepository.editarProduto(produtoData);
  } catch (error) {
    throw new Error('Erro ao editar o produto.');
  }
};

const removerProduto = async (produtoId) => {
  try {
//    console.log(produtoId, "   ", "Controller");
    await produtoRepository.removerProduto(produtoId);
  } catch (error) {
    throw new Error('Erro ao remover o produto.');
  }
};

const buscarProdutosPorCategoria = async (categoria) => {
  try {
    return await produtoRepository.buscarProdutosPorCategoria(categoria);
  } catch (error) {
    throw new Error('Erro ao buscar produtos por categoria.');
  }
};

const buscarprodutoporcodigo = async (codigo) => {
  try {
    console.log(codigo);
    return await produtoRepository.buscarprodutoporcodigo(codigo);
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
