// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

const vowelIndices = (word) => { 
  let vowelPosition = []

  for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[aeiouy]/i)) {
      vowelPosition.push(i + 1)
    }
  }

  return vowelPosition
 }

 console.log(vowelIndices("Super"));

//  word to lowercase
// create an empty array to place position of vowels
// search through word determining if that place is a vowel or not
// if it is add the position plus one to array
// return array