// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

const toAlternatingCase = (str) => {
  const array = str.split("");
  let newArray = []
  array.map((char) => { newArray.push(char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
  });
  return newArray.join("")
};

String.prototype.toAlternatingCase = function() {
    return this.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
  };
  

// console.log(toAlternatingCase("HellO WoRlD"));
const string = "HeLlO WoRlD"
console.log(string.toAlternatingCase())