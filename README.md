# Teste Prático Webmotors

Uma API REST - onde é possivel realizar o cadastro, a edição, a busca e a exclusão de um anúncio.

### Tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [JEST](https://jestjs.io/pt-BR/)
- [SuperTest](https://github.com/visionmedia/supertest#readme)
- [MySQL](https://www.mysql.com/)
- [Sequelize ORM](https://sequelize.org/master/)
- [Swagger](https://www.npmjs.com/package/swagger-autogen)

### Pré-requisitos:

Para execução é necessário o Git para baixar o projeto, o NodeJS para execução e um banco de dados relacional para execução local.

### Rodando o projeto:

- Clone este repositório
  ```bash
  $ git clone https://github.com/leandroFeitoza81/desafio-webmotors-with-sequelize
  ```
- Acesse a pasta criada
  ```bash
  $ cd desafio-webmotors-with-sequelize
  ```
- Instale as dependências
  ```bash
  $ npm install
  ```
- Setup
  - Na raiz do projeto há um arquivo chamado .env.example - renomeie este arquivo para .env - depois abra o arquivo renomeado e preecha as variaveis com os seus valores - para correta conexão ao banco de dados:
    Exemplo:
  ```console
  MYSQL_USER=<seu usuario SQL>
  MYSQL_PASSWORD=<senha para conectar no banco>
  MYSQL_SCHEMA=<base de dados não precisa alterar>
  MYSQL_HOSTNAME=<seu hostaname ou 127.0.0.1>
  PORT=<não precisa alterar>
  ```
- Setup do banco de dados
  - no terminal execute:
  ```bash
  $ npx sequelize db:create
  $ npx sequelize db:migrate
  ```
- Execute a aplicação
  ```bash
  $ npm start
  ```

### Execução dos testes:

Na raiz do projeto abra um terminal e execute:

```bash
$ npm run test
```

### Autor:

- Leandro Feitoza

email leandro.feitoza8018@gmail.com
