const ExampleServices = require('../services/pessoas.js');

const services = new ExampleServices();

class ExampleController
{
    async GetPessoas(req, res)
    {
        try
        {
            const users = await services.GetPessoas();
            res.status(200).json({ data: users });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    async CreatePessoas(req, res)
    {
        try
        {
            const result = await services.CreatePessoas(
                req.body.nome,
                req.body.email,
                req.body.senha
            );

            res.status(201).json(result);
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };
}

module.exports = ExampleController;