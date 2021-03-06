
import PlanetCalculator from './../src/second.js';

describe('PlanetCalculator', () => {


  test('should recognize age of user', () => {
    let userInput = new PlanetCalculator ('33');
    
    expect (userInput).toEqual ({"age": "33"});
  });
  test ('should calculate user age for mercury', () => {
    let userInput = new PlanetCalculator('33');
    expect(userInput.mercuryAge()).toEqual('138');
    
  })
  test ('should calculate user life left on planet', () => {
    let userInput = new PlanetCalculator('33')
    expect(userInput.lifeOnMercury()).toEqual('217')
  })

  test ('should calculate user age for mars', () => {
    let userInput = new PlanetCalculator('33');
    expect(userInput.marsAge()).toEqual('18');
    
  })

  test ('should calculate user life left on planet', () => {
    let userInput = new PlanetCalculator('33')
    expect(userInput.lifeOnMars()).toEqual('1')
  })

  test ('should calculate user age for venus', () => {
    let userInput = new PlanetCalculator('33');
    expect(userInput.venusAge()).toEqual('53');
    
  })

  test ('should calculate user life left on planet', () => {
    let userInput = new PlanetCalculator('33')
    expect(userInput.lifeOnVenus()).toEqual('64')
  })

  test ('should calculate user age for jupiter', () => {
    let userInput = new PlanetCalculator('33');
    expect(userInput.jupiterAge()).toEqual('3');
      })

  test ('should calculate user life left on planet', () => {
    let userInput = new PlanetCalculator('33')
    expect(userInput.lifeOnJupiter()).toEqual('28')
  })

  test ('should subtract 60 from age for life expectancy', () =>{
    let userInput = new PlanetCalculator ('33');
    expect(userInput.lifeLeft()).toEqual('27')
  })

  test ('should calculate user life left on planet', () => {
    let userInput = new PlanetCalculator('33')
    expect(userInput.lifeLeft()).toEqual('27')
  })
})