const { describe, expect, it } = require( '@jest/globals');
const { ConvertCelsiusToFahrenheit } = require('../public/js/4_convert_to_fahrenheit.js');

describe('Testing my first exercise', () => {
    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    // testing a regular number
    it('Should convert celsius to fahrenheit', () => {
        const result = ConvertCelsiusToFahrenheit(12)
        expect(result).toBe(53.6);
    })

    // testing a negative number
    it('Should convert celsius to fahrenheit', () => {
        const result = ConvertCelsiusToFahrenheit(-5)
        expect(result).toBe(23);
    })

    // testing a decimal number
    it('Should convert celsius to fahrenheit', () => {
        const result = ConvertCelsiusToFahrenheit(24.3)
        expect(result).toBe(75.74);
    })

    // testing 0
    it('Should convert celsius to fahrenheit', () => {
        expect(() => {
            ConvertCelsiusToFahrenheit(32);
        }).toThrow(TypeError);
    });

    // testing a string
    it('Should throw a TypeError when passing a string', () => {
        expect(() => {
            ConvertCelsiusToFahrenheit("batata");
        }).toThrow(TypeError);
    });

    // testing a boolean
    it('It treats the boolean as 1 or 0, dont think its ok', () => {
        expect(() => {
            ConvertCelsiusToFahrenheit(true);
        }).toThrow(TypeError);
    });
}) 