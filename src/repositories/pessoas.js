const Pessoas = require('../models/pessoas.js');


class ExampleRepository {
    async GetPessoas() {
        const pessoas = Pessoas.findAll();
        return pessoas;
    };

    async GetPessoaById(id) {
        const pessoa = Pessoas.findByPk(id);
        return pessoa;
    };

    async CreatePessoa(data) {
        return Pessoas.create({
            nome: data.nome,
            email: data.email,
            senha: data.senha
        });
    };

    async UpdatePessoa(id, data) {
        Pessoas.update(
            {
                nome: data.nome,
                email: data.email,
                senha: data.senha
            },
            {
                where: { id: id }
            }
        );
    };

    async DeletePessoa(id) {
        Pessoas.destroy(
            {
                where: { id: id }
            }
        );
    };

    async FindPessoaByEmail(email) {
        return Pessoas.findOne({
            where: {
                email: email
            }
        });
    }
};

module.exports = ExampleRepository;