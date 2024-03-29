// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

const input = [10, 14, 2, 23, 19]

const largestPairSum = (numbers) => { 
  const sortedNumbers = numbers.sort((a, b) => b - a)

  return sortedNumbers[0] + sortedNumbers[1]
 }


console.log(largestPairSum(input))