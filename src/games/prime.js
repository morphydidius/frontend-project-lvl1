import readlineSync from 'readline-sync';
import { getRandomNumber, getDivArray } from '../tech_funcs.js';

export default (attempt) => {
  const num = getRandomNumber();
  if (!attempt) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  }
  console.log(`Question: ${num}`);
  const divArr = getDivArray(num);
  const rightAnswer = divArr.length > 2 ? 'no' : 'yes';
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;( Correct answer is '${rightAnswer}'.`);
  return false;
};
