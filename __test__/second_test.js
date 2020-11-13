import {birthdayCalc} from './../src/second.js';

describe ('second', () => {

  test('should calculate persons age', () => {
    const inputMonth = 12
    const inputDay = 13
    const inputYear = 1986
    const inputTotal = new Userinput (inputMonth, inputDay, inputYear)
    expect (inputTotal.birthdayCalc()).toBe (33);
  })
})