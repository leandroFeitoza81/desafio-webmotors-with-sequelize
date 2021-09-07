require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/api', routes);
app.all('*', (_req, res) => {
  res.status(404).json({ message: 'Endpoint não encontrado.' });
});

module.exports = app;
