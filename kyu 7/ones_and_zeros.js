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


// BEST PRACTICE

const binaryArrayToNumberUsingBitwise = (array) => {
  return array.reduce((total, digit) => (total << 1) + digit, 0);
};
// Here's what this optimized solution does:

// It uses the reduce function, similar to your original implementation, but with a more concise approach.
// The callback function for the reduce operation takes two arguments: total (accumulator) and digit (the current digit from the binary array).
// (total << 1) + digit is used to calculate the decimal value. Shifting total left by 1 position (equivalent to multiplying by 2) effectively shifts the current value to the next position, and then we add the current digit.
// The initial value for the accumulator is 0, which is passed as the second argument to reduce.
// This solution takes advantage of bitwise left shifting (<<) for more efficient calculation of the decimal value, and the code is more concise. It's also worth noting that this approach doesn't require any explicit branching or conditionals, which can further improve performance.

// While your original solution and the optimized solution both achieve the same result, the optimized solution might be considered more elegant and efficient due to its use of bitwise operations. However, code readability and maintainability are also important, so you should choose an approach that strikes the right balance for your specific use case and team's coding style.






