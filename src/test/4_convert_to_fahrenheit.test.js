const { describe, expect, it } = require( '@jest/globals');
const ExerciseCollection1Services = require('../services/collection1.js');


describe('Testing my first exercise', () => {


    const exercise = new ExerciseCollection1Services();

    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    // testing a regular number
    it('Should convert celsius to fahrenheit', () => {
        const result = exercise.ConvertCelsiusToFahrenheit(12)
        expect(result).toBe(53.60);
    })

    // testing a negative number
    it('Should convert celsius to fahrenheit', () => {
        const result = exercise.ConvertCelsiusToFahrenheit(-5)
        expect(result).toBe(23.00);
    })

    // testing a decimal number
    it('Should convert celsius to fahrenheit', () => {
        const result = exercise.ConvertCelsiusToFahrenheit(24.3)
        expect(result).toBe(75.74);
    })

    // testing 0
    it('Should convert celsius to fahrenheit', () => {
        const result = exercise.ConvertCelsiusToFahrenheit(0)
        expect(result).toBe(32.00);
    });

    // testing a string
    it('Should throw a TypeError when passing a string', () => {
        expect(() => {
            exercise.ConvertCelsiusToFahrenheit("batata");
        }).toThrow(TypeError);
    });

    // testing a boolean
    it('It treats the boolean as 1 or 0, dont think its ok', () => {
        expect(() => {
            exercise.ConvertCelsiusToFahrenheit(true);
        }).toThrow(TypeError);
    });
}) 