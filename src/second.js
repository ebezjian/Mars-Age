// business logic

export default class PlanetCalculator {
  constructor(age) {
    this.age = age;
  }
  mercuryAge() {
    return (this.age / .24).toFixed();
  }
  marsAge() {
    return (this.age / 1.88).toFixed();
  }

  jupiterAge() {
    return (this.age / 11.86).toFixed();
    
  }

  venusAge() {
    return (this.age / .62).toFixed();
  }
  lifeLeft() {
    return Math.abs(this.age - 60).toFixed();
    
  }
}
