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
    it('Should multiply two numbers', () => {
        const result = CalculateMonthlySalary(20,100)
        expect(result).toBe(2000);
    })

    // testing two decimal numbers
    it('Should multiply two numbers', () => {
        const result = CalculateMonthlySalary(24.3,124.5)
        expect(result).toBe(3025.35);
    })

    // testing two negative numbers
    it('Should multiply two numbers', () => {
        const result = CalculateMonthlySalary(-23, -444)
        expect(result).toBe(10212);
    })

    // testing two 0
    it('Should multiply two numbers', () => {
        const result = CalculateMonthlySalary(0, 0)
        expect(result).toBe(0);
    })

    // trying to pass a string
    it('Should throw a TypeError when passing a string', () => {
        expect(() => {
            CalculateMonthlySalary(24, "batata");
        }).toThrow(TypeError);
    });

    // trying to pass a boolean
    it('It treats the boolean as 1 or 0, dont think its ok', () => {
        expect(() => {
            CalculateMonthlySalary(24, true);
        }).toThrow(TypeError);
    });
}) 