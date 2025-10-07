import runEngine from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'Find the greatest common divisor of given numbers.'

const getGcd = (num1, num2) => {
  let a = num1
  let b = num2

  if (b === 0) return a

  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const getRound = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)

  const question = `${num1} ${num2}`
  const correctAnswer = String(getGcd(num1, num2))
  return [question, correctAnswer]
}

const playGcd = () => runEngine(rule, getRound)

export default playGcd
