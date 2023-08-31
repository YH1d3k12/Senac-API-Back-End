const express = require('express');
const { CalcStudentGrades } = require('../public/js/9_calc_student_grade.js');

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = CalcStudentGrades(
        req.body.grades
    );

    res.status(200).json({result});
});

module.exports = api_router;