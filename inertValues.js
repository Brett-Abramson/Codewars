// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// function invert(array) {
//     return array.map((num) => num * -1)
//  }

 // or could've writtin

 const invert = (array) => array.map((num) => -num)


const array = [1,-2,3,-4,5]

 console.log(invert(array))