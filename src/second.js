// business logic

export class PlanetCalculator {
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
  earthAge() {
    return (this.age).toFixed();
  }
}
