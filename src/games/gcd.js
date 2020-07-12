import pairs from '@hexlet/pairs';
import getRandomNumber from '../random.js';
import play from '../flow.js';

const getCommonDiv = (a, b) => {
  const numMax = Math.max(a, b);
  const numMin = Math.min(a, b);
  const mod = numMax % numMin;
  if (mod === 0) {
    return numMin;
  }
  return getCommonDiv(mod, numMin);
};

const generateTask = () => {
  const randomA = getRandomNumber(1, 100);
  const randomB = getRandomNumber(1, 100);
  const rightAnswer = getCommonDiv(randomA, randomB);
  const task = pairs.cons(`${randomA} ${randomB}`, rightAnswer.toString());
  return task;
};

const instruct = 'Find the greatest common divisor of given numbers.';

export default () => {
  play(instruct, generateTask);
};
