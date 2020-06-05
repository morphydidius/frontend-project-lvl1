import readlineSync from 'readline-sync';
import { getRandomNumber } from '../tech_funcs.js';

const getProgArray = () => {
  const firstElem = getRandomNumber();
  const incr = getRandomNumber();
  const arr = [firstElem];
  const createArr = (i = 0) => {
    if (arr.length < 10) {
      arr.push(arr[i] + incr);
      return createArr(i + 1);
    }
    return arr;
  };
  return createArr();
};

const getRandomLimitTop = () => Math.floor(Math.random() * 10);

const progArrayModified = (arr, elNumber) => {
  const arrMod = [];
  arr.forEach((el, ind) => {
    if (ind === elNumber) {
      arrMod.push('..');
    } else {
      arrMod.push(el);
    }
  });
  let arrStr = '';
  arrMod.forEach((el, i) => {
    arrStr = `${arrStr} ${arrMod[i]}`;
  });
  return arrStr;
};

export default (attempt) => {
  const arr = getProgArray();
  const randomNum = getRandomLimitTop();
  const arrMod = progArrayModified(arr, randomNum);
  if (!attempt) {
    console.log('What number is missing in the progression?');
  }
  console.log(`Question: ${arrMod}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === arr[randomNum].toString()) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;( Correct answer is '${arr[randomNum]}'.`);
  return false;
};
