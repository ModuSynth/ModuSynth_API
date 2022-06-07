const express = require('express');
const app = express();

const hpp = require('hpp');
const indexRouter = require('../../routes');

app.use(hpp());
app.use(express.urlencoded({extended: true, limit: '1mb'}));
app.use(express.json({limit: '1mb'}));

// no body with GET request
app.use((req, res, next) => {
  if (req.method === 'GET') req.body = undefined;
  next();
});

app.use(function(req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.get('/', (request, response) => {
  response.json({info: 'Node.js, Express, and Postgres API'});
});

app.use('/stages', indexRouter.stages);
app.use('/nodes', indexRouter.nodes);


// catch 404 not found
app.use((req, res, next) => {
  console.error('path', req.path);
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
