import {
  getRandomNum,
  startGame,
  } from '../index.js';

const task = 'What is the result of the expression?';

const min = 1;
const max = 30;

const operators = ['+', '-', '*'];

const getOperator = (operators) => {
  const maxIndex = operators.length - 1;
  const index = getRandomNum(0, maxIndex);
  return operators[index];
};

const calculate = (first, second, operator) => {
  switch (operator) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      return null;
  }
};

const getGameData = () => {
  const firstNum = getRandomNum(min, max);
  const secondNum = getRandomNum(min, max);
  const operator = getOperator(operators);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = String(calculate(firstNum, secondNum, operator));
  return [question, correctAnswer];
};

export default () => {
  startGame(task, getGameData);
};
