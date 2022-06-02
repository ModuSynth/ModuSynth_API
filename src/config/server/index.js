const express = require('express');
const app = express();

const hpp = require('hpp');

app.use(hpp());

app.use(function(req, res, next) {
  console.log('Time:', Date.now());
  next();
});

module.exports = app;
