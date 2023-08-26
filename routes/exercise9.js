const express = require('express');
const { CalcStudentGrades } = require('../public/js/9_calc_student_grade.js');

const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = CalcStudentGrades(req.body.grade1, req.body.grade2, req.body.grade3)

    res.status(200).json({
        message: `Sum result: ${result}`,
    });
});

export default api_router;