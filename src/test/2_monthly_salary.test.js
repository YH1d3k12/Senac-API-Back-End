const { describe, expect, it } = require( '@jest/globals');
const ExerciseCollection1Services = require('../services/collection1.js');


describe('Testing my second exercise', () => {


    const exercise = new ExerciseCollection1Services();

    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    // testing two regular numbers
    it('Should multiply two numbers', () => {
        const result = exercise.CalculateMonthlySalary(20,100)
        expect(result).toBe(2000.00);
    })

    // testing two decimal numbers
    it('Should multiply two numbers', () => {
        const result = exercise.CalculateMonthlySalary(24.3,124.5)
        expect(result).toBe(3025.35);
    })

    // testing two negative numbers
    it('Should multiply two numbers', () => {
        const result = exercise.CalculateMonthlySalary(-23, -444)
        expect(result).toBe(10212.00);
    })

    // testing two 0
    it('Should multiply two numbers', () => {
        const result = exercise.CalculateMonthlySalary(0, 0)
        expect(result).toBe(0.00);
    })

    // trying to pass wrong arguments
    it('Should throw a TypeError', () => {
        expect(() => {
            exercise.CalculateMonthlySalary("potato", "batata");
        }).toThrow("Both arguments should be numbers");
    });

    // Sending only the first argument as an incorrect argument
    it('Should throw a TypeError when passing a string', () => {
        expect(() => {
            exercise.CalculateMonthlySalary("batata", 2);
        }).toThrow("Salary is not a number");
    });

    // Sending only the second argument as an incorrect argument
    it('Should throw a TypeError when passing a string', () => {
        expect(() => {
            exercise.CalculateMonthlySalary(2, "batata");
        }).toThrow("Hours worked is not a number");
    });

    // trying to pass a boolean
    it('It treats the boolean as 1 or 0, dont think its ok', () => {
        expect(() => {
            exercise.CalculateMonthlySalary(24, true);
        }).toThrow(TypeError);
    });
}) 