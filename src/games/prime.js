import pairs from '@hexlet/pairs';
import { getRandomNumber, roundsNumber } from '../tech.js';
import play from '../cli.js';

const getDivArray = (num) => {
  const arr = [1];
  if (!num) {
    return arr;
  }
  const checkArrElem = (numer, del) => {
    if (numer === 1) {
      return arr;
    }
    const mod = numer % del;
    if (!mod) {
      arr.push(del);
      return checkArrElem(numer / del, del);
    }
    return checkArrElem(numer, del + 1);
  };
  return checkArrElem(num, 2);
};

const getAnswer = (n) => {
  const divArr = getDivArray(n);
  const answer = divArr.length > 2 ? 'no' : 'yes';
  return answer;
};

const formTask = () => {
  const arr = [];
  for (let round = 0; round < roundsNumber; round += 1) {
    const num = getRandomNumber(1, 100);
    const taskElem = pairs.cons(num.toString(), getAnswer(num));
    arr.push(taskElem);
  }
  return arr;
};

const instruct = 'Answer "yes" if the number is prime, otherwise answer "no".';

const task = formTask();

export default () => {
  play(instruct, task);
};
