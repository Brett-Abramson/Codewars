// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

const array = [101, 45, 75, 105, 99, 107];


const smallEnough = (array, limit) => { 
  for (const number of array) {
    if(number > limit) return false
  }
  return true
 }

 console.log(smallEnough(input, 107))

//  REFACTORED

const smallEnough1 = (a, limit) => Math.max(...a) <= limit

// problem with this is it will always iterate through the whole array. Where first solution stops as soon as exceeding limit is true