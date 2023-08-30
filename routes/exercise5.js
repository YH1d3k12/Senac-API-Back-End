const express = require('express');
const { ConvertMilesToKilometers } = require('../public/js/5_convert_to_kilometers.js');

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = ConvertMilesToKilometers(
        req.body.miles
    );

    res.status(200).json({
        message: `The distance in kilometers is: ${result}`
    });
});

module.exports = api_router;