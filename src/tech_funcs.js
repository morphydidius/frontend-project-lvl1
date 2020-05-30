import readlineSync from 'readline-sync';

export const getName = () => {
  const actualName = readlineSync.question('May I have your name? ');
  return actualName;
};

export const congratulate = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const greetPerson = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

export const randomOperation = () => {
  const randomNum = getRandomNumber();
  if (randomNum < 30) {
    return 'add';
  }
  if (randomNum < 60) {
    return 'sub';
  }
  return 'mult';
};

export const operationToSymbol = (str) => {
  switch (str) {
    case 'sub':
      return '-';
    case 'mult':
      return '*';
    default:
      return '+';
  }
};

// использовать eval