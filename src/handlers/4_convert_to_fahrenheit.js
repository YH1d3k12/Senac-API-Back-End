function ConvertCelsiusToFahrenheit(celsius)
{
    if (!isNaN(celsius))
    {
        const result = (9 * parseFloat(celsius) + 160) / 5;
        return result.toFixed(1);
    }
    else
    {
        throw new TypeError("Argument should be a number");
    }
}

module.exports = { ConvertCelsiusToFahrenheit };