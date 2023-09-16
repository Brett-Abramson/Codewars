// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

const input = "f7g42g16hcu5";

const solve = (string) => {
  const regEx = /[a-z]/i;
  let largestNum = 0;
  let currentNum = "";

  for (const index of string) {
    if (!regEx.test(index)) {
      currentNum = currentNum + index.toString();
    } else {
      if (currentNum > largestNum) largestNum = parseInt(currentNum);
      currentNum = "";
    }
  }
  if (currentNum > largestNum) largestNum = parseInt(currentNum);
  return largestNum;
};

console.log(solve(input));

//  got through array and if at that spot it is a number
// add it to variable
// when the next spot isn't a number,
//  first compare it to largest number and if bigger replace largest number
//  then set num back to null
