import runEngine from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (num) => {
  return num % 2 === 0
}

const getRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return [String(question), correctAnswer]
}

const startEvenGame = () => runEngine(rule, getRound)

export default startEvenGame
