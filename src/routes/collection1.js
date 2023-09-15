// Imports
const express = require('express');
const CollectionController = require('../controllers/collection1.js');

const controller = new CollectionController();
const router = express.Router();



router.post('/1', controller.SumTwoNumbers);
router.post('/2', controller.CalculateMonthlySalary);
router.post('/3', controller.CalculateAverageWeight);
router.post('/4', controller.ConvertCelsiusToFahrenheit);
router.post('/5', controller.ConvertMilesToKilometers);
router.post('/6', controller.ConvertSecondsToTime);
router.post('/7', controller.ConvertKilometers);
router.post('/8', controller.CreateMultiplicationTable);
router.post('/9', controller.CalcStudentGrades);
router.post('/10', controller.BmiCalculator);

// ********************** Exercise 2 ********************** //

router.post('/2', (req, res) => {
    const result = CalculateMonthlySalary(
        req.body.salary,
        req.body.hoursWorked
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 3 ********************** //

router.post('/3', (req, res) => {
    const result = CalculateAverageWeight(
        req.body.people
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 4 ********************** //

router.post('/4', (req, res) => {
    const result = ConvertCelsiusToFahrenheit(
        req.body.celsius
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 5 ********************** //

router.post('/5', (req, res) => {
    const result = ConvertMilesToKilometers(
        req.body.miles
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 6 ********************** //

router.post('/6', (req, res) => {
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

router.post('/7', (req, res) => {
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

router.post('/8', (req, res) => {
    const result = CreateMultiplicationTable(
        req.body.number
    );

    res.status(200).json({
        message: result
    });
});

// ********************** Exercise 9 ********************** //

router.post('/9', (req, res) => {
    const result = CalcStudentGrades(
        req.body.grades
    );

    res.status(200).json({
        score: result.score,
        message: result.message
    });
});

// ********************** Exercise 10 ********************** //

router.post('/10', (req, res) => {
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