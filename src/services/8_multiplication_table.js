function CreateMultiplicationTable(number) {

    let multiplicationTable = [];

    if (!isNaN(number)) 
    {
        for (let i = 1; i <= 10; i++) 
        {
            multiplicationTable.push
            ({
                equation: `${number} x ${i}`,
                result: parseFloat(number) * i
            });
        }
    }

    return multiplicationTable;
}

module.exports = { CreateMultiplicationTable };