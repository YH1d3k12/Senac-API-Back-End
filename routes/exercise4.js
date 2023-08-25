import express from 'express';
import { ConvertCelsiusToFahrenheit } from '../public/js/4_convert_to_fahrenheit.js';

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = ConvertCelsiusToFahrenheit(
        req.body.celsius
    )

    res.status(200).json({
        message: `The temperature in fahrenheit is: ${result}`,
    });
});

export default api_router;