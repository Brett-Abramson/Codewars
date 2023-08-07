// The number 89 is the first integer with more then one digit that fulfills the propert partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89 = 8^1 + 9^2

// The next number in having this property is 135:
// 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

const sumDigPow = (a, b) => {
  // array of integers to be returned
  let eurekas = [];
  // for loop from a to b
  for (let i = a; i <= b; i++) {
    let array = i.toString().split("");
    let digitsToPow = 0;
    array.forEach((digit, index) => {
      digitsToPow += Math.pow(digit, index + 1);
    });

    if (digitsToPow === i) eurekas.push(i);
  }
  return eurekas;
};

console.log(sumDigPow(1, 100));

// REFACTORED
// change variable names for better readability
// use a for loop instead of forEach to slightly improve performance, as forEach introduces the overhead of the function call for each digit

const sumDigPowRefactored = (a, b) => {
  let eurekas = [];

  for (let i = a; i <= b; i++) {
    const digits = i.toString().split("");
    let sumOfPowers = 0;

    for (let index = 0; index < digits.length; index++) {
      sumOfPowers += Math.pow(Number(digits[index]), index + 1);
    }

    if (sumOfPowers === i) {
      eurekas.push(i);
    }
  }

  return eurekas;
};

console.log(sumDigPowRefactored(1, 1000));
