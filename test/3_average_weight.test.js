const { describe, expect, it } = require( '@jest/globals');
const { CalculateAverageWeight } = require('../public/js/3_average_weight.js');

describe('Testing my third exercise', () => {
    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    // testing regular numbers
    it('Should sum all numbers and divide by the total length', () => {
        const people = [
            {"weight": 70 },
            {"weight": 65 },
            {"weight": 80 },
            {"weight": 43}
        ]

        const result = CalculateAverageWeight(people)
        expect(result).toBe(64.5);
    })
}) 