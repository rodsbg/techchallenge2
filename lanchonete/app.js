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
  apis: ["./rotas/*.js"], // Path to the API rotas
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

const produtorota = require('./rotas/produtorota');
const clienterota = require('./rotas/clienterota');
const campanharota = require('./rotas/rotas/campanharota');
const pedidorota = require('./rotas/rotas/pedidorota');
const pagamentorota = require('./rotas/pagamentorota');


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api', produtorota);
app.use('/api', clienterota);
app.use('/api', campanharota);
app.use('/api', pedidorota);
app.use('/api', pagamentorota);



module.exports = app;