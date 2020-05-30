#!/usr/bin/env node
import { greetPerson, classNumber } from '../src/index.js';

let result = false;

const playGame = (n) => {
  if (n === 0) {
    return result;
  }
  result = classNumber();
  return result ? playGame(n - 1) : result;
};

const name = greetPerson();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
playGame(3);
if (result) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
