import pairs from '@hexlet/pairs';
import { getRandomNumber, getDivArray } from '../tech_funcs.js';
import play from '../cli.js';

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

const getRightAnswer = (num1, num2) => {
  const arrDiv = getDivArray(num1);
  const rightAnswer = getCommonDiv(arrDiv, num2);
  return rightAnswer;
};

const formTaskArray = () => {
  const arr = [];
  for (let round = 0; round < 3; round += 1) {
    const randomA = getRandomNumber();
    const randomB = getRandomNumber();
    const a = Math.min(randomA, randomB);
    const b = Math.max(randomA, randomB);
    const taskPair = pairs.cons(`${a} ${b}`, getRightAnswer(a, b).toString());
    arr.push(taskPair);
  }
  return arr;
};

const instruct = 'Find the greatest common divisor of given numbers.';

const task = formTaskArray();

const dataToPlay = pairs.cons(instruct, task);

export default () => {
  play(dataToPlay);
};
