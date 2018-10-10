const router = require('express').Router();
const controller = require('../../controllers/controller');

router.route('/')
  .get(controller.findAll)
  .post(controller.newUser)

router.route('/:id/data/')
  .post(controller.addDataset)
  .get(controller.findDatasets)

// router.route('/:id/data/:dataid')
//   .get(controller.getData)

module.exports = router;

