// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********",
];

const towerBuilder = (nFloors) => {
  // declare an empty array to store the rows of the tower
  let array = [];

  // Calculate the length each row needs to be
  const lengthOfBase = nFloors * 2 - 1;

  // iterate for the number of floors needed
  for (let i = 0; i < nFloors; i++) {
    // declare a new array to hold the characters for the current row
    let firstArray = [];

    // Add asterisks to firstArray, leaving the appropriate amount of space for each side
    for (let j = 0; j < lengthOfBase - i * 2; j++) {
      firstArray.push("*");
    }

    // use a while loop to add and remove spaces to create the pyramid pattern
    let k = i
    while(k > 0){
      // add space to the end
      firstArray.push(" ")
      // add space to the beginning
      firstArray.unshift(" ")
      k--
    }
    // join the characters in firstArray into a string
    const joinedArray = firstArray.join("");
    // add the string to the array representing the current row of the tower
    array[i] = joinedArray;
  }
  
  // Reverse and return the array to arrange the tower rows in the correct order
  return array.reverse();
};

// BEST Practice REFACTOR

const towerBuilder1 = (nFloors) => {
  const tower = [];

  for (let i = 0; i < nFloors; i++) {
    const spaces = " ".repeat(nFloors - i - 1);
    const asterisks = "*".repeat(i * 2 + 1);
    tower.push(spaces + asterisks + spaces);
  }

  return tower;
};

// Instead of using a separate lengthOfBase variable, we directly calculate the number of asterisks in each row as i * 2 + 1, where i represents the floor number (0-indexed).
// We use String.prototype.repeat() to efficiently generate the spaces and asterisks for each row without the need for additional loops.
// The tower array stores the rows of the tower pattern directly as strings with the required spaces and asterisks.
// We push each row into the tower array using the push() method, eliminating the need for an intermediate firstArray.
// The tower array is returned as is, without the need for reversing, as the rows are already in the correct order (bottom to top).
// With this refactoring, the function remains functionally equivalent but with more concise code and improved readability. The use of repeat() simplifies the process of constructing each row, resulting in a cleaner implementation.