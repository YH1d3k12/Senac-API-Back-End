function CalculateMonthlySalary(salary, hoursWorked)
{
    if (!isNaN(salary) && !isNaN(hoursWorked))
    {
        const result = salary * hoursWorked;
        return parseFloat(result.toFixed(2));
    }
    else
    {
        throw new TypeError("Both arguments should be numbers");
    }

}

module.exports = { CalculateMonthlySalary };