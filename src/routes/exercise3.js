const express = require('express');
const { CalculateAverageWeight } = require('../handlers/3_average_weight.js');

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = CalculateAverageWeight(
        req.body.people
    );

    res.status(200).json({
        message: result
    });
});

module.exports = api_router;