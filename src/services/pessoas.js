const PessoasRepository = require('../repositories/pessoas.js');

const repositories = new PessoasRepository();

class ExampleServices {
    async GetPessoas() {
        const users = repositories.GetPessoas();
        return users;
    }

    async GetPessoaById(id) {
        const user = repositories.GetPessoaById(id);
        return user;
    }

    async CreatePessoa(data) {
        const result = repositories.CreatePessoa(data);
        return result;
    }

    async UpdatePessoa(id, data) {
        const result = repositories.UpdatePessoa(id, data);
        return result;
    }

    async DeletePessoa(id) {
        const result = repositories.DeletePessoa(id);
        return result;
    }

    async FindPessoaByEmail(email) {
        return repositories.FindPessoaByEmail(email);
    }
}

module.exports = ExampleServices;