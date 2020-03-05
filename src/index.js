import readlineSync from 'readline-sync';

const printWords = () => {
	const actual = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${actual}!`);
}

export default printWords;