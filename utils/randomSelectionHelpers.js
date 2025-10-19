
const searchedWords = [
  'restaurants',
  'bars',
  'cafes',
  'pubs',
  'hotels',
  'restaurants in London',
]

const londonPostcodes = [
  "E2 8AA", 
  "SW7 2AZ", 
  "N1 9AL", 
  "SE1 2UP", 
  "W1D 3QF"
]

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const selectSearchWords = searchedWords[getRandomInt(0, 0)];
export const selectPostcode = londonPostcodes[getRandomInt(0, 4)]