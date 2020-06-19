import readlineSync from 'readline-sync';
import pairs from '@hexlet/pairs';

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

export default (instruct, task) => {
  // Приветствуем
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  // Выводим инструкцию к игре
  console.log(instruct);
  // Запускаем игру
  let result;
  const round = 0;
  const playGame = (counter) => {
    result = playRound(task[counter]);
    return result && counter + 1 < task.length ? playGame(counter + 1) : result;
  };
  playGame(round);
  // Показываем фидбэк:
  printFeedback(result, userName);
};
