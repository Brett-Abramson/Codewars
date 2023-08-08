// Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

// Example:

// 13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

// Hence the asnwer will be 2 (=13-11)

const minDistance = (n) => {
  let factors = []
  
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i)
  }

  let minFactorDistance = n

  for (let index = 1; index < factors.length; index++) {
    const factorDistance = factors[index] - factors[index - 1]
    if(factorDistance < minFactorDistance) minFactorDistance = factorDistance
  }
  return minFactorDistance
}

console.log(minDistance(13013))

