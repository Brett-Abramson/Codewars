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

const towerBuilder2 = (nFloors) => {
  // when i = 0 push and pop don't run
  // when i = 1 they each run once
};
console.log(towerBuilder(3));

// const arrayOf6 = [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********",
// ];

// console.log(arrayOf6[2].length);
