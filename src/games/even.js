import pairs from '@hexlet/pairs';
import { getRandomNumber } from '../tech_funcs.js';
import play from '../cli.js';

const getRightAnswer = (n) => {
  const mod = n % 2;
  if (mod === 0) {
    return 'yes';
  }
  return 'no';
};

const formTaskArray = () => {
  const arr = [];
  for (let round = 0; round < 3; round += 1) {
    const num = getRandomNumber();
    const taskPair = pairs.cons(num.toString(), getRightAnswer(num));
    arr.push(taskPair);
  }
  return arr;
};

const instruct = 'Answer "yes" if the number is even, otherwise answer "no".';

const task = formTaskArray();

const dataToPlay = pairs.cons(instruct, task);

export default () => {
  play(dataToPlay);
};
