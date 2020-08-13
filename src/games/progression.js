import pairs from '@hexlet/pairs';
import getRandomNumber from '../random.js';
import play from '../flow.js';

// число элементов в прогресии
const progressionSize = 10;

const createProgression = (firstElem, increment) => {
  const progression = [];
  for (let index = 0; index < progressionSize; index += 1) {
    progression.push(firstElem + increment * index);
  }
  return progression;
};

const createQuestion = (progression, hiddenIndex) => {
  let question = '';
  progression.forEach((el, i) => {
    let elem = i === hiddenIndex ? '..' : el;
    if (i + 1 < progression.length) {
      elem = `${elem} `;
    }
    question = `${question}${elem}`;
  });
  return question;
};

const generateTask = () => {
  const firstElem = getRandomNumber(1, 100);
  const incr = getRandomNumber(1, 50);
  const progression = createProgression(firstElem, incr);
  const randomProgElemIndex = getRandomNumber(0, progressionSize - 1);
  const question = createQuestion(progression, randomProgElemIndex).toString();
  const rightAnswer = progression[randomProgElemIndex];
  const task = pairs.cons(question, rightAnswer.toString());
  return task;
};

const instruction = 'What number is missing in the progression?';

export default () => {
  play(instruction, generateTask);
};
