import pairs from '@hexlet/pairs';
import { getRandomNumber, formTask } from '../tech.js';
import play from '../cli.js';

export const getRandomOperation = () => {
  const randomNum = getRandomNumber(1, 100);
  if (randomNum < 30) {
    return 'add';
  }
  if (randomNum < 60) {
    return 'sub';
  }
  return 'mult';
};

export const transformOperToSymbol = (str) => {
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

const formTaskElem = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const operation = getRandomOperation();
  const operString = transformOperToSymbol(`${operation}`);
  const rightAnswer = calcFunc(`${operation}`)(a, b);
  const taskElem = pairs.cons(`${a} ${operString} ${b}`, rightAnswer.toString());
  return taskElem;
};

const instruct = 'What is the result of the expression?';

export default () => {
  play(instruct, formTask(formTaskElem));
};
