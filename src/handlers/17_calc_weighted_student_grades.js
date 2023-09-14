function CalcWeightedStudentGrades(grades)
{
    // Check if the input data is valid
    if (!grades || !Array.isArray(grades)) 
    {
        throw new Error("Invalid input data");
    };

    let totalScore = 0;
    let totalWeight = 0;

    for (const grade of grades) 
    {
        // Checks if grade.score and grade.weight are numbers before calculation
        if (!isNaN(grade.score) && !isNaN(grade.weight)) 
        {
            totalScore += parseFloat(grade.score * grade.weight);
            totalWeight += parseFloat(grade.weight);
        } 
        else 
        {
            throw new Error("score and weight should be numbers");
        }
    };

    // Calculate the average score
    let averageScore = totalScore / totalWeight;

    // Return the calculated average score with a message

    let msg = '';

    if(averageScore >= 7) 
    {
        msg = 'Aprovado';
    } 
    else if (averageScore >= 5) 
    {
        msg = 'Recuperação';
    } 
    else 
    {
        msg = 'Reprovado';
    };

    return {
        score: averageScore.toFixed(2),
        message: msg
    };

}

module.exports = { CalcWeightedStudentGrades };