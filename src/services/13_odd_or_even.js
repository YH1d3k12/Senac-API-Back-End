function IsTheNumberOddOrEven(number)
{
    let msg = '';

    if (!isNaN(number))
    {
        parseFloat(number);

        if (number%2 == 0)
        {
            msg = 'Even';
        }
        else
        {
            msg = 'Odd';
        }
    }
    else
    {
        throw new TypeError("Argument should be a number");
    }

    return msg;

}

module.exports = { IsTheNumberOddOrEven };