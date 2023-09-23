const CrudRepository = require('../repositories/crud.js');

const repositories = new CrudRepository();

class CrudServices
{
    CrudGetAll()
    {
        return repositories.CrudGetAll();
    }

    CrudGetById(index)
    {
        return repositories.CrudGetById(index);
    }

    CrudAdd(name)
    {
        return repositories.CrudAdd(name);
    }

    CrudUpdate(index, name)
    {
        return repositories.CrudUpdate(index, name);
    }

    CrudDelete(index)
    {
        return repositories.CrudDelete(index);
    }
};

module.exports = CrudServices;