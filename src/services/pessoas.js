const PessoasRepository = require('../repositories/pessoas.js');

const repositories = new PessoasRepository();

class ExampleServices
{
    async GetPessoas()
    {
        const users = await repositories.GetPessoas(); 
        return users
    }

    async CreatePessoas(nome, email, senha)
    {
        const result = await repositories.CreatePessoas(nome, email, senha);
        return result;
    }
}

module.exports = ExampleServices;