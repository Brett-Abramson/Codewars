// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

const rowSumOddNumbers = (n) => {
  let startingNum = n * (n - 1) + 1
  let numOfNums = n
  let sum = 0
  while(numOfNums > 0) {
    sum += startingNum
    startingNum += 2
    numOfNums--
  }
  
  return sum
  // return Math.pow( n, 3) REFACTOR
}

console.log(rowSumOddNumbers(3))