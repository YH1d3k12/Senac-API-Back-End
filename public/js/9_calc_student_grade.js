function CalcStudentGrades(grades)
{
    // Check if the input data is valid
    if (!grades || !Array.isArray(grades)) {
        throw new Error("Invalid input data");
    };

    // Calculate the student grades
    // if (!isNaN(grade1) && !isNaN(grade2) && !isNaN(grade3))
    // {
    //     return (grade1 + grade2 + grade3) / 3;
    // }

    let totalScore = grades.reduce((sum, grade) => {
        // Checks if grade.score is a number before calculation
        if (typeof grade.score !== 'number') {
            throw new Error("score should be a number");
        }
        return sum + grade.score;
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
        score: averageScore.toFixed(1),
        message: msg
    };

}

module.exports = { CalcStudentGrades };