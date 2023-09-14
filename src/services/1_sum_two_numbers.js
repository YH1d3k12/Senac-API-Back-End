function SumTwoNumbers(num1, num2)
{
    if (!isNaN(num1) && !isNaN(num2))
    {
        const result = parseFloat(num1) + parseFloat(num2);
        return result.toFixed(2);
    }
    else
    {
        throw new TypeError("Both arguments should be numbers");
    }
}

module.exports = { SumTwoNumbers };