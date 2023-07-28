// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

const isIsogram = (str) => {
  if (str === "") return true;

  const sortedString = str.toLowerCase().split("").sort();
  console.log(sortedString);
  for (let i = 1; i < sortedString.length; i++) {
    if (sortedString[i] === sortedString[i - 1]) return false;
  }
  return true;
};

console.log(isIsogram("moOse"));
