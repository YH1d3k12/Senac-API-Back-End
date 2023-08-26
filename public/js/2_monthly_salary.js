function CalculateMonthlySalary(salary, hoursWorked)
{
    if (!isNaN(salary) && !isNaN(hoursWorked))
    {
        return salary * hoursWorked;
    }

}

module.exports = { CalculateMonthlySalary };