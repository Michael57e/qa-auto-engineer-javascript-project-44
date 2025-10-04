import runEngine from '../index.js'
import getRandomNumber from '../utils.js'

const rule = 'What number is missing in the progression?'

const getProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const getRound = () => {
  const start = getRandomNumber(1, 20)
  const step = getRandomNumber(1, 5)
  const length = getRandomNumber(5, 10)
  const progression = getProgression(start, step, length)

  const hiddenIndex = getRandomNumber(0, progression.length - 1)
  const correctAnswer = String(progression[hiddenIndex])

  progression[hiddenIndex] = '..'

  const question = progression.join(' ')
  return [question, correctAnswer]
}

const runProgressionGame = () => runEngine(rule, getRound)

export default runProgressionGame
