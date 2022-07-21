import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/user';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes para a rota de LOGIN com dados válidos', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        id: 1,
        username: 'User',
        role: 'user',
        email: 'user@@user.com',
        password: '$2a$12$Kyr5ZB7XC6U1ukkOTFaD3uI/XObrPsXQnE7ZO0u5nGhQLqeUnoUHm'
      } as User);
  });

  afterEach(() => {
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Testa rota POST/login com dados CORRETOS de USER', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'user@user.com',
        password: 'user_123',
      });

    // Se o login foi feito com sucesso, retorna status http 200;
    expect(chaiHttpResponse.status).to.be.equal(200);

    // Retorno esperado
    /*
      {
       "user": {
          "id": 1,
          "username": "Admin",
          "role": "admin",
          "email": "admin@admin.com"
      },
        "token": "123.456.789" 
      } 
    */

    // Espera que contenha todas propriedades    
    expect(chaiHttpResponse.body.user).to.have.property('id');
    expect(chaiHttpResponse.body.user).to.have.property('username');
    expect(chaiHttpResponse.body.user).to.have.property('role');
    expect(chaiHttpResponse.body.user).to.have.property('email');
    expect(chaiHttpResponse.body).to.have.property('token');

    // Password não deve vir no retorno
    expect(chaiHttpResponse.body.user).to.not.have.property('password');
  });
});

describe('Testes para a rota de LOGIN com Senha inválida', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        id: 1,
        username: 'User',
        role: 'user',
        email: 'user@@user.com',
        password: '$2a$12$Kyr5ZB7XC6U1ukkOTFaD3uI/XObrPsXQnE7ZO0u5nGhQLqeUnoUHm'
      } as User);
  });

  afterEach(() => {
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Testa rota POST/ Login - Campo Password vazio', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'user@user.com',
        password: '',
      });

    // Espera mensagem de erro como retorno
    expect(chaiHttpResponse.body.message).to.be.eq('All fields must be filled');

    // Status deve ser 400
    expect(chaiHttpResponse.status).to.be.eq(400);
  });

  it('Testa rota POST/ Login - Campo Password não passado no body', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'user@user.com',
      });

    // Espera mensagem de erro como retorno
    expect(chaiHttpResponse.body.message).to.be.eq('All fields must be filled');

    // Status deve ser 400
    expect(chaiHttpResponse.status).to.be.eq(400);
  });

  it('Testa rota POST/ Login - USER com SENHA INCORRETA', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'user@user.com',
        password: 'incorrect_password',
      });

    // Espera mensagem de erro como retorno
    expect(chaiHttpResponse.body.message).to.be.eq('Incorrect email or password');

    // Status deve ser 401
    expect(chaiHttpResponse.status).to.be.eq(401);
  });

  it('Testa rota POST/ Login - USER com SENHA INVÁLIDA', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'user@user.com',
        password: '12',
      });

    // Espera mensagem de erro como retorno
    expect(chaiHttpResponse.body.message).to.be.eq('Incorrect email or password');

    // Status deve ser 401
    expect(chaiHttpResponse.status).to.be.eq(401);
  });
})

describe('Testes para a rota de LOGIN sem email', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({
        id: 1,
        username: 'User',
        role: 'user',
        email: 'user@@user.com',
        password: '$2a$12$Kyr5ZB7XC6U1ukkOTFaD3uI/XObrPsXQnE7ZO0u5nGhQLqeUnoUHm'
      } as User);
  });

  afterEach(() => {
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Testa rota POST/ Login - Campo Email VAZIO', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        email: '',
        password: 'user_123',
      });

    // Espera mensagem de erro como retorno
    expect(chaiHttpResponse.body.message).to.be.eq('All fields must be filled');

    // Status deve ser 400
    expect(chaiHttpResponse.status).to.be.eq(400);
  });

  it('Testa rota POST/ Login - Campo Email não passado no body', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
        password: 'user_123',
      });

    // Espera mensagem de erro como retorno
    expect(chaiHttpResponse.body.message).to.be.eq('All fields must be filled');

    // Status deve ser 400
    expect(chaiHttpResponse.status).to.be.eq(400);
  });
})