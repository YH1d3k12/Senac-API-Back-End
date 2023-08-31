const { describe, expect, it } = require( '@jest/globals');
const { CalculateMonthlySalary } = require('../public/js/2_monthly_salary.js');

describe('Testing my second exercise', () => {
    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    // testing two regular numbers
    it('Should sum two numbers', () => {
        const result = CalculateMonthlySalary(20,100)
        expect(result).toBe(2000);
    })
}) 