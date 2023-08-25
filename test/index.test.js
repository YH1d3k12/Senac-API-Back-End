const { describe, expect, it } = require( '@jest/globals');
const { SumTwoNumbers } = require('../public/js/1_sum_two_numbers.js');

describe('Testing my first exercise', () => {
    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    it('Should sum two numbers', () => {
        const result = SumTwoNumbers(1,2)
        expect(result).toBe(3);
    })
}) 