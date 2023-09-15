function CalcStudentGrades(grades)
{
    // Check if the input data is valid
    if (!grades || !Array.isArray(grades)) 
    {
        throw new Error("Invalid input data");
    };

    let totalScore = grades.reduce((sum, grade) => {
        // Checks if grade.score is a number before calculation
        if (!isNaN(grade.score)) 
        {
            return sum + parseFloat(grade.score);
        }
        else
        {
            throw new Error("score should be a number");
        }

    }, 0);

    // Calculate the average score
    let averageScore = totalScore / grades.length;

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

module.exports = { CalcStudentGrades };