// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

const sumOfDifferences = (array) => {
  let sortedArray = array.sort((a, b) => b - a);
  let result = 0;
  // let result = sortedArray.reduce((total, value, index, array) => {
  //   if (index < array.length - 1) {
  //     total + (value - array[index + 1]);
  //   }
  // });
  for (let i = 0; i < sortedArray.length - 1; i++) {
    result += sortedArray[i] - sortedArray[i + 1];
  }

  return result;
};

const arr = [2, 1, 10];
console.log(sumOfDifferences(arr));

// REFACTORED USING MATHS
const sumOfDifferencesRefactored = (arr) => { 
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
 }