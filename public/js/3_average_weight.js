function CalculateAverageWeight(people)
{
    // Check if the input data is valid
    if (!people || !Array.isArray(people)) 
    {
        throw new Error("Invalid input data");
    }
    
    // Calculate the total weight

    // people.forEach(person => {
    //     totalWeight += person.weight;
    // });
    
    let totalWeight = people.reduce((sum, person) => sum + person.weight, 0);
      
    // Calculate the average weight
    const averageWeight = totalWeight / people.length;
      
    // Return the calculated average weight
    return averageWeight;

}
  
module.exports = { CalculateAverageWeight };