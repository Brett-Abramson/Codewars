// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

const findUniq = (array) => {
  const values = [...new Set(array)];

  let firstValue = 0;

  for (let i = 0; i <= 3; i++) {
    array[i] === values[0] ? firstValue++ : null;
  }

  return firstValue >= 2 ? values[1] : values[0];
};

console.log(findUniq([1, 0, 0]));

// console.log(
//   `Numbers[0]: ${numbers[0]} === Array[0]: ${array[0]} && (Array[1]: ${array[1]} || Array[2]: ${array[2]}`
// );

// match that number with one from the SET
// return the other number
