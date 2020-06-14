import pairs from '@hexlet/pairs';
import { getRandomNumber } from '../tech_funcs.js';
import play from '../cli.js';

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

const formTaskArray = () => {
  const arr = [];
  for (let round = 0; round < 3; round += 1) {
    const arrProgrNumer = getProgArray();
    const randomNum = getRandomLimitTop();
    const arrProgrString = progArrayModified(arrProgrNumer, randomNum);
    const taskPair = pairs.cons(`${arrProgrString}`, arrProgrNumer[randomNum].toString());
    arr.push(taskPair);
  }
  return arr;
};

const instruct = 'What number is missing in the progression?';

const task = formTaskArray();

const dataToPlay = pairs.cons(instruct, task);

export default () => {
  play(dataToPlay);
};
