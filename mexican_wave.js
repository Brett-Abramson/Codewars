// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// 1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

const wave = (str) => {
  let wave = [];
  let splitString = str.split("");
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] !== " ") {
      splitString[i] = splitString[i].toUpperCase();
      if (i > 0) splitString[i - 1] = splitString[i - 1].toLowerCase();
      wave.push(splitString.join(""));
    } else if ( i !== 0) {
      splitString[i - 1] = splitString[i - 1].toLowerCase();
    }
  }
  return wave;
};

console.log(wave("two words"));
