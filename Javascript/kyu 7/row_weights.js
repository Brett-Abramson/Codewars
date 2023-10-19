// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.

const rowWeights = (array) => {
  let team1 = 0
  let team2 = 0

  array.map((weight, position) => {
    position % 2 ? team2 += weight : team1 += weight
  });

  return [team1, team2]
};

console.log(rowWeights([50,60,70,80]))