const express = require('express');
const { SumTwoNumbers } = require('../handlers/1_sum_two_numbers.js');

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = SumTwoNumbers(
        req.body.num1,
        req.body.num2
    );

    res.status(200).json({
        message: `Sum result: ${result}`
    });
});

module.exports = api_router;