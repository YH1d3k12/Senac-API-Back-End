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
    it('Should convert miles to kilometers', () => {
        const result = exercise.ConvertMilesToKilometers(1)
        expect(result).toBe(1.61);
    })

    // testing a decimal number
    it('Should convert miles to kilometers', () => {
        const result = exercise.ConvertMilesToKilometers(1.3)
        expect(result).toBe(2.09);
    })

    // testing a negative number
    it('Should convert miles to kilometers', () => {
        const result = exercise.ConvertMilesToKilometers(-4)
        expect(result).toBe(-6.44);
    })

    // testing 0
    it('Should convert miles to kilometers', () => {
        const result = exercise.ConvertMilesToKilometers(0)
        expect(result).toBe(0.00);
    })

    // testing a string
    it('Should convert miles to kilometers', () => {
        expect(() => {
            exercise.ConvertMilesToKilometers("batata");
        }).toThrow(TypeError);
    })
}) 