import pairs from '@hexlet/pairs';
import { getRandomNumber, roundsNumber } from '../tech.js';
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

const formTask = () => {
  const arr = [];
  for (let round = 0; round < roundsNumber; round += 1) {
    const randomA = getRandomNumber(1, 100);
    const randomB = getRandomNumber(1, 100);
    const taskElem = pairs.cons(`${randomA} ${randomB}`, getCommonDiv(randomA, randomB).toString());
    arr.push(taskElem);
  }
  return arr;
};

const instruct = 'Find the greatest common divisor of given numbers.';

const task = formTask();

export default () => {
  play(instruct, task);
};
