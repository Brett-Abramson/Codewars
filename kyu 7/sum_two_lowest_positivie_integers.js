// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.


const sumTwoSmallestNumbers = (num) => {
  const sortedNum = num.sort((a, b) => a - b)

  return sortedNum[0] + sortedNum[1]
}


const exampleArray = [19, 5, 42, 2, 77]
console.log(sumTwoSmallestNumbers(exampleArray))