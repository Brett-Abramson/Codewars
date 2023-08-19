// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = (array) => {
  let binaryValue = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      const binaryPlace = array.length - 1 - i;
      const binaryPlaceValue = Math.pow(2, binaryPlace);
      console.log(`${binaryPlace}: ${binaryPlaceValue}`);
      binaryValue += binaryPlaceValue;
    }
  }
  return binaryValue;
};

// console.log(binaryArrayToNumber([1, 1, 1, 1]));

const binaryArrayToNumberRefactored = (array) => {
  const binaryValue = array.reduce((total, currentValue, index) => {
    if(currentValue === 1){
      const currentBinaryValue = Math.pow(2, array.length - 1 -index)
      return total + currentBinaryValue
    }
    return total; // Return the accumulator if the value is not 1
  }, 0)

  return binaryValue
}

console.log(binaryArrayToNumberRefactored([1, 0, 1, 1]));