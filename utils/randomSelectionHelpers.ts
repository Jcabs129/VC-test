
const searchedWords = [
  'restaurants',
  'bars',
  'cafes',
  'pubs',
  'hotels',
  'restaurants in London',
]

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const selectSearchWords = searchedWords[getRandomInt(0, 0)];