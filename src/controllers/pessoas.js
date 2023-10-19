const ExampleServices = require('../services/pessoas.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config.js')
const services = new ExampleServices();

class ExampleController {
    async Login(req, res) {
        try {
            const { email, senha } = req.body;

            const { dataValues: pessoa } = await services.FindPessoaByEmail(email);

            if (!email || !senha) {
                return res.status(401).json({ message: "Email ou senha inválido" })
            }

            if (!pessoa) {
                return res.status(401).json({ message: "Email ou senha inválido" })
            }

            if (!(await bcrypt.compare(senha, pessoa.senha))) {
                return res.status(401).json({ message: "Email ou senha inválido" })
            }

            const token = jwt.sign(
                { id: pessoa.id, email: pessoa.email, nome: pessoa.nome },
                config.secret,
            )
            return res.status(200).json({ accessToken: token });
        }
        catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    };

    async GetPessoas(req, res) {
        try {
            const users = await services.GetPessoas();
            res.status(200).json({ data: users });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async GetPessoaById(req, res) {
        try {
            const user = await services.GetPessoaById(req.params.id);
            res.status(200).json({ data: user });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async CreatePessoa(req, res) {
        try {
            const data = {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            }

            const result = await services.CreatePessoa(data);

            res.status(201).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async UpdatePessoa(req, res) {
        try {
            const data = {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            }

            const result = await services.UpdatePessoa(req.params.id, data);

            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async DeletePessoa(req, res) {
        try {
            const result = await services.DeletePessoa(req.params.id);
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    };
}

module.exports = ExampleController;