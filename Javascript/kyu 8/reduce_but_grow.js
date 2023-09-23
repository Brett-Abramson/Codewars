// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = (x) => x.reduce((result, number) => result * number)
 

 console.log(grow([5,4,3,2,1]))