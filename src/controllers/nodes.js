const {callDB} = require('../utils');

const getAllNodes = async (request, response) => {
  const data = await callDB('SELECT * FROM nodes ORDER BY node_id ASC', `Get all nodes`);
  response.status(200).json(data);
};
exports.getAllNodes = getAllNodes;

const createNode = async (request, response) => {
  const {name, type, stage_id} = request.body;
  const data = await callDB(
      'INSERT INTO nodes (name, type, stage_id) VALUES ($1, $2, $3) RETURNING *',
      `Get all nodes`,
      [name, type, stage_id],
  );
  response.status(201).json(data);
};

exports.createNode = createNode;
