import runEngine from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'What is the result of the expression?'

const getCalculation = () => {
  const a = getRandomNumber(1, 50)
  const b = getRandomNumber(1, 50)
  const operators = ['+', '-', '*']
  const op = operators[getRandomNumber(0, operators.length - 1)]

  let correctAnswer
  switch (op) {
    case '+':
      correctAnswer = a + b
      break
    case '-':
      correctAnswer = a - b
      break
    case '*':
      correctAnswer = a * b
      break
  }

  return [`${a} ${op} ${b}`, String(correctAnswer)]
}

const startCalcGame = () => runEngine(rule, getCalculation)

export default startCalcGame
