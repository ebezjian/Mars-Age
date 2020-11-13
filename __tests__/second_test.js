
import {PlanetCalculator} from './../src/second.js';

describe('PlanetCalculator', () => {


  test('should recognize age of user', () => {
    let userInput = new PlanetCalculator ('33');
    
    expect (userInput).toEqual ({"age": "33"});
  });
  test ('shoulder calculate user age for mercury', () => {
    let userInput = new PlanetCalculator ('33');
    expect(userInput.mercuryAge()).toEqual ({"age": "33"});
  })
})