const express = require('express');
const ExerciseCollection1Controller = require('../controllers/collection1.js');

const controller = new ExerciseCollection1Controller();
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

module.exports = router;