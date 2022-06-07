const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'modusynth',
  host: 'localhost',
  database: 'modusynth',
  password: '0000',
  port: 5432,
});

pool.query('SELECT version();')
    .then((data) => {
      console.log('Database:', data.rows[0].version);
    })
    .catch((err) => {
      console.log('ERROR: %o', err);
    });

module.exports = pool;
