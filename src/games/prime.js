import pairs from '@hexlet/pairs';
import { getRandomNumber, formTask } from '../tech.js';
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

const getRightAnswer = (n) => {
  const divArr = getDivArray(n);
  const answer = divArr.length > 2 ? 'no' : 'yes';
  return answer;
};

const formTaskElem = () => {
  const num = getRandomNumber(1, 100);
  const taskElem = pairs.cons(num.toString(), getRightAnswer(num));
  return taskElem;
};

const instruct = 'Answer "yes" if the number is prime, otherwise answer "no".';

export default () => {
  play(instruct, formTask(formTaskElem));
};
