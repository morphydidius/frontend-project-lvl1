import readlineSync from 'readline-sync';

export const getName = () => {
  const actualName = readlineSync.question('May I have your name? ');
  return actualName;
};

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
