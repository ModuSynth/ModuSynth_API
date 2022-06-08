const pool= require('../config/db/index');

module.exports = async function(statement, message, params = null) {
  const data = await pool.query(statement, params)
      .then((res) => {
        return res.rows;
      })
      .catch((err) => console.error('Error executing query', err.stack));
  return {message, data};
};
