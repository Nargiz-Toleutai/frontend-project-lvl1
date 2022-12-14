import runGame from '../index.js';

const getRandomNumber = (min, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

const isEven = (n) => n % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const num = getRandomNumber(0, 50);
  const question = String(num);
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, String(answer)];
};

export default () => runGame(description, generateRound);
