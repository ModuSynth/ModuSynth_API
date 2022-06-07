const pool= require('../config/db/index');

const getAllStages = (request, response) => {
  pool.query('SELECT * FROM stages ORDER BY stage_id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
exports.getAllStages = getAllStages;

const createStage = (request, response) => {
  const {name, type, stage_id} = request.body;

  pool.query(
      'INSERT INTO users (name, type, stage_id) VALUES ($1, $2, $3) RETURNING *',
      [name, type, stage_id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`stage added with ID: ${results.rows[0].id}`);
      });
};

exports.createStage = createStage;
