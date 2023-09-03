function CalculateAverageWeight(people) {

    // Check if the input data is valid
    if (!people || !Array.isArray(people)) 
    {
        throw new Error("Invalid input data");
    }
  
    let totalWeight = people.reduce((sum, person) => {
        // Checks if person.weight is a number before calculation
        if (!isNaN(person.weight)) 
        {
            return sum + parseFloat(person.weight);
        }
        else
        {
            throw new TypeError("Weight should be a number");
        }
    }, 0);

    // Calculate the average weight
    const averageWeight = totalWeight / people.length;

    // Return the calculated average weight
    return averageWeight.toFixed(2);
}

module.exports = { CalculateAverageWeight };
    