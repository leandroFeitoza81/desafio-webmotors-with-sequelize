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

  it('Test returns went invalid URL', async () => {
    const res = await request(app).get('/api/anunciossss/');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Endpoint não encontrado.');
  });
});

describe('Test route [GET] "/api/anuncios/:id"', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Test if is possible make search a annuouncement by id', async () => {
    const data = [
      {
        id: 1,
        ano: 1990,
        marca: 'Chevrolet',
        modelo: 'Opala',
        observacao: 'Vai rodando para qualquer lugar.',
        quilometragem: 186000,
        versao: '2.5 Comodoro SL/E',
      },
    ];

    tb_AnuncioWebmotors.create(data[0]);
    const res = await request(app).get('/api/anuncios/1');

    expect(res.statusCode).toBe(200);
    expect(res.body.marca).toBeTruthy();
    expect(res.body.marca).toEqual('Chevrolet');
  });

  it('Test if returns is expected when using invalid id', async () => {
    const res = await request(app).get('/api/anuncios/99999');
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toEqual('Anúncio não encontrado.');
  });

  it('Test returns went invalid URL', async () => {
    const res = await request(app).get('/api/anunciossss/1');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Endpoint não encontrado.');
  });
});

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

  it('Test the return from api when passing missing parameters', async () => {
    const res = await request(app).post('/api/anuncios').send({
      marca: 'Chevrolet',
      modelo: 'Opala',
      versao: '2.5 Comodoro SL/E',
      ano: '1990',
      quilometragem: '186000',
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Campo inválido ou não preenchido.');
  });

  it('Test returns went invalid URL', async () => {
    const res = await request(app).post('/api/anunciossss/1').send({
      ano: 1990,
      marca: 'Chevrolet',
      modelo: 'Opala',
      observacao: 'Vai rodando para qualquer lugar.',
      quilometragem: 186000,
      versao: '2.5 Comodoro SL/E',
    });
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Endpoint não encontrado.');
  });
});

describe('Test route [PUT] "/api/anuncios/:id"', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Test return from api when passing invalid id', async () => {
    const res = await request(app).put('/api/anuncios/99');
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual('Id inválido ou não existe na base de dados.');
  });

  it('Test if is possible update an announcement', async () => {
    const data = [
      {
        id: 1,
        ano: 1990,
        marca: 'Chevrolet',
        modelo: 'Opala',
        observacao: 'Vai rodando para qualquer lugar.',
        quilometragem: 186000,
        versao: '2.5 Comodoro SL/E',
      },
    ];

    await tb_AnuncioWebmotors.create(data[0]);

    const res = await request(app).put('/api/anuncios/1').send({
      id: 1,
      marca: 'Chevrolet',
      modelo: 'Opala',
      versao: '2.5 Comodoro SL/E',
      ano: 1990,
      quilometragem: 186000,
      observacao: 'Motivo da venda? Vou comprar uma bicicleta.',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.observacao).toEqual('Motivo da venda? Vou comprar uma bicicleta.');
  });

  it('Test returns went invalid URL', async () => {
    const res = await request(app).put('/api/anunncios/1').send({
      marca: 'Chevrolet',
      modelo: 'Opala',
      versao: '2.5 Comodoro SL/E',
      ano: 1990,
      quilometragem: 186000,
      observacao: 'Motivo da venda? Vou comprar uma bicicleta.',
    });
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Endpoint não encontrado.');
  });
});

describe('Test route [DELETE] "/api/anuncios/:id"', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Test if is possible remove a announcement', async () => {
    const data = [
      {
        id: 1,
        ano: 1990,
        marca: 'Chevrolet',
        modelo: 'Opala',
        observacao: 'Vai rodando para qualquer lugar.',
        quilometragem: 186000,
        versao: '2.5 Comodoro SL/E',
      },
    ];

    tb_AnuncioWebmotors.create(data[0]);
    const res = await request(app).delete('/api/anuncios/1');
    expect(res.statusCode).toBe(204);
  });

  it('Test if sent an id that does not exists. Return is expected', async () => {
    const res = await request(app).delete('/api/anuncios/99999999');
    expect(res.statusCode).toBe(404);
  });

  it('Test returns went invalid URL', async () => {
    const res = await request(app).delete('/api/anunncios/1').send({
      marca: 'Chevrolet',
      modelo: 'Opala',
      versao: '2.5 Comodoro SL/E',
      ano: 1990,
      quilometragem: 186000,
      observacao: 'Motivo da venda? Vou comprar uma bicicleta.',
    });
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Endpoint não encontrado.');
  });
});
