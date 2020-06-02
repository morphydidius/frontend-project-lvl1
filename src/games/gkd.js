import readlineSync from 'readline-sync';
import { getRandomNumber } from '../tech_funcs.js';

const getDivArray = (num) => {
  const arr = [1];
  if (!num) {
    return arr;
  }
  const checkArrElem = (numer, del) => {
    if (numer === 1) {
      return arr;
    }
    const mod = numer % del;
    if (!mod) {
      arr.push(del);
      return checkArrElem(numer / del, del);
    }
    return checkArrElem(numer, del + 1);
  };
  return checkArrElem(num, 2);
};

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

export default () => {
  const randomA = getRandomNumber();
  const randomB = getRandomNumber();
  const a = Math.min(randomA, randomB);
  const b = Math.max(randomA, randomB);
  console.log('Find the greatest common divisor of given numbers.');
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
