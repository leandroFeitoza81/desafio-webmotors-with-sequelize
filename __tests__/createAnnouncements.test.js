const { it, expect, beforeEach, describe } = require('@jest/globals');
const request = require('supertest');
const app = require('../src/app');
const truncate = require('./utils/truncate');
const { tb_AnuncioWebmotors } = require('../src/models');

describe('Test route [POST] "/api/anuncios"', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Test create announcement at route "/api/anuncios"', async () => {
    const res = await request(app).post('/api/anuncios').send({
      marca: 'Chevrolet',
      modelo: 'Opala',
      versao: '2.5 Comodoro SL/E',
      ano: '1990',
      quilometragem: '186000',
      observacao: 'Vai rodando para qualquer lugar.',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBeTruthy();
  });

  it('Test return from api when passing missing parameters', async () => {
    const res = await request(app).post('/api/anuncios').send({
      marca: 'Chevrolet',
      modelo: 'Opala',
      versao: '2.5 Comodoro SL/E',
      ano: '1990',
      quilometragem: '186000',
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual('Campo inválido ou não preenchido.');
  });
});
