// Imports
const express = require('express');
const { Calculator } = require('../handlers/11_calculator.js');
const { CheckNumber } = require('../handlers/12_check_number.js');
const { IsTheNumberOddOrEven } = require('../handlers/13_odd_or_even.js');
const { WhichNumberIsGreater } = require('../handlers/14_which_is_greater.js');
const { IsItATriangle } = require('../handlers/15_is_it_a_triangle.js');

const api_router = express.Router();

// ********************** Exercise 11 ********************** //

api_router.post('/11', (req, res) => {
    const result = Calculator(
        req.body.operation,
        req.body.num1,
        req.body.num2
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 12 ********************** //

api_router.post('/12', (req, res) => {
    const result = CheckNumber(
        req.body.number
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 13 ********************** //

api_router.post('/13', (req, res) => {
    const result = IsTheNumberOddOrEven(
        req.body.number
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 14 ********************** //

api_router.post('/14', (req, res) => {
    const result = WhichNumberIsGreater(
        req.body.num1,
        req.body.num2
    );

    res.status(200).json({
        who: result.who,
        message: result.msg,
    });
});

// ********************** Exercise 15 ********************** //

api_router.post('/15', (req, res) => {
    const result = IsItATriangle(
        req.body.segmentA,
        req.body.segmentB,
        req.body.segmentC
    );

    res.status(200).json({
        isTriangle: result.isItTriangle,
        message: result.msg,
    });
});

// ********************** Exercise 16 ********************** //


// ********************** Exercise 17 ********************** //


// ********************** Exercise 18 ********************** //


// ********************** Exercise 19 ********************** //


// ********************** Exercise 20 ********************** //


module.exports = api_router;