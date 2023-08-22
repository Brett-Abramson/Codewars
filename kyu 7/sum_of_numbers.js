// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

const getSum = (a, b) => { 
  let sum = 0
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i
  }
  return sum
 }

 console.log(getSum(4, 1))