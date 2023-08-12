// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// A size 3 diamond:

//  *
// ***
//  *

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *

const diamond = (n) => {
  if (n % 2 === 0 || n <= 0) return null;

  let array = [];

  for (let i = 1; i < n; i += 2) {
    let string = "";
    string += " ".repeat((n - i) / 2);
    string += "*".repeat(i);
    string += "\n";
    array.push(string);
  }

  for (let i = n; i > 0; i -= 2) {
    let string = ""
    string += " ".repeat((n - i) / 2)
    string += "*".repeat(i)
    string += "\n";
    array.push(string)
  }
  return array.join("");
};

console.log(diamond(5));

// REFACTORED

const diamondRefactored = (n) => {
  if (n % 2 === 0 || n <= 0) return null;

  let diamondArray = [];

  const generateLine = (spaces, stars) => {
    return " ".repeat(spaces) + "*".repeat(stars) + "\n";
  }

  for (let i = 1; i < n; i += 2) {
    const spaces = (n - i) / 2;
    diamondArray.push(generateLine(spaces, i))
  }

  for (let i = n; i > 0; i -= 2) {
    const spaces = (n - i) / 2
    diamondArray.push(generateLine(spaces, i))
  }
  return diamondArray.join("");
};