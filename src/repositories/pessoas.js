const Pessoas = require('../models/pessoas.js');

class ExampleRepository
{
    async GetPessoas()
    {
        const pessoas = await Pessoas.findAll();
        return pessoas;
    };

    async GetPessoasById(id)
    {
        return Pessoas.findOne({
            where: {
                id: this.id
            }
        });
    };

    async CreatePessoas(nome, email, senha)
    {
        await Pessoas.create({
            nome: this.nome,
            email: this.email,
            senha: this.senha
        });          
    };
};

module.exports = ExampleRepository;