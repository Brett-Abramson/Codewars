// Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

// Examples:

// 1212 returns:

// "12
// 12"
// Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

// 123123123 returns:

// "123
// 123
// 123"
// Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.

const squareIt = (int) => {
  
  const string = int.toString()
  const length = Math.sqrt(string.length);

  const perfectSquare = (n) => {
    let index = 0
    let square = ""
    while(n > 0) {
      square += `${string.substr(index, length)}\n`;
      index += length;
      n--
    }
    return square.trimEnd()
  }

  return Number.isInteger(length) ?
   perfectSquare(length)
   : "Not a perfect square!";
};

console.log(squareIt(1));

