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

    // testing decimals numbers
    it('Should sum all numbers and divide by the total length', () => {
        const people = [
            {"weight": 70.4 },
            {"weight": 65 },
            {"weight": 80.3 },
            {"weight": 43}
        ]

        const result = CalculateAverageWeight(people)
        expect(result).toBe(64.67);
    })

    // testing negative numbers
    it('Should sum all numbers and divide by the total length', () => {
        const people = [
            {"weight": 70.4 },
            {"weight": -44 },
            {"weight": 65 },
            {"weight": 43}
        ]

        const result = CalculateAverageWeight(people)
        expect(result).toBe(33.6);
    })

    // testing strings 
    it('Should sum all numbers and divide by the total length', () => {
        const people = [
            {"weight": 70.4 },
            {"weight": -44 },
            {"weight": "batata" },
            {"weight": 43}
        ]
        expect(() => {
            CalculateAverageWeight(people);
        }).toThrow(TypeError);
    })

    // testing wrong variable names
    it('Should sum all numbers and divide by the total length', () => {
        const people = [
            {"height": 65 },
            {"foot": -44 },
            {"size": "batata" },
            {"price": 43}
        ]
        expect(() => {
            CalculateAverageWeight(people);
        }).toThrow(Error);
    })

    // testing empty array
    it('Should sum all numbers and divide by the total length', () => {
        const people = [
        ]

        expect(() => {
            CalculateAverageWeight(people);
        }).toThrow(Error);
    })

    // testing without array
    it('Should sum all numbers and divide by the total length', () => {
        const people = 34

        expect(() => {
            CalculateAverageWeight(people);
        }).toThrow(Error);
    })
}) 