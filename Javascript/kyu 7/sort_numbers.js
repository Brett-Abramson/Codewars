// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

const array = [1, 2, 3, 10, 5];
const emptyArray = [];
const solution = (nums) => {
  return nums === null || nums === []
    ? (nums = [])
    : nums.sort((a, b) => a - b);
};

console.log(solution(array));
