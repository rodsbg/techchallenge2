const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require("swagger-jsdoc");

const ClienteService = require('./application/services/ClienteService');
const ClienteRepository = require('./interfaces/repositories/ClienteRepository');
const ClienteController = require('./interfaces/controllers/ClienteController');
const CampanhaService = require('./application/services/CampanhaService');
const ProdutoRoute = require('./application/routes/ProdutoRoute');
const clienteRoute = require('./application/routes/ClienteRoute');
const campanhaRoute = require('./application/routes/CampanhaRoute');
const pedidoRoute = require('./application/routes/PedidoRoute');
const pagamentoRoute = require('./application/routes/FakecheckoutRoute');


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
  apis: ["./application/routes/*.js"], // Path to the API routes
};

const specs = swaggerJsdoc(options);



// Configurar a conexão com o MongoDB
mongoose.connect('mongodb://lanchonete-mongodb-1:27017/techchallengelanchonete', {
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
app.use('/api', ProdutoRoute);
app.use('/api', clienteRoute);
app.use('/api', campanhaRoute);
app.use('/api', pedidoRoute);
app.use('/api', pagamentoRoute);



module.exports = app;