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

const getAllNodes = (request, response) => {
  const {stage_id} = request.params;
  console.log(stage_id);

  pool.query(
      'SELECT * FROM nodes WHERE stage_id=($1);',
      [stage_id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      });
};
exports.getAllNodes = getAllNodes;

const createStage = (request, response) => {
  const {name} = request.body;

  pool.query(
      'INSERT INTO stages (name) VALUES ($1) RETURNING *',
      [name],
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log(results);
        response.status(201).json({message: 'stage added', data: results.rows[0]});
      });
};

exports.createStage = createStage;
