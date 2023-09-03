const express = require('express');
const { ConvertCelsiusToFahrenheit } = require('../handlers/4_convert_to_fahrenheit.js');

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = ConvertCelsiusToFahrenheit(
        req.body.celsius
    );

    res.status(200).json({
        message: `The temperature in fahrenheit is: ${result}`
    });
});

module.exports = api_router;