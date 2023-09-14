function CheckNumber(number)
{
    let msg = '';

    if (!isNaN(number))
    {
        if (number > 0)
        {
            msg = 'Positive';
        }
        else if (number < 0)
        {
            msg = 'Negative';
        }
        else
        {
            msg = 'Neutral';
        }
    }
    else
    {
        throw new TypeError("Argument should be a number");
    }

    return msg;

}

module.exports = { CheckNumber };