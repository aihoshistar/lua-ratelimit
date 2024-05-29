const express = require('express');
const morgan = require('morgan');
const compress = require('compression');

const app = express();

app.use(morgan('combined'))

app.use(compress());

module.exports = app;