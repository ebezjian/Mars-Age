// business logic

export class PlanetCalculator {
  constructor(age) {
    this.age = age;
  }
  mercuryAge() {
    return this.age / .24;
  }
  marsAge() {
    return this.age / 1.88;
  }

  jupiterAge() {
    return this.age / 11.86;
  }

  venusAge() {
    return this.age / .62;
  }
  earthAge() {
    return this.age
  }
}
