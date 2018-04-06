import chai from 'chai';
const expect = chai.expect;
import fizzBuzz from '../';

describe('fizzbuzz', () => {
  it('must receive a number as input', () => {
    expect(fizzBuzz('pppp')).to.equal('Please enter a number')
  })

  it('should return fizz for 3 and multiples of 3', () => {
    expect(fizzBuzz(9)).to.equal('fizz');
  });

  it('should return buzz for 5 and multiples of 5', () => {
    expect(fizzBuzz(10)).to.equal('buzz');
  });

  it('should return fizzbuzz for multiples of both 3 and 5', () => {
    expect(fizzBuzz(30)).to.equal('fizzbuzz');
  });

  it('should return a message if the number is negative', () => {
    expect(fizzBuzz(-9)).to.equal('Number must be positive');
  });

  it('should return number if number is not a multiple of 3 or 5', () => {
    expect(fizzBuzz(26)).to.equal(26);
  });

  it('should return a message if the number is null or undefined', () => {
    expect(fizzBuzz()).to.equal('Must be a number');
  });
});