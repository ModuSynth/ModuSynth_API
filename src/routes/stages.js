module.exports = (router, controller) => {
  router.get('/allStages', controller.getAllStages);
  return router;
};

