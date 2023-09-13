function BmiCalculator(weight, height)
{
    if (!isNaN(weight) && !isNaN(height))
    {
        let result = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
    }
    else
    {
        throw new TypeError("Both arguments should be numbers");
    }

    let msg = '';

    if (result <= 18.5)
    {
        msg = 'Abaixo do Peso';
    }
    else if (result <= 24.9)
    {
        msg = 'Normal';
    }
    else if (result <= 29.9)
    {
        msg = 'Acima do Peso';
    }
    else if (result <= 34.9)
    {
        msg = 'Obesidade de I grau';
    }
    else if (result <= 39.9)
    {
        msg = 'Obesidade de II grau';
    }
    else
    {
        msg = 'Obesidade de III grau';
    }

    return {
        score: result.toFixed(2),
        message: msg
    };
}

module.exports = { BmiCalculator };