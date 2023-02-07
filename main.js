// Random quotes generator
// Test log to check node is executing locally
// console.log('Hello World!')

// Store messages/quotes in an array of strings
let randomQuotes = [
  'To pretend, I actually do the thing: I have therefore only pretended to pretend. Jacques Derrida',
  'The consensus seemed to be that if really large numbers of men were sent to storm the mountain, then enough might survive the rocks to take the citadel. This is essentially the basis of all military thinking. Terry pratchett',
  'You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you. James Allen',
  'You know it\'s funny when it rains it pours, They got money for wars, but can\'t feed the poor. Tupac Shakur',
  'What\'s done cannot be undone. William Shakespeare',
  'The house does not rest upon the ground, but upon a woman. Mexican Proverb',
  'Repetition teaches (even) a donkey. (Practice makes perfect.) Arabic Proverb',
  'The believer is not bitten from the same hole twice. Islamic Proverb',
  'When was the last time you read the Quran? If you want to change, start with the book of Allah. [Anonymous].',
  'Sell this life for the next and you win both of them. Sell the next life for this and you lose both of them. [Hasan al-Basri]',
  'Allah does not wrong the people at all, but it is the people who are wronging themselves. [Quran 10:44]',
]

// Create a function that returns a random quote from the array above

const returnQuote = (randomQuotes) => {
  const randomIndex = Math.floor(Math.random() * randomQuotes.length)
  console.log(randomIndex)
  return
}
returnQuote(randomQuotes)
