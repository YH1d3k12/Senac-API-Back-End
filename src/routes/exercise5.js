const express = require('express');
const { ConvertMilesToKilometers } = require('../handlers/5_convert_to_kilometers.js');

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = ConvertMilesToKilometers(
        req.body.miles
    );

    res.status(200).json({
        message: result
    });
});

module.exports = api_router;