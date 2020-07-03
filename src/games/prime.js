import pairs from '@hexlet/pairs';
import getRandomNumber from '../random.js';
import play from '../flow.js';

const isNumberPrime = (num) => {
  if (num === 0) {
    return false;
  }
  for (let div = 2; div < Math.sqrt(num); div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const getRightAnswer = (num) => {
  const answer = isNumberPrime(num) ? 'yes' : 'no';
  return answer;
};

const generateTask = () => {
  const questionNumber = getRandomNumber(1, 100);
  const task = pairs.cons(questionNumber.toString(), getRightAnswer(questionNumber));
  return task;
};

const instruct = 'Answer "yes" if the number is prime, otherwise answer "no".';

export default () => {
  play(instruct, generateTask);
};
