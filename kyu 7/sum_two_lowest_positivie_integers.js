// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.


const sumTwoSmallestNumbers = (num) => {
  const sortedNum = num.sort((a, b) => a - b)

  return sortedNum[0] + sortedNum[1]
}


const exampleArray = [19, 5, 42, 2, 77]
console.log(sumTwoSmallestNumbers(exampleArray))

// REFACTOR
// In terms of time complexity, the iterative approach with two variables has a better performance, as it is linear O(n), compared to the sort method's superlinear O(n * log(n)) time complexity. As the size of the input array grows, the difference in time complexity becomes more significant.

// In terms of memory usage, the iterative approach with two variables is more memory-efficient. It uses constant additional memory O(1), while the sort method creates an additional array that takes O(n) memory.

// Considering both time complexity and memory usage, the iterative approach with two variables is generally preferred over the sort method for this specific problem. It offers better performance and lower memory overhead, making it a more efficient solution
function sumTwoSmallestNumbersNEW(numbers) {  
    var min = Number.MAX_SAFE_INTEGER;
    var secondMin = Number.MAX_SAFE_INTEGER;
    
    var n;
    for (i = 0; i < numbers.length; i++) {
      n = numbers[i];
        if(n < min) {
          secondMin = min;
        min = n;
      } else if( n < secondMin ) {
          secondMin = n;
      }
    }
    
    return min + secondMin;
  }