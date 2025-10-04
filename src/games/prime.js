import runEngine from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num <= 1) return false

  const maxDivisor = Math.sqrt(num)
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const getRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'
  return [String(question), correctAnswer]
}

const startPrimeGame = () => runEngine(rule, getRound)

export default startPrimeGame
