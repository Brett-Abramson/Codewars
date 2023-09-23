// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

const nbDig = (n ,d) => { 
  let count = 0
  const digit = new RegExp(d, "g")
  for (let i = 0; i <= n; i++) {
    const squared = i*i
    let numOfDigits = (squared.toString().match(digit))
    numOfDigits ? count += numOfDigits.length : null
  }
  return count
 }

//  console.log(nbDig(10, 1))

// REFACTORED

const nbDigRefactored = (n , d) => {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    const squared = i * i;
    let num = squared;

    while (num > 0) {
      if( num% 10 === d) {
        count++;
      }
      num = Math.floor(num / 10)
    }
  }

  return count;
}

console.log(nbDigRefactored(10, 1))