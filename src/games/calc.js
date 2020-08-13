import pairs from '@hexlet/pairs';
import getRandomNumber from '../random.js';
import play from '../flow.js';

const signs = ['+', '-', '*'];

const calculateExpression = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

export const getRandomOperationSign = () => {
  const randomNum = getRandomNumber(0, signs.length - 1);
  return signs[randomNum];
};

const generateTask = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const operationSign = getRandomOperationSign();
  const question = `${a} ${operationSign} ${b}`;
  const rightAnswer = calculateExpression(a, b, operationSign);
  const task = pairs.cons(question, rightAnswer.toString());
  return task;
};

const instruction = 'What is the result of the expression?';

export default () => {
  play(instruction, generateTask);
};
