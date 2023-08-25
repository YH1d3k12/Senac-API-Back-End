import { describe, expect, it } from '@jest/globals';
import { exercise1 } from '../public/js/1_sum_two_numbers.js';

describe('Testing my first exercise', () => {
    //Executed before all tests
    beforeAll(async () => {
        console.info('Starting TDD test with Jest!');
    });

    afterAll(() => {
        console.info('Ending all tests');
    });

    it('Should sum two numbers', () => {
        const result = exercise1(1,2)
        expect(result).toBe(3);
    })
}) 