// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// const deleteNth = (arr, n) => {
//   let occurences = {};
//   let newArray = [];
//   for (const num of arr) {
//     if (!occurences[num]) {
//       occurences[num] = 1;
//       newArray.push(num);
//     } else {
//       if (occurences[num] < n) {
//         occurences[num]++;
//         newArray.push(num);
//       }
//     }
//   }
//   return newArray;
// };

// const deleteNth = (arr, n) => {
//   const occurences = new Map();
//   let displayArray = [];

//   for (const num of arr) {
//     if (!occurences.has(num)) {
//       occurences.set(num, 1);
//       displayArray.push(num)
//     } else if (occurences.get(num) < n) {
//       const count = occurences.get(num) + 1;
//       occurences.set(num, count);
//       displayArray.push(num)
//     }
//   }

//   return displayArray
// };



//  could use the filter method!!

const deleteNth = (arr, n) => {
  const occurences = new Map();

  return arr.filter((num) => {
    const count = occurences.get(num) || 0;
    if (count < n) {
      occurences.set(num, count + 1);
      return true;
    }
    return false;
  });
};

console.log(deleteNth([20, 37, 20, 21, 19, 37, 20], 1));