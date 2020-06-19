import pairs from '@hexlet/pairs';
import { getRandomNumber, roundsNumber } from '../tech.js';
import play from '../cli.js';

const createProgression = (firstElem, incr) => {
  const arr = [firstElem];
  const arrSize = 10;
  const createArr = (i = 0) => {
    if (arr.length < arrSize) {
      arr.push(arr[i] + incr);
      return createArr(i + 1);
    }
    return arr;
  };
  return createArr();
};

const createProgrWithHiddenElem = (arr, elNumber) => {
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

const formTask = () => {
  const arr = [];
  for (let round = 0; round < roundsNumber; round += 1) {
    const firstElem = getRandomNumber(1, 100);
    const incr = getRandomNumber(1, 50);
    const progression = createProgression(firstElem, incr);
    const randomProgElemIndex = getRandomNumber(0, 9);
    const progrWithHiddenElem = createProgrWithHiddenElem(progression, randomProgElemIndex);
    const taskElem = pairs.cons(`${progrWithHiddenElem}`, progression[randomProgElemIndex].toString());
    arr.push(taskElem);
  }
  return arr;
};

const instruct = 'What number is missing in the progression?';

const task = formTask();

export default () => {
  play(instruct, task);
};
