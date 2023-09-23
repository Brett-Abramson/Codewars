// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

const between = (a,b) => {
  let array = []
  for(let i = a; i <= b; i++){
    array.push(i)
  }
  return array
}

console.log(between(2,10))