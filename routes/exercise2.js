const express = require('express');
const { CalculateMonthlySalary } = require('../public/js/2_monthly_salary.js');


const api_router = express.Router();

api_router.post('/', (req, res) => {
    const result = CalculateMonthlySalary(
        req.body.salary,
        req.body.hoursWorked
    );

    res.status(200).json({
        message: `This month payment is: ${result}`
    });
});

module.exports = api_router;