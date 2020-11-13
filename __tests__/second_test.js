
import {PlanetCalculator} from './../src/second.js';

describe('PlanetCalculator', () => {


  test('should recognize age of user', () => {
    let userInput = new PlanetCalculator ('33');
    
    expect (userInput).toEqual ({"age": "33"});
  });
  test ('shoulder calculate user age for mercury', () => {
    let userInput = new PlanetCalculator('33');
    expect(userInput.mercuryAge()).toEqual('138');
  })
  test ('shoulder calculate user age for mars', () => {
    let userInput = new PlanetCalculator('33');
    expect(userInput.marsAge()).toEqual('18');
  })
  test ('shoulder calculate user age for venus', () => {
    let userInput = new PlanetCalculator('33');
    expect(userInput.venusAge()).toEqual('53');
  })
  test ('shoulder calculate user age for jupiter', () => {
    let userInput = new PlanetCalculator('33');
    expect(userInput.jupiterAge()).toEqual('3');
  })
})