import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

const printGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getInstruct = (pair) => pairs.car(pair);

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
  // Показываем фидбэк
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;( Correct answer is '${rightAnswer}'.`);
  return false;
};

export default (pair) => {
  // Приветствуем и узнаем имя пользователя
  const userName = printGreeting();
  // Заканчиваем игру, если пришли данные не в нужном
  // формате (для игры только с приветствием)
  if (!pairs.isPair(pair)) return;
  // Выводим инструкцию к игре
  console.log(getInstruct(pair));
  // Формируем данные для игры
  const tasks = pairs.cdr(pair);
  // Запускаем игру
  let result;
  const playGame = (counter) => {
    result = playRound(pairs.cdr(pair)[counter]);
    return result && counter + 1 < tasks.length ? playGame(counter + 1) : result;
  };
  playGame(0);
  // Показываем фидбэк:
  printFeedback(result, userName);
};
