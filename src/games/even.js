import pairs from '@hexlet/pairs';
import getRandomNumber from '../random.js';
import play from '../flow.js';

const isEven = (n) => n % 2 === 0;

const getRightAnswer = (n) => {
  const answer = isEven(n) ? 'yes' : 'no';
  return answer;
};

const generateTask = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = getRightAnswer(question);
  const task = pairs.cons(question.toString(), rightAnswer);
  return task;
};

const instruct = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  play(instruct, generateTask);
};
