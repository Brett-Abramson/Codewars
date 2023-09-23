// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const phrase = "what time are we climbing up the volcano";

const high = (x) => {
  // break string into array of words
  const arrayOfPhrase = x.split(" ");

  //   keep track of word with highest score
  let largestWordScore = 0;
  let highestWord = "";

  //   set point values to 1 - 27
  const baseValueOfA = "a".charCodeAt(0);

  for (const word of arrayOfPhrase) {
    let splitWord = word.split("");

    // for each word go through letter by letter
    let wordScore = 0;
    for (const letter of splitWord) {
      // determine ascii value of each letter
      const letterScore = letter.charCodeAt(0) - baseValueOfA + 1;
      // add this value to a counter for the whole word
      wordScore += letterScore;
    }
    // if the total vlaue of the word is more then that of the highest word counter - replace it with this word and counter
    if (wordScore > largestWordScore) {
      highestWord = word;
      largestWordScore = wordScore;
    }
  }
  return highestWord;
};

console.log(high(phrase));

// Refactored

const getWordScore = (word) => {
  const baseValueOfA = "a".charCodeAt(0);
  return word
    .split("")
    .reduce(
      (score, letter) => score + letter.charCodeAt(0) - baseValueOfA + 1,
      0
    );
};

const high1 = (x) => {
    let highestScore = 0;
    let highestWord = "";

    const arrayOfPhrase = x.split("")

    for (const word of arrayOfPhrase) {
        const wordScore = getWordScore(word);
        if (wordScore > highestScore) {
            highestScore = wordScore;
            highestWord = word;
        }
    }

    return highestWord;
}