const express = require('express');
const ExampleController = require('../controllers/pessoas.js');

const controller = new ExampleController();
const router = express.Router();

router.get('/', controller.GetPessoas);
router.post('/', controller.CreatePessoas);

module.exports = router;