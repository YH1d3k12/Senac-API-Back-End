class ExerciseCollection1Services
{
    // ********************** Exercise 1 ********************** //
    SumTwoNumbers(num1, num2)
    {
        if (!isNaN(num1) && !isNaN(num2))
        {
            const result = parseFloat(num1) + parseFloat(num2);
            return result.toFixed(2);
        }
        else
        {
            if (isNaN(num1) && isNaN(num2)) 
            {
                throw new TypeError("Both arguments should be numbers");
            } 
            else if (isNaN(num1)) 
            {
                throw new TypeError("First argument is not a number");
            } 
            else 
            {
                throw new TypeError("Second argument is not a number");
            }
        }
    }

    // ********************** Exercise 2 ********************** //
    CalculateMonthlySalary(salary, hoursWorked)
    {
        if (!isNaN(salary) && !isNaN(hoursWorked))
        {
            const result = parseFloat(salary) * parseFloat(hoursWorked);
            return result.toFixed(2);
        }
        else
        {
            if (isNaN(salary) && isNaN(hoursWorked)) 
            {
                throw new TypeError("Both arguments should be numbers");
            } 
            else if (isNaN(salary)) 
            {
                throw new TypeError("Salary is not a number");
            } 
            else 
            {
                throw new TypeError("Hours worked is not a number");
            }
        }
    }

    // ********************** Exercise 3 ********************** //
    CalculateAverageWeight(people) 
    {
        // Check if the input data is valid
        if (!people || !Array.isArray(people)) 
        {
            throw new TypeError("Invalid input data, people is not an array");
        }
    
        let totalWeight = people.reduce((sum, person) => {
            // Checks if person.weight is a number before calculation
            if (!isNaN(person.weight)) 
            {
                return sum + parseFloat(person.weight);
            }
            else
            {
                throw new TypeError("Weight should be a number");
            }
        }, 0);

        // Calculate the average weight
        const averageWeight = totalWeight / people.length;

        // Return the calculated average weight
        return averageWeight.toFixed(2);
    }

    // ********************** Exercise 4 ********************** //
    ConvertCelsiusToFahrenheit(celsius)
    {
        if (!isNaN(celsius))
        {
            const result = (9 * parseFloat(celsius) + 160) / 5;
            return result.toFixed(2);
        }
        else
        {
            throw new TypeError("Argument should be a number");
        }
    }

    // ********************** Exercise 5 ********************** //
    ConvertMilesToKilometers(miles)
    {
        console.log(miles)
        if (!isNaN(miles))
        {
            const result = parseFloat(miles) * 1.60934;
            return result.toFixed(2);
        }
        else
        {
            throw new TypeError("Argument should be a number");
        }
    }

    // ********************** Exercise 6 ********************** //
    ConvertSecondsToTime(seconds)
    {
        if (!isNaN(seconds))
        {
            let hours = Math.floor(seconds / 3600);
            seconds -= hours * 3600;

            let minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60;

            return {
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                message: `${hours} Hour(s) ${minutes} Minute(s) ${seconds} Second(s)`
            };
        }
        else
        {
            throw new TypeError("Argument should be a number");
        }
    }

    // ********************** Exercise 7 ********************** //
    ConvertKilometers(km)
    {
        if (!isNaN(km))
        {
            let m = parseFloat(km * 1000);
            let cm = parseFloat(m * 100);

            return {
                meters: m,
                centimeters: cm,
                message: `Kilometers to Meters: ${m} \n Kilometers to Centimeters: ${cm}`
            };
        }
        else
        {
            throw new TypeError("Argument should be a number");
        }
    };

    // ********************** Exercise 8 ********************** //
    CreateMultiplicationTable(number) {

        let multiplicationTable = [];

        if (!isNaN(number)) 
        {
            for (let i = 1; i <= 10; i++) 
            {
                multiplicationTable.push
                ({
                    equation: `${number} x ${i}`,
                    result: parseFloat(number) * i
                });
            }
        }
        else
        {
            throw new TypeError("Argument should be a number");
        }

        return multiplicationTable;
    }

    // ********************** Exercise 9 ********************** //
    CalcStudentGrades(grades)
    {
        // Check if the input data is valid
        if (!grades || !Array.isArray(grades)) 
        {
            throw new TypeError("Invalid input data, grades is not an array");
        };
    
        let totalScore = grades.reduce((sum, grade) => {
            // Checks if grade.score is a number before calculation
            if (!isNaN(grade.score)) 
            {
                return sum + parseFloat(grade.score);
            }
            else
            {
                throw new TypeError("Score should be a number");
            }
    
        }, 0);
    
        // Calculate the average score
        let averageScore = totalScore / grades.length;
    
        // Return the calculated average score with a message
    
        let msg = '';
    
        if(averageScore >= 7) 
        {
            msg = 'Aprovado';
        } 
        else if (averageScore >= 5) 
        {
            msg = 'Recuperação';
        } 
        else 
        {
            msg = 'Reprovado';
        };
    
        return {
            score: averageScore.toFixed(2),
            message: msg
        };
    
    }
    // ********************** Exercise 10 ********************** //
    BmiCalculator(weight, height)
    {
        let result = 0;

        if (!isNaN(weight) && !isNaN(height))
        {
            result = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
        }
        else
        {
            if (isNaN(weight) && isNaN(height)) 
            {
                throw new TypeError("Both arguments should be numbers");
            } 
            else if (isNaN(weight)) 
            {
                throw new TypeError("Weight is not a number");
            } 
            else 
            {
                throw new TypeError("Height is not a number");
            }
        
        }

        let msg = '';

        if (result <= 18.5)
        {
            msg = 'Abaixo do Peso';
        }
        else if (result <= 24.9)
        {
            msg = 'Normal';
        }
        else if (result <= 29.9)
        {
            msg = 'Acima do Peso';
        }
        else if (result <= 34.9)
        {
            msg = 'Obesidade de I grau';
        }
        else if (result <= 39.9)
        {
            msg = 'Obesidade de II grau';
        }
        else
        {
            msg = 'Obesidade de III grau';
        }

        return {
            score: result.toFixed(2),
            message: msg
        };
    }
};

module.exports = ExerciseCollection1Services;