function IPITaxCalculator(ipi, items)
{
    // Check if the input data is valid
    if (!items || !Array.isArray(items)) 
    {
        throw new Error("Invalid input data");
    }
    else if (!isNaN(ipi))
    {
        let totalCost = 0;
        for (const item of items) 
        {
            if (!isNaN(item.qtd) && !isNaN(item.id) && !isNaN(item.price)) 
            {
                totalCost += parseFloat(item.qtd) * parseFloat(item.price);
            } 
            else 
            {
                throw new Error("Arguments should be numbers");
            }
        };

        return totalCost + (parseFloat(ipi) / 100);
    }
    else 
    {
        throw new Error("IPI should be a number");
    }
}

module.exports = { IPITaxCalculator };