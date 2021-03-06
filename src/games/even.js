import pairs from '@hexlet/pairs';
import getRandomNumber from '../random.js';
import play from '../flow.js';

const isEven = (n) => n % 2 === 0;

const generateTask = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  const task = pairs.cons(question.toString(), rightAnswer);
  return task;
};

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  play(instruction, generateTask);
};
