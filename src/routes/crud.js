const express = require('express');
const CrudController = require('../controllers/crud.js');

const controller = new CrudController();
const router = express.Router();


router.get('/v1/crud/', controller.CrudGetAll);
router.get('/v1/crud/:id', controller.CrudGetById);
router.post('/v1/crud/', controller.CrudAdd);
router.put('/v1/crud/:id', controller.CrudUpdate);
router.delete('/v1/crud/:id', controller.CrudDelete);

module.exports = router;