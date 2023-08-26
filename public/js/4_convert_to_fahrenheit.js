function ConvertCelsiusToFahrenheit(celsius)
{
    if (!isNaN(celsius))
    {
        return (9 * celsius + 160) / 5;
    }
}

module.exports = { ConvertCelsiusToFahrenheit };