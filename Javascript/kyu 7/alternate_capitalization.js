// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

const input = "abcdef";

const capitalize = (string) => {
  let evens = "";
  let odds = "";
  for (let i = 0; i < string.length; i += 2) {
    evens += string.charAt(i).toUpperCase() + string.charAt( i + 1)
    odds += string.charAt(i) + string.charAt(i + 1).toUpperCase()
  }
  return [evens, odds]
};

// const capitalize = (string) => {
//   return [...string].reduce(
//     (accum, ltr, index) => {
//       if (index % 2) {
//         accum[0] += ltr;
//         accum[1] += ltr.toUpperCase();
//       } else {
//         accum[0] += ltr.toUpperCase();
//         accum[1] += ltr;
//       }
//       return accum;
//     },
//     ["", ""]
//   );
// };

console.log(capitalize(input));
