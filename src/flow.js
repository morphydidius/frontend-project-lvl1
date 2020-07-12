import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

// кол-во раундов игры
const roundsNumber = 3;

export default (instruct, getGameData) => {
  // Запрашиваем имя пользователя и приветствуем его
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // Выводим инструкцию к игре
  console.log(instruct);

  // Задаем стартовые параметры игры
  let result;
  const round = 0;

  // Задаем функцию игры в один раунд
  const playRound = (pair) => {
    // Текст задания раунда
    console.log(`Question: ${pairs.car(pair)}`);
    // Запрашиваем у пользователя ответ
    const userAnswer = readlineSync.question('Your answer: ');
    // Получаем правильный ответ
    const rightAnswer = pairs.cdr(pair);
    // Проверяем ответ, показываем фидбэк по раунду и возвращаем результат раунда
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${userAnswer}' is wrong answer ;( Correct answer is '${rightAnswer}'.`);
    return false;
  };

  // Задаем функцию полной игры
  const playGame = (counter) => {
    // Получаем задание раунда
    const task = getGameData();
    // Играем раунд
    result = playRound(task);
    // если ответ верный, проверяем, все ли раунды сыграны, при необходимости переходим к следующему
    // если неверный - заканчиваем игру
    return result && counter + 1 < roundsNumber ? playGame(counter + 1) : result;
  };

  // Запускаем игру
  playGame(round);
  // Показываем фидбэк по игре:
  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
