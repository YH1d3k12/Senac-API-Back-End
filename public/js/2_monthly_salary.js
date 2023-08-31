function CalculateMonthlySalary(salary, hoursWorked)
{
    if (!isNaN(salary) && !isNaN(hoursWorked))
    {
        const result = salary * hoursWorked;
        return parseFloat(result.toFixed(1));
    }

}

module.exports = { CalculateMonthlySalary };