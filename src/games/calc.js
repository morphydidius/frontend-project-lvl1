import pairs from '@hexlet/pairs';
import getRandomNumber from '../random.js';
import play from '../flow.js';

const operationSymbols = ['+', '-', '*'];

const calculateExpression = (num1, num2, symbol) => {
  if (symbol === '+') {
    return num1 + num2;
  }
  if (symbol === '-') {
    return num1 - num2;
  }
  if (symbol === '*') {
    return num1 * num2;
  }
  return undefined;
};

export const getRandomOperationSymbol = () => {
  const randomNum = getRandomNumber(0, 2);
  return operationSymbols[randomNum];
};

const generateTask = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const operationSymbol = getRandomOperationSymbol();
  const rightAnswer = calculateExpression(a, b, operationSymbol);
  const task = pairs.cons(`${a} ${operationSymbol} ${b}`, rightAnswer.toString());
  return task;
};

const instruct = 'What is the result of the expression?';

export default () => {
  play(instruct, generateTask);
};
