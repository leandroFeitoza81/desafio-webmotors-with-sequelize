const swaggerAutogen = require('swagger-autogen')();

const outputFiles = './swagger_outupt.json';
const endpointFiles = ['./src/routes.js'];

const doc = {
  info: {
    title: 'API de Anuncios da Webmotors.',
    description: 'Api desenvolvida para o teste prático da Webmotors.',
    version: '1.0.0',
  },
  host: 'localhost:3000/api',
  tags: [
    {
      name: 'anuncios',
      description: 'É possivel criar, editar, consultar e deletar seu anuncio.',
    },
    {
      name: 'documentation',
      description: 'Endpoint que contém a documentação desta API.',
    },
  ],
};

swaggerAutogen(outputFiles, endpointFiles, doc);
