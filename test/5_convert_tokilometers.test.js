const { describe, expect, it } = require( '@jest/globals');
const { ConvertMilesToKilometers } = require('../public/js/5_convert_to_kilometers.js');

describe('Testing my first exercise', () => {
    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    // testing a regular number
    it('Should convert miles to kilometers', () => {
        const result = ConvertMilesToKilometers(1)
        expect(result).toBe(1.60);
    })

    // testing a decimal number
    it('Should convert miles to kilometers', () => {
        const result = ConvertMilesToKilometers(1.3)
        expect(result).toBe(2.09);
    })

    // testing a negative number
    it('Should convert miles to kilometers', () => {
        const result = ConvertMilesToKilometers(-4)
        expect(result).toBe(-6.43);
    })

    // testing 0
    it('Should convert miles to kilometers', () => {
        const result = ConvertMilesToKilometers(0)
        expect(result).toBe(0);
    })

    // testing a string
    it('Should convert miles to kilometers', () => {
        expect(() => {
            ConvertMilesToKilometers("batata");
        }).toThrow(TypeError);
    })
}) 