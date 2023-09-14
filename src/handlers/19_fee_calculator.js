function FeeCalculator(capital, tax, days)
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
        throw new TypeError("Arguments should be numbers");
    }
}

module.exports = { FeeCalculator };