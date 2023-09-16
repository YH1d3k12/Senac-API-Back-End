const { describe, expect, it } = require( '@jest/globals');
const ExerciseCollection1Services = require('../services/collection1.js');


describe('Testing my third exercise', () => {


    const exercise = new ExerciseCollection1Services();

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

        const result = exercise.CalculateAverageWeight(people)
        expect(result).toBe(64.50);
    })

    // testing decimals numbers
    it('Should sum all numbers and divide by the total length', () => {
        const people = [
            {"weight": 70.4 },
            {"weight": 65 },
            {"weight": 80.3 },
            {"weight": 43}
        ]

        const result = exercise.CalculateAverageWeight(people)
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

        const result = exercise.CalculateAverageWeight(people)
        expect(result).toBe(33.60);
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
            exercise.CalculateAverageWeight(people);
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
            exercise.CalculateAverageWeight(people);
        }).toThrow(TypeError);
    })

    // testing empty array
    it('Should sum all numbers and divide by the total length', () => {
        const people = [
        ]
        
        expect(() => {
            exercise.CalculateAverageWeight(people);
        }).toThrow(Error);
    })

    // testing without array
    it('Should sum all numbers and divide by the total length', () => {
        const people = 34

        expect(() => {
            exercise.CalculateAverageWeight(people);
        }).toThrow(TypeError);
    })
}) 