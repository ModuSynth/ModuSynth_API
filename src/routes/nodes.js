module.exports = (router, controller) => {
  router.get('/nodes', controller.getAllNodes);
  router.post('/', controller.createNode);
  return router;
};
