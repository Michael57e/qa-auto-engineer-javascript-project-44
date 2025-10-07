export const getRandomNumber = (min, max) => {
  // NOSONAR
  return Math.floor(Math.random() * (max - min + 1)) + min
}
