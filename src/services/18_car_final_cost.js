function CalcCarFinalCost(cost)
{
    if (!isNaN(cost))
    {
        const finalCost = parseFloat(cost) * 1.28 * 1.45;
        return finalCost.toFixed(2);
    }
    else
    {
        throw new TypeError("Argument should be a number");
    }
}

module.exports = { CalcCarFinalCost };