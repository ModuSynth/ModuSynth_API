module.exports = (router, controller) => {
  router.get('/all', controller.getAllStages);
  router.get('/:stage_id/nodes', controller.getAllNodes);
  router.post('/', controller.createStage);
  return router;
};

