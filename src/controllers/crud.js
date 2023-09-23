const CrudServices = require('../services/crud.js');

const services = new CrudServices();

class CrudController
{
    CrudGetAll(req, res)
    {
        try
        {
            const result = services.CrudGetAll();

            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    CrudGetById(req, res)
    {
        try
        {
            const result = services.CrudGetById(
                req.params.id
            );

            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    CrudAdd(req, res)
    {
        try
        {
            const result = services.CrudAdd(
                req.body.name
            );

            res.status(201).json({
                message: result
            });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    CrudUpdate(req, res)
    {
        try
        {
            const result = services.CrudUpdate(
                req.params.id,
                req.body.name
            );

            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };

    CrudDelete(req, res)
    {
        try
        {
            const result = services.CrudDelete(
                req.params.id
            );

            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            res.status(500).json({
                message: error.message
            });
        }
    };
};

module.exports = CrudController;