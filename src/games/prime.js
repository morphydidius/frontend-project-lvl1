import pairs from '@hexlet/pairs';
import getRandomNumber from '../random.js';
import play from '../flow.js';

const isNumberPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let div = 2; div < Math.sqrt(num); div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const generateTask = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isNumberPrime(question) ? 'yes' : 'no';
  const task = pairs.cons(question.toString(), rightAnswer);
  return task;
};

const instruction = 'Answer "yes" if the number is prime, otherwise answer "no".';

export default () => {
  play(instruction, generateTask);
};
