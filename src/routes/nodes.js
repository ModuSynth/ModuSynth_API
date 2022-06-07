module.exports = (router, controller) => {
  router.get('/allNodes', controller.getAllNodes);
  return router;
};
