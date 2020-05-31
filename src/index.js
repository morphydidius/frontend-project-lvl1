import calc from './games/calc.js';
import even from './games/even.js';
import { greetPerson, congratulate, playAgain } from './tech_funcs.js';

const initGame = (game) => (attempt = 0) => {
  const maxTry = 3;
  let result = false;
  let gameFunc;
  switch (game) {
    case ('calc'):
      gameFunc = calc;
      break;
    case ('even'):
      gameFunc = even;
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

export default (gameName) => () => {
  const userName = greetPerson();
  if (gameName === 'games') { return; }
  const result = initGame(gameName)();
  if (result) {
    congratulate(userName);
  } else {
    playAgain(userName);
  }
};
