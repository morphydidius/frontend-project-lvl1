import pairs from '@hexlet/pairs';
import { getRandomNumber, formTask } from '../tech.js';
import play from '../cli.js';

const getCommonDiv = (a, b) => {
  const numMax = Math.max(a, b);
  const numMin = Math.min(a, b);
  const mod = numMax % numMin;
  if (mod === 0) {
    return numMin;
  }
  return getCommonDiv(mod, numMin);
};

const formTaskElem = () => {
  const randomA = getRandomNumber(1, 100);
  const randomB = getRandomNumber(1, 100);
  const taskElem = pairs.cons(`${randomA} ${randomB}`, getCommonDiv(randomA, randomB).toString());
  return taskElem;
};

const instruct = 'Find the greatest common divisor of given numbers.';

export default () => {
  play(instruct, formTask(formTaskElem));
};
