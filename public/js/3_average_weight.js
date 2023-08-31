function CalculateAverageWeight(people) {
    // Check if the input data is valid
    if (!people || !Array.isArray(people)) {
        throw new Error("Invalid input data");
    }

    // Calculate the total weight

    // people.forEach(person => {
    //     totalWeight += person.weight;
    // });
    
    let totalWeight = people.reduce((sum, person) => {
        // Checks if person.weight is a number before calculation
        if (typeof person.weight !== 'number') {
            throw new TypeError("Weight should be a number");
        }
        return sum + person.weight;
    }, 0);

    // Calculate the average weight
    const averageWeight = totalWeight / people.length;

    // Return the calculated average weight
    return parseFloat(averageWeight.toFixed(2));
}

module.exports = { CalculateAverageWeight };
    // people.forEach(person => {
    //     totalWeight += person.weight;
    // });
    