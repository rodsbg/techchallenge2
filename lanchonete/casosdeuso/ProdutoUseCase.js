// src/app/controllers/produtoController.js
const produtoController = require('../interfaces/controladores/ProdutoController');

const criarProduto = async (req, res) => {
  try {
    
    const produto = await produtoController.criarProduto(req.body);
    res.status(201).json(produto); 
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editarProduto = async (req, res) => {
  try {
    // console.log(codigo, "   " ,req.body, "Controller")
    const produto = await produtoController.editarProduto(req.body);
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removerProduto = async (req, res) => {
  try {
    const  cod  = req.params;
    const codigo = JSON.stringify(cod);
  //  console.log(codigo, "   ", "Controller")
    await produtoController.removerProduto(codigo);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const buscarProdutosPorCategoria = async (req, res) => {
  try {
    const { categoria } = req.params;
    const produtos = await produtoController.buscarProdutosPorCategoria(categoria);
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const buscarprodutoporcodigo = async (req, res) => {
  try {
    const { codigo } = req.params;
    const pedidos = await produtoController.buscarprodutoporcodigo(codigo);
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  criarProduto,
  editarProduto,
  removerProduto,
  buscarProdutosPorCategoria,
  buscarprodutoporcodigo,
};
