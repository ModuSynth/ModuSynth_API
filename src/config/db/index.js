const promise = require('bluebird');
const config = require('config');

const iniOptions = {
  promiseLib: promise,
};

const pgp = require('pg-promise')(iniOptions);

const cn = {
  host: config.get(postgresql.host),
  port: config.get(postgresql.port),
  database: config.get(postgresql.database),
  min: config.get(postgresql.min),
  max: config.get(postgresql.max),
  user: config.get(postgresql.user),
  password: config.get(postgresql.password),
  applicationName: config.get(postgresql.applicationName),
  idleTimeoutMillis: config.get(postgresql.idleTimeoutMillis),
};

const db = pgp(cn);

console.log('#####################################');
db.any('SELECT version;')
    .then((data) => {
      console.log('DATA: %o', data);
    })
    .catch((err) => {
      console.log('ERROR: %o', error);
    });

module.exports = {db, pgp};
