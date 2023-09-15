function ConvertKilometers(km)
{
    if (!isNaN(km))
    {
        let m = parseFloat(km * 1000);
        let cm = parseFloat(m * 100);
        
        return {
            meters: m,
            centimeters: cm,
            message: `Kilometers to Meters: ${m} \n Kilometers to Centimeters: ${cm}`
        };
    }
};

module.exports = { ConvertKilometers };