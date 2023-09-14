// Imports
const express = require('express');
const { Calculator } = require('../services/11_calculator.js');
const { CheckNumber } = require('../services/12_check_number.js');
const { IsTheNumberOddOrEven } = require('../services/13_odd_or_even.js');
const { WhichNumberIsGreater } = require('../services/14_which_is_greater.js');
const { IsItATriangle } = require('../services/15_is_it_a_triangle.js');
const { TaxCalculator } = require('../services/16_tax_calculator.js');
const { CalcWeightedStudentGrades } = require('../services/17_calc_weighted_student_grades.js');
const { CalcCarFinalCost } = require('../services/18_car_final_cost.js');
const { FeeCalculator } = require('../services/19_fee_calculator.js');
const { IPITaxCalculator } = require('../services/20_ipi_tax_calculator.js');

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
        message: result.message,
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
        message: result.message,
    });
});

// ********************** Exercise 16 ********************** //

api_router.post('/16', (req, res) => {
    const result = TaxCalculator(
        req.body.cpf,
        req.body.dependents,
        req.body.income
    );

    res.status(200).json({
        status: result.status,
        message: result.message
    });
});

// ********************** Exercise 17 ********************** //

api_router.post('/17', (req, res) => {
    const result = CalcWeightedStudentGrades(
        req.body.grades
    );

    res.status(200).json({
        score: result.score,
        message: result.message
    });
});

// ********************** Exercise 18 ********************** //

api_router.post('/18', (req, res) => {
    const result = CalcCarFinalCost(
        req.body.cost
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 19 ********************** //

api_router.post('/19', (req, res) => {
    const result = FeeCalculator(
        req.body.capital,
        req.body.tax,
        req.body.days
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 20 ********************** //

api_router.post('/20', (req, res) => {
    const result = IPITaxCalculator(
        req.body.ipi,
        req.body.items
    );

    res.status(200).json({
        message: result
    });
});

module.exports = api_router;