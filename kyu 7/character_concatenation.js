// DESCRIPTION:
// Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

// If the string's length is odd drop the central element.

// For example:

// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result

const input = "Code!Wars";

const charConcat = (string) => {
  let conCat = "";
  if (string % 2 !== 0) {
    conCat =
      string.substring(0, Math.floor(string.length / 2)) +
      string.substring(Math.ceil(string.length / 2), string.length);
  } else conCat = string;
  let endIndex = string.length - 1
  let finalString = ""
  for (let i = 0; i < endIndex; i++) {
    finalString += string[i] + string[endIndex] + ( i + 1)
    endIndex--
  }
  return finalString;
};

console.log(charConcat(input));
