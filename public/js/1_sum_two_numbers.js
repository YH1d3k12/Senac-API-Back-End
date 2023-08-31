function SumTwoNumbers(num1, num2)
{
    if (!isNaN(num1) && !isNaN(num2))
    {
        const result = num1 + num2;
        return parseFloat(result.toFixed(1));
    }
    else
    {
        throw new TypeError("Both arguments should be numbers");
    }
}

module.exports = { SumTwoNumbers };