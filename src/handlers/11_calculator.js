function Calculator(operation, num1, num2)
{
    if (!isNaN(num1) && !isNaN(num2))
    {
        let x = parseFloat(num1);
        let y = parseFloat(num2);
    }
    else
    {
        throw new TypeError("Both arguments should be numbers");
    }

    let result = 0;

    switch (operation) 
    {
        case 'sum':
            result = x + y;
            break;

        case 'subtract':
            result = x - y;
            break;
        
        case 'multiply':
            result = x * y;
            break;

        case 'divide':
            result = x / y;
            break;
        default:
            throw new TypeError("Missing a valid operation parameter");
            break;
    }

    return result;

}

module.exports = { Calculator };