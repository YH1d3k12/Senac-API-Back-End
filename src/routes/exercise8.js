const express = require('express');
const { CreateMultiplicationTable } = require('../handlers/8_multiplication_table.js');

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = CreateMultiplicationTable(
        req.body.number
    );

    res.status(200).json({
        message: result
    });
});

module.exports = api_router;