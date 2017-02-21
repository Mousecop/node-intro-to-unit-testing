const should = require('chai').should();

const fizzBuzz = require('../fizzBuzzer');


describe('Fizz Buzz', function() {
    it('should print FizzBuzz', function() {
        fizzBuzz(15).should.equal('fizz-buzz');
    });
    it('should print Buzz', function() {
        fizzBuzz(5).should.equal('buzz');
    });
    it('should print Fizz', function() {
        fizzBuzz(3).should.equal('fizz');
    });
    // describe('Edge Case', function() {
    //     it('should test against string inputs', function() {
    //         fizzBuzz('abc').should.
    //     });
});