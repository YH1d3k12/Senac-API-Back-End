function ConvertMilesToKilometers(miles)
{
    console.log(miles)
    if (!isNaN(miles))
    {
        const result = parseFloat(miles) * 1.60934;
        return result.toFixed(2);
    }
}

module.exports = { ConvertMilesToKilometers };