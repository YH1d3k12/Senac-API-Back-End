class ExerciseCollection2Services
{
    // ********************** Exercise 11 ********************** //
    Calculator(operation, num1, num2)
    {
        if (!isNaN(num1) && !isNaN(num2))
        {
            let x = parseFloat(num1);
            let y = parseFloat(num2);
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
    
        let result = 0;
    
        switch (operation) 
        {
            case 'sum':
                result = x + y;
                break;
    
            case 'subtract':
                result = x - y;
                break;
            
            case 'multiply':
                result = x * y;
                break;
    
            case 'divide':
                result = x / y;
                break;
            default:
                throw new TypeError("Invalid operation argument");
                break;
        }
    
        return result;
    }
    // ********************** Exercise 12 ********************** //
    CheckNumber(number)
    {
        let msg = '';
    
        if (!isNaN(number))
        {
            if (number > 0)
            {
                msg = 'Positive';
            }
            else if (number < 0)
            {
                msg = 'Negative';
            }
            else
            {
                msg = 'Neutral';
            }
        }
        else
        {
            throw new TypeError("Argument should be a number");
        }
    
        return msg;
    }

    // ********************** Exercise 13 ********************** //
    IsTheNumberOddOrEven(number)
    {
        let msg = '';
    
        if (!isNaN(number))
        {
            parseFloat(number);
    
            if (number%2 == 0)
            {
                msg = 'Even';
            }
            else
            {
                msg = 'Odd';
            }
        }
        else
        {
            throw new TypeError("Argument should be a number");
        }
    
        return msg;
    }

    // ********************** Exercise 14 ********************** //
    WhichNumberIsGreater(num1, num2)
    {
        if (!isNaN(num1) && !isNaN(num2))
        {
            let msg = '';
            let result = '';
            let x = parseFloat(num1);
            let y = parseFloat(num2);
    
            if (x > y)
            {
                result = 'x';
                msg = `${x} is greater than ${y} `;
            }
            else if (x < y)
            {
                result = 'y';
                msg = `${y} is greater than ${x} `;
            }
            else
            {
                result = 'none';
                msg = `${x} and ${y} are the same`;
            }
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
    
        return {
            who: result,
            message: msg
        };
    
    }

    // ********************** Exercise 15 ********************** //
    IsItATriangle(segmentA, segmentB, segmentC)
    {
        if (!isNaN(segmentA) && !isNaN(segmentB) &&!isNaN(segmentC))
        {
            let isTriangle = false;
            let msg = 'is not a triangle';
    
            let A = parseFloat(segmentA);
            let B = parseFloat(segmentB);
            let C = parseFloat(segmentC);
    
            if (A + B > C && A + C > B && B + C > A)
            {
                isTriangle = true;
                
                if (A == B && A == C && B == C)
                {
                    let msg = 'is a equilateral triangle';
                }
                else if (A == B || A == C || B == C)
                {
                    let msg = 'is a isosceles triangle';
                }
                else
                {
                    let msg = 'is a scalene triangle';
                }
            }
        }
        else
        {
            if (isNaN(segmentA) && isNaN(segmentB) && isNaN(segmentC)) 
            {
                throw new TypeError("Arguments should be numbers");
            } 
            else if (isNaN(segmentA)) 
            {
                throw new TypeError("SegmentA argument is not a number");
            } 
            else if (isNaN(segmentB)) 
            {
                throw new TypeError("SegmentB argument is not a number");
            } 
            else 
            {
                throw new TypeError("SegmentC argument is not a number");
            }
        }
    
        return {
            isItTriangle: isTriangle,
            message: msg
        };
    }

    // ********************** Exercise 16 ********************** //
    TaxCalculator(cpf, dependents, income)
    {
        if (!isNaN(cpf) && !isNaN(dependents) && !isNaN(income))
        {
            let msgStatus = 0;
            let msg = '';
            let minimumSalary = 1000;
            let finalIncome = parseFloat(income) - parseFloat(dependents * 0.05 * minimumSalary);
    
            if (finalIncome <= minimumSalary*2)
            {
                msgStatus = 0;
                msg = `Individual of CPF ${cpf}, there is no need for tax`;
            }
            else if (finalIncome <= minimumSalary*3)
            {
                msgStatus = 1;
                msg = `Individual of CPF ${cpf}, you need to pay R$:${(finalIncome * 0.05).toFixed(2)}`;
            }
            else if (finalIncome <= minimumSalary*3)
            {
                msgStatus = 2;
                msg = `Individual of CPF ${cpf}, you need to pay R$:${(finalIncome * 0.1).toFixed(2)}`;
            }
            else if (finalIncome <= minimumSalary*3)
            {
                msgStatus = 3;
                msg = `Individual of CPF ${cpf}, you need to pay R$:${(finalIncome * 0.15).toFixed(2)}`;
            }
            else (finalIncome <= minimumSalary*3)
            {
                msgStatus = 4;
                msg = `Individual of CPF ${cpf}, you need to pay R$:${(finalIncome * 0.2).toFixed(2)}`;
            }
        }
        else
        {
            if (isNaN(cpf) && isNaN(dependents) && isNaN(income)) 
            {
                throw new TypeError("Arguments should be numbers");
            } 
            else if (isNaN(cpf)) 
            {
                throw new TypeError("CPF is not a number");
            } 
            else if (isNaN(dependents)) 
            {
                throw new TypeError("Dependents is not a number");
            } 
            else 
            {
                throw new TypeError("Income is not a number");
            }
        }

        return {
            status: msgStatus,
            message: msg
        };
    }

    // ********************** Exercise 17 ********************** //
    CalcWeightedStudentGrades(grades)
    {
        // Check if the input data is valid
        if (!grades || !Array.isArray(grades)) 
        {
            throw new TypeError("Invalid input data");
        };
    
        let totalScore = 0;
        let totalWeight = 0;
    
        for (const grade of grades) 
        {
            // Checks if grade.score and grade.weight are numbers before calculation
            if (!isNaN(grade.score) && !isNaN(grade.weight)) 
            {
                totalScore += parseFloat(grade.score * grade.weight);
                totalWeight += parseFloat(grade.weight);
            } 
            else 
            {
                if (isNaN(grade.score) && isNaN(grade.weight))
                {
                    throw new TypeError("Score and weight should be numbers");
                }
                else if (isNaN(grade.score))
                {
                    throw new TypeError("Score should be a number");
                }
                else
                {
                    throw new TypeError("Weight should be a number");
                }
            }
        };
    
        // Calculate the average score
        let averageScore = totalScore / totalWeight;
    
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

    // ********************** Exercise 18 ********************** //
    CalcCarFinalCost(cost)
    {
        if (!isNaN(cost))
        {
            const finalCost = parseFloat(cost) * 1.28 * 1.45;
            return finalCost.toFixed(2);
        }
        else
        {
            throw new TypeError("Argument should be a number");
        }
    }

    // ********************** Exercise 19 ********************** //
    FeeCalculator(capital, tax, days)
    {
        if (!isNaN(capital) && !isNaN(tax) && !isNaN(days))
        {
            let fee = parseFloat(capital) * parseFloat(tax);
    
            for (let i = 0; i <= days; i++)
            {
                capital += fee;
            }
    
            return capital.toFixed(2);
        }
        else
        {
            if (isNaN(capital) && isNaN(tax) && isNaN(days)) 
            {
                throw new TypeError("Arguments should be numbers");
            } 
            else if (isNaN(capital)) 
            {
                throw new TypeError("Capital is not a number");
            } 
            else if (isNaN(tax)) 
            {
                throw new TypeError("Tax is not a number");
            } 
            else 
            {
                throw new TypeError("Days is not a number");
            }
        }
    }

    // ********************** Exercise 20 ********************** //
    IPITaxCalculator(ipi, items)
    {
        // Check if the input data is valid
        if (!items || !Array.isArray(items)) 
        {
            throw new TypeError("Invalid input data, items is not an array");
        }
        else if (!isNaN(ipi))
        {
            let totalCost = 0;
            for (const item of items) 
            {
                if (!isNaN(item.qtd) && !isNaN(item.id) && !isNaN(item.price)) 
                {
                    totalCost += parseFloat(item.qtd) * parseFloat(item.price);
                } 
                else 
                {
                    if (isNaN(item.qtd) && isNaN(item.id) && isNaN(item.price)) 
                    {
                        throw new TypeError("Array arguments should be numbers");
                    } 
                    else if (isNaN(item.qtd)) 
                    {
                        throw new TypeError("Item quantity is not a number");
                    }
                    else if (isNaN(item.id)) 
                    {
                        throw new TypeError("Item id is not a number");
                    }
                    else
                    {
                        throw new TypeError("Item price is not a number");
                    } 
                }
            };
    
            return totalCost + (parseFloat(ipi) / 100);
        }
        else 
        {
            throw new TypeError("IPI should be a number");
        }
    }
}

module.exports = ExerciseCollection2Services;