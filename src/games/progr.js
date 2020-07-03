import pairs from '@hexlet/pairs';
import getRandomNumber from '../random.js';
import play from '../flow.js';

// число элементов в прогресии
const progressionSize = 10;

const createProgression = (firstElem, incr) => {
  const progression = [];
  for (let index = 0; index < progressionSize; index += 1) {
    progression.push(firstElem + incr * index);
  }
  return progression;
};

const createProgrWithHiddenElem = (progression, hiddenIndex) => {
  let progrWithHiddenElem = '';
  progression.forEach((el, i) => {
    const elem = i === hiddenIndex ? '..' : el;
    progrWithHiddenElem += ` ${elem}`;
  });
  return progrWithHiddenElem;
};

const generateTask = () => {
  const firstElem = getRandomNumber(1, 100);
  const incr = getRandomNumber(1, 50);
  const progression = createProgression(firstElem, incr);
  const randomProgElemIndex = getRandomNumber(0, progressionSize - 1);
  const progrWithHiddenElem = createProgrWithHiddenElem(progression, randomProgElemIndex);
  const task = pairs.cons(`${progrWithHiddenElem}`, progression[randomProgElemIndex].toString());
  return task;
};

const instruct = 'What number is missing in the progression?';

export default () => {
  play(instruct, generateTask);
};
