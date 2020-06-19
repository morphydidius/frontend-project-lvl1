import pairs from '@hexlet/pairs';
import { getRandomNumber, roundsNumber } from '../tech.js';
import play from '../cli.js';

const checkEven = (n) => n % 2 === 0;

const getRightAnswer = (n) => {
  if (checkEven(n)) {
    return 'yes';
  }
  return 'no';
};

const formTask = () => {
  const arr = [];
  for (let round = 0; round < roundsNumber; round += 1) {
    const num = getRandomNumber(1, 100);
    const taskElem = pairs.cons(num.toString(), getRightAnswer(num));
    arr.push(taskElem);
  }
  return arr;
};

const instruct = 'Answer "yes" if the number is even, otherwise answer "no".';

const task = formTask();

export default () => {
  play(instruct, task);
};
