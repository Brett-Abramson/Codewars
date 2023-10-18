// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

// const mxdiflg = (a1, a2) => {
//   if(a1.length === 0 || a2.length === 0) return -1

//   let maxA1 = 0
//   let minA1 = a1[0].length
//   for (const string of a1) {
//     if (maxA1 < string.length) maxA1 = string.length
//     if (minA1 > string.length) minA1 = string.length
//   }
//   let maxA2 = 0
//   let minA2 = a2[0].length
//   for (const string of a2) {
//     if (maxA2 < string.length) maxA2 = string.length
//     if (minA2 > string.length) minA2 = string.length
//   }

//   const a = Math.abs(maxA1 - minA2)
//   const b = Math.abs(minA1 - maxA2)
//   const c = Math.abs(maxA2 - minA1)
//   const d = Math.abs(minA2 - maxA1)

//   return Math.max(...[a,b,c,d])
// };

const mxdiflg = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) return -1;
  const a1Lengths = a1.map((string) => string.length);
  const a2Lengths = a2.map((string) => string.length);

  const a1Max = Math.max(...a1Lengths);
  const a1Min = Math.min(...a1Lengths);
  const a2Max = Math.max(...a2Lengths);
  const a2Min = Math.min(...a2Lengths);

  return Math.max(a1Max - a2Min, a2Max - a1Min);
};

console.log(
  mxdiflg(
    [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ],
    ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  )
);
