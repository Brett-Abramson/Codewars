// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

const count = (string) => {
  const obj = {};
  for (const ltr of string) {
    obj[ltr] ? obj[ltr]++ : (obj[ltr] = 1);
  }

  return obj;
};

console.log(count("aba"));

// REFACTORED

// In functional programming, we often use higher-order functions like map, filter, and reduce to transform and process data. The reduce method is especially useful for aggregating values and is ideal for this counting scenario.

// Here's how we can refactor the count function using reduce:

const countRefactored = (string) => {
  return string.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
};

// Using reduce: We start by using string.split('') to convert the input string into an array of characters. Then, we call the reduce method on the array.

// The use of reduce allows us to avoid explicit looping and maintain a clear and concise implementation.

// Accumulator acc: The reduce function takes two arguments: a callback function and an initial value for the accumulator (acc). In our case, the accumulator will be an object that stores the character counts.

// Callback Function: The callback function is invoked for each element of the array (each character in the string). The function takes two parameters: the accumulator (acc) and the current character (char).

// Counting Characters: Inside the callback function, we check if the character exists as a property in the accumulator. If it does, we increment its count; otherwise, we set its count to 1.

// Returning the Accumulator: The callback function must return the updated accumulator for the next iteration. This is essential for the reduce method to work correctly.

// Initial Value ({}): The empty object {} is the initial value for the accumulator. It ensures that we start with an empty object to store the character counts.
