// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

const alphabetPosition = (text) => {
  const upperCaseString = text.toUpperCase();
  let positions = [];
  for (let i = 0; i < upperCaseString.length; i++) {
    if (/[A-Z]/.test(upperCaseString[i])) {
      const alphabetPos = upperCaseString.charCodeAt(i) - 64;
      positions.push(alphabetPos);
    }
  }
  return positions.join(" ");
};


// REFACTORED

const alphabetPosition1 = (text) => {
  const ASCII_OFFSET = 64;
  const isAlphabetical = (char) => char >= "A" && char <= "Z";

  return text
    .toUpperCase()
    .split("")
    .filter(isAlphabetical)
    .map((char) => char.charCodeAt(0) - ASCII_OFFSET)
    .join(" ");
};


console.log(alphabetPosition1("Abc"));
