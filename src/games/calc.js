import pairs from '@hexlet/pairs';
import { getRandomNumber } from '../tech_funcs.js';
import play from '../cli.js';

export const randomOperation = () => {
  const randomNum = getRandomNumber();
  if (randomNum < 30) {
    return 'add';
  }
  if (randomNum < 60) {
    return 'sub';
  }
  return 'mult';
};

export const operationToSymbol = (str) => {
  switch (str) {
    case 'sub':
      return '-';
    case 'mult':
      return '*';
    default:
      return '+';
  }
};

export const calcFunc = (nameFunc) => (x, y) => {
  switch (nameFunc) {
    case 'add':
      return x + y;
    case 'sub':
      return x - y;
    case 'mult':
      return x * y;
    default:
      return x + y;
  }
};

const formTaskArray = () => {
  const arr = [];
  for (let round = 0; round < 3; round += 1) {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const oper = randomOperation();
    const operString = operationToSymbol(`${oper}`);
    const rightAnswer = calcFunc(`${oper}`)(a, b);
    const taskPair = pairs.cons(`${a} ${operString} ${b}`, rightAnswer.toString());
    arr.push(taskPair);
  }
  return arr;
};

const instruct = 'What is the result of the expression?';

const task = formTaskArray();

const dataToPlay = pairs.cons(instruct, task);

export default () => {
  play(dataToPlay);
};
