#!/usr/bin/env node
import { getName, classNumber } from '../src/index.js';

let result = false;

const playGame = (n) => {
  if (n === 0) {
    return result;
  }
  result = classNumber();
  return result ? playGame(n - 1) : result;
};

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
playGame(3);
if (result) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
