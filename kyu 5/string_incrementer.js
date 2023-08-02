// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
const string = "foobar000";
const incrementString = (string) => {
  // does string end with INT
  if (!/[0-9]/.test(string)) {
    // if false add 1 to end
    string += "1";
    return string;
  }
  // if true
  // seperate letters from numbers
  const letters = string.match(/[a-z]/gi);
  const integers = string.match(/[0-9]/g);
  // isolate last number
  // increase last number by 1
  // integers[integers.length - 1]++
  // join string back together and return
  return parseFloat(integers)
  // return letters.concat(integers).join("");
};

console.log(incrementString(string));


