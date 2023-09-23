// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

const capitals = (word) => {
  const capitals = word.match(/[A-Z]/g)
  let capitalIndexes = [] 
  capitals.forEach((ltr) => {
    capitalIndexes.push(word.indexOf(ltr))
  })
  return capitalIndexes
};

console.log(capitals("CodEWaRs"));
