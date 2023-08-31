const express = require('express');
const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API da Lanchonete',
      version: '2.0.0',
    },
  },
  apis: ['./rotas/*.js'], // Caminho para as definições das rotas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerSpec),
};
