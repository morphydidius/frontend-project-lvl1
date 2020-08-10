import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

// кол-во раундов игры
const roundsCount = 3;

export default (instruct, getGameData) => {
  // Запрашиваем имя пользователя и приветствуем его
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // Выводим инструкцию к игре
  console.log(instruct);

  // Задаем функцию игры в один раунд
  const playRound = (pair) => {
    const roundQuestion = `Question: ${pairs.car(pair)}`;
    console.log(roundQuestion);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = pairs.cdr(pair);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${userAnswer}' is wrong answer ;( Correct answer is '${rightAnswer}'.`);
    return false;
  };

  // Задаем функцию полной игры
  const playGame = (counter = 0) => {
    const task = getGameData();
    const roundResult = playRound(task);
    if (!roundResult) {
      console.log(`Let's try again, ${userName}!`);
      return roundResult;
    }
    if (counter + 1 < roundsCount) {
      return playGame(counter + 1);
    }
    console.log(`Congratulations, ${userName}!`);
    return roundResult;
  };

  // Запускаем игру
  playGame();
};
