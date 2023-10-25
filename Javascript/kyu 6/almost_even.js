// We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

// Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts, there is only one valid solution for each input to your function!

// Example:
// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
// Inputs
// The input to your function will always be valid for this kata.

const splitInteger = (num, parts) => {
  const remainder = num % parts;
  const difference = num / parts;

  let evenParts = [];
  if (remainder === 0) {
    for (let i = 0; i < parts; i++) {
      evenParts.push(difference);
    }
  } else {
    for (let i = 0; i < parts - remainder; i++) {
      evenParts.push(Math.floor(difference));
    }
    for (let i = 0; i < remainder; i++) {
      evenParts.push(Math.floor(difference + 1));
    }
  }

  while (evenParts.length !== parts) {
    evenParts.push(0);
  }

  return evenParts;
};

console.log(splitInteger(100, 5));

const checkResult = (array, total) => {
  return array.reduce((total, part) => total + part, 0) === total;
};

console.log(checkResult(splitInteger(100, 5), 100));
