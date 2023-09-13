// Imports

const express = require('express');
const { SumTwoNumbers } = require('../handlers/1_sum_two_numbers.js');
const { CalculateMonthlySalary } = require('../handlers/2_monthly_salary.js');
const { CalculateAverageWeight } = require('../handlers/3_average_weight.js');
const { ConvertCelsiusToFahrenheit } = require('../handlers/4_convert_to_fahrenheit.js');
const { ConvertMilesToKilometers } = require('../handlers/5_convert_to_kilometers.js');
const { ConvertSecondsToTime } = require('../handlers/6_convert_seconds_to_time.js');
const { ConvertKilometers } = require('../handlers/7_detailed_metric_converter.js');
const { CreateMultiplicationTable } = require('../handlers/8_multiplication_table.js');
const { CalcStudentGrades } = require('../handlers/9_calc_student_grade.js');
const { BmiCalculator } = require('../handlers/10_bmi_calculator.js');


const api_router = express.Router();

// ********************** Exercise 1 ********************** //

api_router.post('/1', (req, res) => {
    const result = SumTwoNumbers(
        req.body.num1,
        req.body.num2
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 2 ********************** //

api_router.post('/2', (req, res) => {
    const result = CalculateMonthlySalary(
        req.body.salary,
        req.body.hoursWorked
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 3 ********************** //

api_router.post('/3', (req, res) => {
    const result = CalculateAverageWeight(
        req.body.people
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 4 ********************** //

api_router.post('/4', (req, res) => {
    const result = ConvertCelsiusToFahrenheit(
        req.body.celsius
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 5 ********************** //

api_router.post('/5', (req, res) => {
    const result = ConvertMilesToKilometers(
        req.body.miles
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 6 ********************** //

api_router.post('/6', (req, res) => {
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

// ********************** Exercise 7 ********************** //

api_router.post('/7', (req, res) => {
    const result = ConvertKilometers(
        req.body.km
    );

    res.status(200).json({
        meters: result.meters,
        centimeters: result.centimeters,
        message: result.message
    });
});

// ********************** Exercise 8 ********************** //

api_router.post('/8', (req, res) => {
    const result = CreateMultiplicationTable(
        req.body.number
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 9 ********************** //

api_router.post('/9', (req, res) => {
    const result = CalcStudentGrades(
        req.body.grades
    );

    res.status(200).json({
        score: result.score,
        message: result.message
    });
});

// ********************** Exercise 10 ********************** //

api_router.post('/10', (req, res) => {
    const result = BmiCalculator(
        req.body.weight,
        req.body.height
    );

    res.status(200).json({
        score: result.score,
        message: result.message
    });
});

module.exports = api_router;