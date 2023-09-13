const express = require('express');
const { ConvertSecondsToTime } = require('../handlers/6_convert_seconds_to_time.js');

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = ConvertSecondsToTime(
        req.body.seconds
    );

    res.status(200).json({
        hours: result.hours,
        minutes: result.minutes,
        seconds: result.seconds,
        message: result.message
    });
});

module.exports = api_router;