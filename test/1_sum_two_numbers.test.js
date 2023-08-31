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

    // testing two regular numbers
    it('Should sum two numbers', () => {
        const result = SumTwoNumbers(1,2)
        expect(result).toBe(3);
    })
    
    // testing two decimal numbers
    it('Should sum two numbers', () => {
        const result = SumTwoNumbers(4.4,3.2)
        expect(result).toBe(7.6);
    })

    // testing one decimal and one negative number
    it('Should sum two numbers', () => {
        const result = SumTwoNumbers(-4 ,3.2)
        expect(result).toBe(-0.8);
    })

    // trying to pass a string
    it('Should throw a TypeError when passing a string', () => {
        expect(() => {
            SumTwoNumbers(-4, "batata");
        }).toThrow(TypeError);
    });

    // trying to pass a boolean
    it('It treats the boolean as 1 or 0, idk if its ok', () => {
        const result = SumTwoNumbers(true, false)
        expect(result).toBe(1);
    });
}) 