import express from 'express';
import { ConvertKilometers } from '../public/js/7_detailed_metric_converter.js'

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = ConvertKilometers(
        req.body.km
    )

    res.status(200).json({
        message: result
    });
});

export default api_router;