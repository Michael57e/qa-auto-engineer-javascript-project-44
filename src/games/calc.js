import runEngine from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'What is the result of the expression?'
const operators = ['+', '-', '*']

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
    }
}

const getRound = () => {
  const num1 = getRandomNumber(1, 50)
  const num2 = getRandomNumber(1, 50)
  const operator = operators[getRandomNumber(0, operators.length - 1)]

  const correctAnswer = calculate(num1, num2, operator)
  const question = `${num1} ${operator} ${num2}`

  return [question, String(correctAnswer)]
}

const startCalcGame = () => runEngine(rule, getRound)

export default startCalcGame
