import runEngine from '../index.js'
import getrandomNumber from '../utils.js'

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (num) => {
  return num % 2 === 0
}

const getQuestionAndAnswer = () => {
  const question = getrandomNumber(1, 100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

export default () => runEngine(rule, getQuestionAndAnswer)
