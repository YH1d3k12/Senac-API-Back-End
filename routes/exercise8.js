const express = require('express');
const { CreateMultiplicationTable } = require('../public/js/8_multiplication_table.js');

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = CreateMultiplicationTable(
        req.body.number
    )

    res.status(200).json({
        message: result
    });
});

export default api_router;