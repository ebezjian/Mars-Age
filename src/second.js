// business logic

export default class PlanetCalculator {

  constructor(age) {
    this.age = age;
  }
  mercuryAge() {    
    return (this.age / .24).toFixed();
  }

  timeLeftOnMercury(){
    let result = (this.lifeLeft() - this.mercuryAge());
    if (result < 0) {
      return `you have lived ${this.lifeOnMercury}`
    } else {
      return `You have ${result} years left to live on Mercury`
    }
  }
  
  marsAge() {
    return (this.age / 1.88).toFixed();
  }

  timeLeftOnMars(){
    let result = (this.lifeLeft() - this.marsAge());
    if (result < 0) {
      return `you have lived ${this.lifeOnMars}`
    } else {
      return `You have ${result} years left to live on Mercury`
    }
  }

  jupiterAge() {
    return (this.age / 11.86).toFixed();    
  }

  timeLeftOnJupiter(){
    let result = (this.lifeLeft() - this.jupiterAge());
    if (result < 0) {
      return `you have lived ${this.lifeOnJupiter}`
    } else {
      return `You have ${result} years left to live on Mercury`
    }
  }

  venusAge() {
    return (this.age / .62).toFixed();
  }

  timeLeftOnVenus(){
    let result = (this.lifeLeft() - this.venusAge());
    if (result < 0) {
      return `you have lived ${this.lifeOnVenus}`
    } else {
      return `You have ${result} years left to live on Mercury`
    }
  }

  lifeLeft() {    
    return Math.abs(this.age - 60).toFixed();    
  }

  lifeOnMercury(){
    return Math.abs(this.age - 60/0.24).toFixed();
  }

  lifeOnMars(){
    return Math.abs(this.age - 60/1.88).toFixed();
  }

  lifeOnJupiter(){
    return Math.abs(this.age - 60/11.86).toFixed();
  }

  lifeOnVenus(){
    return Math.abs(this.age - 60/.62).toFixed();
  }

  
}
