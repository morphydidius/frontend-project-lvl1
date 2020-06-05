import readlineSync from 'readline-sync';

export const getName = () => {
  const actualName = readlineSync.question('May I have your name? ');
  return actualName;
};

export const congratulate = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const playAgain = (name) => {
  console.log(`Let's try again, ${name}!`);
};

export const greetPerson = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomNumber = () => Math.floor(Math.random() * 100);

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

export const getDivArray = (num) => {
  const arr = [1];
  if (!num) {
    return arr;
  }
  const checkArrElem = (numer, del) => {
    if (numer === 1) {
      return arr;
    }
    const mod = numer % del;
    if (!mod) {
      arr.push(del);
      return checkArrElem(numer / del, del);
    }
    return checkArrElem(numer, del + 1);
  };
  return checkArrElem(num, 2);
};
