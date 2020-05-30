import readlineSync from 'readline-sync';
import { getRandomNumber, randomOperation, operationToSymbol } from '../tech_funcs.js';

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

export default () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const oper = randomOperation();
  const operString = operationToSymbol(`${oper}`);
  console.log('What is the result of the expression?');
  console.log(`Question: ${a} ${operString} ${b}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = calcFunc(`${oper}`)(a, b);
  if (userAnswer === rightAnswer.toString()) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;( Correct answer is '${rightAnswer}'.`);
  return false;
};
