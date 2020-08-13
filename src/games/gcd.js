import pairs from '@hexlet/pairs';
import getRandomNumber from '../random.js';
import play from '../flow.js';

const getGCD = (a, b) => {
  const numMax = Math.max(a, b);
  const numMin = Math.min(a, b);
  const mod = numMax % numMin;
  if (mod === 0) {
    return numMin;
  }
  return getGCD(mod, numMin);
};

const generateTask = () => {
  const randomA = getRandomNumber(1, 100);
  const randomB = getRandomNumber(1, 100);
  const question = `${randomA} ${randomB}`;
  const rightAnswer = getGCD(randomA, randomB);
  const task = pairs.cons(question, rightAnswer.toString());
  return task;
};

const instruction = 'Find the greatest common divisor of given numbers.';

export default () => {
  play(instruction, generateTask);
};
