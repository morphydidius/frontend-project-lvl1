import pairs from '@hexlet/pairs';
import getRandomNumber from '../random.js';
import play from '../flow.js';

const isEven = (n) => n % 2 === 0;

const getRightAnswer = (n) => {
  if (isEven(n)) {
    return 'yes';
  }
  return 'no';
};

const generateTask = () => {
  const questionNumber = getRandomNumber(1, 100);
  const task = pairs.cons(questionNumber.toString(), getRightAnswer(questionNumber));
  return task;
};

const instruct = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  play(instruct, generateTask);
};
