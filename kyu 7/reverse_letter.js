// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

const reverseLetter = (str) => { 
  return str.match(/[a-z]/gi).reverse().join("")
 }


console.log(reverseLetter("ultr53o?n"))