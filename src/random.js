// случайное число из диапазона
const getRandomNumber = (min, max) => {
  const randNumer = min + Math.random() * (max + 1 - min);
  return Math.floor(randNumer);
};

export default getRandomNumber;
