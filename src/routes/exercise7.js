const express = require('express');
const { ConvertKilometers } = require('../handlers/7_detailed_metric_converter.js');

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = ConvertKilometers(
        req.body.km
    );

    res.status(200).json({
        meters: result.meters,
        centimeters: result.centimeters,
        message: result.message
    });
});

module.exports = api_router;