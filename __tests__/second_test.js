
import PlanetCalculator from './../src/second.js';

describe('PlanetCalculator', () => {


  test('should recognize age of user', () => {
    let userInput = new PlanetCalculator ('33');
    
    expect (userInput).toEqual ({"age": "33"});
  });
  test ('should calculate user age for mercury', () => {
    let userInput = new PlanetCalculator('33');
    expect(userInput.mercuryAge()).toEqual('138');
    expect(userInput.mercuryAge() - userInput.lifeLeft()).toEqual(111)
  })
  test ('should calculate user age for mars', () => {
    let userInput = new PlanetCalculator('33');
    expect(userInput.marsAge()).toEqual('18');
    expect(userInput.marsAge() - userInput.lifeLeft()).toEqual(-9)
  })
  test ('should calculate user age for venus', () => {
    let userInput = new PlanetCalculator('33');
    expect(userInput.venusAge()).toEqual('53');
    expect(userInput.venusAge() - userInput.lifeLeft()).toEqual(111)
  })
  test ('should calculate user age for jupiter', () => {
    let userInput = new PlanetCalculator('33');
    expect(userInput.jupiterAge()).toEqual('3');
  })
  test ('should subtract 60 from age for life expectancy', () =>{
    let userInput = new PlanetCalculator ('33');
    expect(userInput.lifeLeft()).toEqual('27')
  })
})