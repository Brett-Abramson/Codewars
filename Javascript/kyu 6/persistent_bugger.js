// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

const persistence = (num) => {
  // Function that seperates a number into an array of its digits
  const digits = (value) => value.toString().split("");
  // Check for one-digit number
  if(digits(num).length === 1) return 0
  // Multiply the digits
  const multiplyDigits = (array) => {
    let total = array[0];
    if (array.length > 2) {
        for (let i = 1; i < array.length - 1; i++) {
          total *= Number(array[i]) * Number(array[i + 1]);
          console.log(`${array[0]} * ${array[i]} * ${array[i + 1]} = ${total}`)
        }
    } else {
        total = array [0] * array [1]
    }
    return total;
  };
  // result of multiplying intial input
  let total = multiplyDigits(digits(num));
  // counter of multiplicative persistence
  let counter = 1;
  // multiplies digits until result is one-digit
  while ((digits(total)).length !== 1) {
    console.log(total)
    console.log("counter= " + counter);
    total = multiplyDigits(digits(total));
    counter++;
  }
  return counter;
};

console.log(persistence(9646392));

// refactored

const persistenceRefactor = (num) => {
    let counter = 0
    while ( num >= 10) {
        num = multiplyDigits(num)
        counter++
    }
    return counter
}

const multiplyDigits = (num) => {
    // 1 so the first index reflects itself
    let result = 1
    // turns number into an array of its digits
    const digits = String(num).split("")
    // multiplies digits together
    for (let i = 0; i < digits.length; i++) {
        result *= Number(digits[i])
    }

    return result
}


// Best Practice
function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }