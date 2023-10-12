// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

const input = [6, 7, 8, 7, 6, 6]

const minValue = (values) => { 
  const unqiueNumArray = new Set(values)
  const smallestNum = parseInt([...unqiueNumArray].sort((a, b) => a - b).join(""))
  return smallestNum
 }

 console.log(minValue(input))