const express = require('express');
const ExerciseCollection2Controller = require('../controllers/collection2.js');

const controller = new ExerciseCollection2Controller();
const router = express.Router();


router.post('/11', controller.Calculator);
router.post('/12', controller.CheckNumber);
router.post('/13', controller.IsTheNumberOddOrEven);
router.post('/14', controller.WhichNumberIsGreater);
router.post('/15', controller.IsItATriangle);
router.post('/16', controller.TaxCalculator);
router.post('/17', controller.CalcWeightedStudentGrades);
router.post('/18', controller.CalcCarFinalCost);
router.post('/19', controller.FeeCalculator);
router.post('/20', controller.IPITaxCalculator);

module.exports = router;