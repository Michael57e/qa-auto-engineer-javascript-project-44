import runEngine from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'Find the greatest common divisor of given numbers.'

const getGcd = (x, y) => {
  let a = x
  let b = y

  if (b === 0) return a
  
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const makeRound = () => {
  const x = getRandomNumber(1, 100)
  const y = getRandomNumber(1, 100)
  
  const question = `${x} ${y}`
  const answer = String(getGcd(x, y))
  return [question, answer]
}

export default function playGcd() {
  runEngine(rule, makeRound)
}
