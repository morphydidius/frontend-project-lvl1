import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

// кол-во раундов игры
const roundsNumber = 3;

const getTask = (pair) => pairs.car(pair);

const getRightAnswer = (pair) => pairs.cdr(pair);

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const printFeedback = (result, name) => {
  if (result) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

const playRound = (pair) => {
  // Текст задания раунда
  console.log(`Question: ${getTask(pair)}`);
  // Ввод ответа
  const userAnswer = getUserAnswer(pair);
  // Проверка ответа
  const rightAnswer = getRightAnswer(pair);
  // Показываем фидбэк по раунду и возвращаем ответ
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;( Correct answer is '${rightAnswer}'.`);
  return false;
};

export default (instruct, getGameData) => {
  // Приветствуем пользователя и сохраняем его имя
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // Выводим инструкцию к игре
  console.log(instruct);
  // Задаем функцию с игрой и стартовые параметры игры
  let result;
  const round = 0;
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
  printFeedback(result, userName);
};
