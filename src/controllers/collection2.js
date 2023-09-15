const ExerciseCollection2Services = require('../services/collection2.js');


const exercises = new ExerciseCollection2Services();


class ExerciseCollection1Controller
{
    // ********************** Exercise 11 ********************** //
    Calculator(req, res)
    {
        try
        {
            const result = exercises.Calculator(
                req.body.operation,
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

    // ********************** Exercise 12 ********************** //
    CheckNumber(req, res)
    {
        try
        {
            const result = exercises.CheckNumber(
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

    // ********************** Exercise 13 ********************** //
    IsTheNumberOddOrEven(req, res)
    {
        try
        {
            const result = exercises.IsTheNumberOddOrEven(
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

    // ********************** Exercise 14 ********************** //
    WhichNumberIsGreater(req, res)
    {
        try
        {
            const result = exercises.WhichNumberIsGreater(
                req.body.num1,
                req.body.num2
            );
        
            res.status(200).json({
                who: result.who,
                message: result.message,
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
        
    // ********************** Exercise 15 ********************** //
    IsItATriangle(req, res)
    {
        try
        {
            const result = exercises.IsItATriangle(
                req.body.segmentA,
                req.body.segmentB,
                req.body.segmentC
            );
        
            res.status(200).json({
                isTriangle: result.isItTriangle,
                message: result.message,
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

    // ********************** Exercise 16 ********************** //
    TaxCalculator(req, res)
    {
        try
        {
            const result = exercises.TaxCalculator(
                req.body.cpf,
                req.body.dependents,
                req.body.income
            );
        
            res.status(200).json({
                status: result.status,
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

    // ********************** Exercise 17 ********************** //
    CalcWeightedStudentGrades(req, res)
    {
        try
        {
            const result = exercises.CalcWeightedStudentGrades(
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

    // ********************** Exercise 18 ********************** //
    CalcCarFinalCost(req, res)
    {
        try
        {
            const result = exercises.CalcCarFinalCost(
                req.body.cost
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

    // ********************** Exercise 19 ********************** //
    FeeCalculator(req, res)
    {
        try
        {
            const result = exercises.FeeCalculator(
                req.body.capital,
                req.body.tax,
                req.body.days
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
   
    // ********************** Exercise 20 ********************** //
    IPITaxCalculator(req, res)
    {
        try
        {
            const result = exercises.IPITaxCalculator(
                req.body.ipi,
                req.body.items
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
}

module.exports = ExerciseCollection1Controller;