function ConvertMilesToKilometers(grade1, grade2, grade3)
{
    if (!isNaN(grade1) && !isNaN(grade2) && !isNaN(grade3))
    {
        return (grade1 + grade2 + grade3) / 3;
    }
}

module.exports = { ConvertMilesToKilometers };