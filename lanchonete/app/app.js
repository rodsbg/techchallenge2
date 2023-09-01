const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require("swagger-jsdoc");


// Swagger configuration options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sample API",
      version: "1.0.0",
      description: "A sample API using Swagger and Express",
    },
  },
  apis: ["./interfaces/rotas/*.js"], // Path to the API routes
};

const specs = swaggerJsdoc(options);



// Configurar a conexão com o MongoDB
mongoose.connect('mongodb://mongodb:27017/techchallengelanchonete', {
//mongoose.connect('mongodb://127.0.0.1:27017/techchallengelanchonete', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error);
});

// Configuração do Express
const app = express();
app.use(bodyParser.json());


// Rota para cadastrar um cliente

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const campanharota = require('../interfaces/rotas/CampanhaRoute');
const produtorota = require('../interfaces/rotas/ProdutoRoute');
const clienterota = require('../interfaces/rotas/ClienteRoute');
const pedidorota = require('../interfaces/rotas/PedidoRoute');

const pagamentorota = require('../interfaces/rotas/PagamentoRoute');


app.use('/api', campanharota);
app.use('/api', clienterota);
app.use('/api', campanharota);
app.use('/api', pedidorota);
app.use('/api', pagamentorota);
app.use('/api', produtorota);
app.use('/api', webhookPagamentoRoute);




module.exports = app;