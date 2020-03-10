import readlineSync from 'readline-sync';

const printWords = () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  return actual;
};
export default printWords;
