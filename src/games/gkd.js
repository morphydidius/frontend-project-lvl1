import readlineSync from 'readline-sync';
import { getRandomNumber, getDivArray } from '../tech_funcs.js';

const getCommonDiv = (arr, numerToCheck) => {
  let nod = 1;
  const func = (i, num) => {
    if (i === arr.length) {
      return false;
    }
    if (num % arr[i] === 0) {
      nod *= arr[i];
      return func(i + 1, num / arr[i]);
    }
    return func(i + 1, num);
  };
  func(0, numerToCheck);
  return nod;
};

export default (attempt) => {
  const randomA = getRandomNumber();
  const randomB = getRandomNumber();
  const a = Math.min(randomA, randomB);
  const b = Math.max(randomA, randomB);
  if (!attempt) {
    console.log('Find the greatest common divisor of given numbers.');
  }
  console.log(`Question: ${a} ${b}`);
  const arrA = getDivArray(a);
  const rightAnswer = getCommonDiv(arrA, b);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === rightAnswer.toString()) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;( Correct answer is '${rightAnswer}'.`);
  return false;
};
