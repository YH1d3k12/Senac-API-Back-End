function WhichNumberIsGreater(num1, num2)
{
    if (!isNaN(num1) && !isNaN(num2))
    {
        let msg = '';
        let result = '';
        let x = parseFloat(num1);
        let y = parseFloat(num2);

        if (x > y)
        {
            result = 'x';
            msg = `${x} is greater than ${y} `;
        }
        else if (x < y)
        {
            result = 'y';
            msg = `${y} is greater than ${x} `;
        }
        else
        {
            result = 'none';
            msg = `${x} and ${y} are the same`;
        }
    }
    else
    {
        throw new TypeError("Both arguments should be numbers");
    }

    return {
        who: result,
        message: msg
    };

}

module.exports = { WhichNumberIsGreater };