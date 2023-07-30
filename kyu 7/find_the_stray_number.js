// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

const array = [1, 1, 2];

const stray = (num) => {
  num.sort();
  return num[1] !== num[0] ? num[0] : num[num.length - 1];
};

console.log(stray(array));

