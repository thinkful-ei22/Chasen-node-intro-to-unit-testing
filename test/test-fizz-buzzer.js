'use strict';

const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

  it('should return fizz-buzz if divisible by 5 and 3, buzz if by 5, and fizz by 3', function(){
    const normalCases = [
      {num:3 , expected: 'fizz'},
      {num:5 , expected: 'buzz'},
      {num:15, expected: 'fizz-buzz'}
    ];
    
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });
  
  it('should raise error if not a number', function(){
    const badInputs = [
      ['a' , false , {} ]
    ];
    badInputs.forEach(function(input){
      expect(function(){
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
