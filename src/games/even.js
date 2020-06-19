import pairs from '@hexlet/pairs';
import { getRandomNumber, formTask } from '../tech.js';
import play from '../cli.js';

const checkEven = (n) => n % 2 === 0;

const getRightAnswer = (n) => {
  if (checkEven(n)) {
    return 'yes';
  }
  return 'no';
};

const formTaskElem = () => {
  const num = getRandomNumber(1, 100);
  const taskElem = pairs.cons(num.toString(), getRightAnswer(num));
  return taskElem;
};

const instruct = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  play(instruct, formTask(formTaskElem));
};
