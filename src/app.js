const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello New World'));

module.exports = app;
