import calc from './games/calc.js';
import { greetPerson, congratulate } from './tech_funcs.js';

export const classNumber = () => {
  let result = false;
  const randomNumber = Math.floor(Math.random() * 100);
  const getRightAnswer = (n) => {
    const mod = n % 2;
    if (mod === 0) {
      return 'yes';
    }
    return 'no';
  };
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

const initGame = (game) => (attempt = 0) => {
  const maxTry = 3;
  let result = false;
  let gameFunc;
  switch (game) {
    case ('calc'):
      gameFunc = calc;
      break;
    default:
      gameFunc = calc;
  }
  result = gameFunc();
  if (!result) {
    return result;
  }
  if (attempt + 1 < maxTry) {
    return initGame(game)(attempt + 1);
  }
  return true;
};

export const playGame = (gameName) => () => {
  const name = greetPerson();
  const result = initGame(gameName)();
  if (result) {
    congratulate(name);
  }
};
