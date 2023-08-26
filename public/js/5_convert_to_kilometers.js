function ConvertMilesToKilometers(miles)
{
    if (!isNaN(miles))
    {
        return miles * 1.60934;
    }
}

module.exports = { ConvertMilesToKilometers };