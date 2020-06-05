import readlineSync from 'readline-sync';
import { getRandomNumber } from '../tech_funcs.js';

const getRightAnswer = (n) => {
  const mod = n % 2;
  if (mod === 0) {
    return 'yes';
  }
  return 'no';
};

export default (attempt) => {
  let result = false;
  const randomNumber = getRandomNumber();
  if (!attempt) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  console.log('Question: ', randomNumber);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === getRightAnswer(randomNumber)) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${getRightAnswer(randomNumber)}".`);
  }
  return result;
};
