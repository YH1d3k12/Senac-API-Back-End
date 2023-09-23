const names = Array('John', 'Paul', 'George', 'Ringo');

class CrudRepository
{
    CrudGetAll()
    {
        return names;
    }

    CrudGetById(index)
    {
        return names[index];
    }

    CrudAdd(name)
    {
        names.push(name);
        return {message: `Added ${name}`};
    }

    CrudUpdate(index, name)
    {
        const msg = `Updated ${names[index]} to ${name}`
        names[index] = name;
        return {message: msg};
    }

    CrudDelete(index)
    {
        const deleted = names[index];
        names.splice(index, 1);
        return {message: `Deleted ${deleted}`};
    }
}

module.exports = CrudRepository;