
import PlanetCalculator from './../src/second.js';

describe ('PlanetCalculator'), () => {
  let calc;

  beforeEach(() => {
    calc= new PlanetCalculator(33);
  });

  test('should recognize age of user', () => {
    expect(calc.age).toEqual(33);
  });
}