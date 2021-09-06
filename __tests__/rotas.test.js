const { it, expect, beforeEach, describe } = require('@jest/globals');
const request = require('supertest');
const app = require('../src/app');
const truncate = require('./utils/truncate');
const { tb_AnuncioWebmotors } = require('../src/models');

describe('Test route [GET] "/api/anuncios"', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Test if is possible list all announcements"', async () => {
    const data = [
      {
        ano: 1990,
        marca: 'Chevrolet',
        modelo: 'Opala',
        observacao: 'Vai rodando para qualquer lugar.',
        quilometragem: 186000,
        versao: '2.5 Comodoro SL/E',
      },
    ];

    tb_AnuncioWebmotors.create(data[0]);
    const res = await request(app).get('/api/anuncios');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(data);
  });

  it('Test if not exists annoucement in database. Return um empty array', async () => {
    const res = await request(app).get('/api/anuncios');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(expect.arrayContaining([]));
  });
});

describe('Test route [POST] "/api/anuncios"', () => {
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
});
