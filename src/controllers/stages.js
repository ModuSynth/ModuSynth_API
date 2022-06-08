const {callDB} = require('../utils');

const getAllStages = async (request, response) => {
  const data = await callDB('SELECT * FROM stages ORDER BY stage_id ASC', `Get all stages`);
  response.status(200).json(data);
};
exports.getAllStages = getAllStages;

const getAllNodes = async (request, response) => {
  const {stage_id} = request.params;
  const data = await callDB('SELECT * FROM nodes WHERE stage_id=($1);', `Nodes from stage ${stage_id}`, [stage_id]);
  response.status(200).json(data);
};
exports.getAllNodes = getAllNodes;

const createStage = async (request, response) => {
  const {name} = request.body;
  const data = await callDB('INSERT INTO stages (name) VALUES ($1) RETURNING *', `Node ${name} created`, [name]);
  response.status(201).json(data);
};
exports.createStage = createStage;
