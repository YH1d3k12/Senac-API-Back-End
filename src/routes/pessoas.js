const express = require('express');
const ExampleController = require('../controllers/pessoas.js');
const authMiddleware = require('../middleware/auth.js');

const controller = new ExampleController();
const router = express.Router();

router.post('/login', controller.Login);
router.get('/', authMiddleware, controller.GetPessoas);
router.get('/:id', authMiddleware, controller.GetPessoaById);
router.post('/', authMiddleware, controller.CreatePessoa);
router.put('/:id', authMiddleware, controller.UpdatePessoa);
router.delete('/:id', authMiddleware, controller.DeletePessoa);

module.exports = router;