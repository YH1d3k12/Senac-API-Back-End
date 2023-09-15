function TaxCalculator(cpf, dependents, income)
{
    if (!isNaN(cpf) && !isNaN(dependents) && !isNaN(income))
    {
        let msgStatus = 0;
        let msg = '';
        let minimumSalary = 1000;
        let finalIncome = parseFloat(income) - parseFloat(dependents * 0.05 * minimumSalary);

        if (finalIncome <= minimumSalary*2)
        {
            msgStatus = 0;
            msg = `Individual of CPF ${cpf}, there is no need for tax`;
        }
        else if (finalIncome <= minimumSalary*3)
        {
            msgStatus = 1;
            msg = `Individual of CPF ${cpf}, you need to pay R$:${(finalIncome * 0.05).toFixed(2)}`;
        }
        else if (finalIncome <= minimumSalary*3)
        {
            msgStatus = 2;
            msg = `Individual of CPF ${cpf}, you need to pay R$:${(finalIncome * 0.1).toFixed(2)}`;
        }
        else if (finalIncome <= minimumSalary*3)
        {
            msgStatus = 3;
            msg = `Individual of CPF ${cpf}, you need to pay R$:${(finalIncome * 0.15).toFixed(2)}`;
        }
        else (finalIncome <= minimumSalary*3)
        {
            msgStatus = 4;
            msg = `Individual of CPF ${cpf}, you need to pay R$:${(finalIncome * 0.2).toFixed(2)}`;
        }

        return {
            status: msgStatus,
            message: msg
        };
    }
    else
    {
        throw new TypeError("Arguments should be numbers");
    }
}

module.exports = { TaxCalculator };