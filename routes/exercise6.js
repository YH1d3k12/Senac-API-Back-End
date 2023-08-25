const express = require('express');
const { ConvertSecondsToTime } = require('../public/js/6_convert_seconds_to_time.js');

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = ConvertSecondsToTime(
        req.body.seconds
    )

    res.status(200).json({
        message: result
    });
});

export default api_router;