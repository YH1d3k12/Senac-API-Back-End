const express = require('express');
const ExampleController = require('../controllers/pessoas.js');

const controller = new ExampleController();
const router = express.Router();

router.get('/', controller.GetPessoas);
router.get('/:id', controller.GetPessoaById);
router.post('/', controller.CreatePessoa);
router.put('/:id', controller.UpdatePessoa);
router.delete('/:id', controller.DeletePessoa);

module.exports = router;