// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

const twoArePositive = ( a, b, c) => {
  if(isPositive(a) && isPositive(b) && !isPositive(c)) {
    return true
  } else if(isPositive(b) && isPositive(c) && !isPositive(a)) {
    return true
  } else if(isPositive(c) && isPositive(a) && !isPositive(b)) {
    return true
  } else return false
}

const isPositive = (num) => {
    if(num > 0) return true
}


console.log(twoArePositive(2, 4, -3))