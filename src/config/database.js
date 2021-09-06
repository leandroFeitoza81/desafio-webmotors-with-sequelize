require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_SCHEMA,
  host: process.env.MYSQL_HOSTNAME,
  dialect: process.env.DB_DIALECT || 'mysql',
  storage: './__tests__/database.sqlite',
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: false,
  },
};
