const express = require('express');
const nodesRouter = require('./nodes');
const stagesRouter = require('./stages');
const controllers = require('../controllers');

const router = () => new express.Router();


exports.nodes = nodesRouter(router(), controllers.nodes);
exports.stages = stagesRouter(router(), controllers.stages);
