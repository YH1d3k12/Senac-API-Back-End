const { SumTwoNumbers } = require('../services/1_sum_two_numbers.js');
const { CalculateMonthlySalary } = require('../services/2_monthly_salary.js');
const { CalculateAverageWeight } = require('../services/3_average_weight.js');
const { ConvertCelsiusToFahrenheit } = require('../services/4_convert_to_fahrenheit.js');
const { ConvertMilesToKilometers } = require('../services/5_convert_to_kilometers.js');
const { ConvertSecondsToTime } = require('../services/6_convert_seconds_to_time.js');
const { ConvertKilometers } = require('../services/7_detailed_metric_converter.js');
const { CreateMultiplicationTable } = require('../services/8_multiplication_table.js');
const { CalcStudentGrades } = require('../services/9_calc_student_grade.js');
const { BmiCalculator } = require('../services/10_bmi_calculator.js');

const exercicio1 = new SumTwoNumbers();
const exercicio2 = new CalculateMonthlySalary();
const exercicio3 = new CalculateAverageWeight();
const exercicio4 = new ConvertCelsiusToFahrenheit();
const exercicio5 = new ConvertMilesToKilometers();
const exercicio6 = new ConvertSecondsToTime();
const exercicio7 = new ConvertKilometers();
const exercicio8 = new CreateMultiplicationTable();
const exercicio9 = new CalcStudentGrades();
const exercicio10 = new BmiCalculator();



class CollectionController
{
    // ********************** Exercise 1 ********************** //
    SumTwoNumbers(req, res)
    {
        try
        {
            const result = exercicio1.SumTwoNumbers(
                req.body.num1,
                req.body.num2
            );
        
            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            //Se o error for typeerror, é porque não foi passado um número
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
            else if (error instanceof SyntaxError)
            {
                res.status(500).json({
                    message: "Syntax Error"
                });
            }
        }
    }


}

module.exports = CollectionController;