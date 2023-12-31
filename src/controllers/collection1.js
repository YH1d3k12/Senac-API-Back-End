const ExerciseCollection1Services = require('../services/collection1.js');


const exercises = new ExerciseCollection1Services();


class ExerciseCollection1Controller
{
    // ********************** Exercise 1 ********************** //
    SumTwoNumbers(req, res)
    {
        try
        {
            const result = exercises.SumTwoNumbers(
                req.body.num1,
                req.body.num2
            );
        
            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }

    // ********************** Exercise 2 ********************** //
    CalculateMonthlySalary(req, res)
    {
        try
        {
            const result = exercises.CalculateMonthlySalary(
                req.body.salary,
                req.body.hoursWorked
            );

            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }

    // ********************** Exercise 3 ********************** //
    CalculateAverageWeight(req, res)
    {
        try
        {
            const result = exercises.CalculateAverageWeight(
                req.body.people
            );

            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }
    
    // ********************** Exercise 4 ********************** //
    ConvertCelsiusToFahrenheit(req, res)
    {
        try
        {
            const result = exercises.ConvertCelsiusToFahrenheit(
                req.body.celsius
            );

            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }
        
    // ********************** Exercise 5 ********************** //
    ConvertMilesToKilometers(req, res)
    {
        try
        {
            const result = exercises.ConvertMilesToKilometers(
                req.body.miles
            );

            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }

    // ********************** Exercise 6 ********************** //
    ConvertSecondsToTime(req, res)
    {
        try
        {
            const result = exercises.ConvertSecondsToTime(
                req.body.seconds
            );

            res.status(200).json({
                hours: result.hours,
                minutes: result.minutes,
                seconds: result.seconds,
                message: result.message
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }

    // ********************** Exercise 7 ********************** //
    ConvertKilometers(req, res)
    {
        try
        {
            const result = exercises.ConvertKilometers(
                req.body.km
            );

            res.status(200).json({
                meters: result.meters,
                centimeters: result.centimeters,
                message: result.message
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }
    
    // ********************** Exercise 8 ********************** //
    CreateMultiplicationTable(req, res)
    {
        try
        {
            const result = exercises.CreateMultiplicationTable(
                req.body.number
            );

            res.status(200).json({
                message: result
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }

    // ********************** Exercise 9 ********************** //
    CalcStudentGrades(req, res)
    {
        try
        {
            const result = exercises.CalcStudentGrades(
                req.body.grades
            );

            res.status(200).json({
                score: result.score,
                message: result.message
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }
    
    // ********************** Exercise 10 ********************** //
    BmiCalculator(req, res)
    {
        try
        {
            const result = exercises.BmiCalculator(
                req.body.weight,
                req.body.height
            );

            res.status(200).json({
                score: result.score,
                message: result.message
            });
        }
        catch (error)
        {
            if (error instanceof TypeError)
            {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }
}

module.exports = ExerciseCollection1Controller;