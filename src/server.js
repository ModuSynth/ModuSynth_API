const express = require('express');
const app = express();
const http2 = require('http');
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const onListening = (server) => () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port  ${addr.port}`;
  console.log(`
 --------------------------------------

  ModuSynth_API started on ${bind}
  
 --------------------------------------
 `);
};

try {
  const app = require('./config/server/');
  const server = http2.createServer(app);
  server.listen(port);
  server.on('listening', onListening(server));
} catch (err) {
  console.error('Error starting server :  ', err);
}

/* app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
 */
