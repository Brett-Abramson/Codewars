// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
const arrayPairs = [
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
];

const openOrSenior = (data) => {
  let memberCategory = [];

  for (let i = 0; i < data.length; i++) {
    data[i][0] >= 55 && data[i][1] > 7
      ? memberCategory.push("Senior")
      : memberCategory.push("Open");
  }

  return memberCategory;
};

// console.log(openOrSenior(arrayPairs));

// REFACTORED
// The refactored version using the map method is considered better practice for a few reasons:

// Readability: The refactored version is more concise and easier to read. The use of destructuring and the ternary operator makes the code more straightforward and less cluttered.

// Functional Programming: The map method is a functional programming concept that directly transforms each element in the array, leading to more expressive and functional-style code.

// Immutability: The refactored version maintains immutability by creating a new array to store the categories. This is generally preferred in functional programming as it avoids side effects.

// Less Mutation: In the original version, the for loop directly pushes elements into the memberCategory array. In contrast, the map method creates a new array with the transformed elements, avoiding in-place mutation.

// Code Maintenance: The refactored version is easier to maintain and modify in the future due to its clarity and adherence to functional programming principles.

// Therefore, the refactored version using the map method is considered better practice and is recommended for its readability, adherence to functional programming principles, and better code maintainability.

const openOrSeniorRefactored = (data) => {
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? "Senior" : "Open")
}

console.log(openOrSeniorRefactored(arrayPairs))