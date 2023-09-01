function ConvertMilesToKilometers(miles)
{
    if (!isNaN(miles))
    {
        const result = miles * 1.60934;
        return parseFloat(result.toFixed(2));
    }
}

module.exports = { ConvertMilesToKilometers };