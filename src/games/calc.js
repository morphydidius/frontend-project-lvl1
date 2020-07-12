import pairs from '@hexlet/pairs';
import getRandomNumber from '../random.js';
import play from '../flow.js';

const operationSigns = ['+', '-', '*'];

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
  const randomNum = getRandomNumber(0, operationSigns.length - 1);
  return operationSigns[randomNum];
};

const generateTask = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const operationSign = getRandomOperationSign();
  const rightAnswer = calculateExpression(a, b, operationSign);
  const task = pairs.cons(`${a} ${operationSign} ${b}`, rightAnswer.toString());
  return task;
};

const instruct = 'What is the result of the expression?';

export default () => {
  play(instruct, generateTask);
};
