// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

const testArray = [2, 2, 3];

const twoSum = (numbers, target) => {
  let j = numbers.length - 1;
  for (let i = 0; i < numbers.length; ) {
    if (i === j) {
      j = numbers.length - 1;
      i++;
    } else if (numbers[i] + numbers[j] === target) {
      return [i, j];
    } else j--;
  }
};

console.log(twoSum(testArray, 4));
