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

// console.log(solve(input));


// SIMPLE REFACTOR USING REGEX
const solve1 = s => Math.max(...s.match(/\d+/g));

// REGEX \d is the same as writing [0-9]
// the + sign is a quantifier that specifies that the preceding character or group(in this case, \d) should match one or more times. so \d+ will match one or more consecutive digits
// SO
// \d means all digits
// + means looks for consecutive matches and group them

// Putting it all together, the regex /\d+/g is used to find and match one or more consecutive digits in the input string. When applied with match(), it returns an array containing all the number groupings found in the string.