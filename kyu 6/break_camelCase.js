// // Complete the solution so that the function will break up camel casing, using a space between words.

// const solution2 = (string) => {
//   // turn string into an array
//   const array = string.split("");
//   // check if letter is Uppercase
//   let camelCaseIndex = []
//   array.map((ltr) => {
//     ltr === ltr.toUpperCase()
//       ? (camelCaseIndex.push(array.indexOf(ltr)))
//       : null;
//   });
//   // add a space before the Uppercase letter
//   for (let i = 0; i < camelCaseIndex.length; i++) {
//     array.splice(camelCaseIndex[i] + camelCaseIndex.indexOf(camelCaseIndex[i]),0," ")
//     // console.log(camelCaseIndex.indexOf(camelCaseIndex[i]) + " " + camelCaseIndex[i] + " " + array)
//   }
//   // join array
//   let joinedArray = array.join("");
//   return joinedArray;
// };

// console.log(solution("camelCasingTest"));

const solution = (string) => {
  let array = string.split("");

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
      array.splice(i, 0, " ");
      i++;
    }
  }

  return array.join("");
};

console.log(solution("camelCaseTesting"));

// regEx example :
const regExSolution = (string) => {
  return string.replace(/([A-Z])/g, " $1");
};

console.log(solution("camelCaseTesting"));
