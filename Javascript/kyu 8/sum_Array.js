// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

const array = [6, 2, 1, 8, 10]

const sumArray = (array) => {
  if (!Array.isArray(array) || array.length < 2) return 0;
  
  array.sort((a, b) => a - b)
  let sum = 0
  for (let i = 1; i < array.length - 1; i++) {
    sum += array[i]
  }
  return sum
}


console.log(sumArray(array))

// Best Practice ( O(n) )

function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}