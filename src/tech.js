// кол-во раундов
export const roundsNumber = 3;

// случайное число из диапазона
export const getRandomNumber = (min, max) => {
  const randNumer = min + Math.random() * (max + 1 - min);
  return Math.floor(randNumer);
};

export const formTask = (formTaskElem) => {
  const arr = [];
  for (let round = 0; round < roundsNumber; round += 1) {
    const taskElem = formTaskElem();
    arr.push(taskElem);
  }
  return arr;
};
