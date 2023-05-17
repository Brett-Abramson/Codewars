// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

const sumStr = (a, b) => {
    if (a == "") a = 0
    if (b == "") b = 0
    let sum = parseInt(a) + parseInt(b)
    return sum.toString()
}


console.log(sumStr("2", "4"))

// // Other Ways to Solve
function sumStr(a, b) {
    return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
  }

function sumStr(a,b) {
return String(Number(a)+Number(b));
}

console.log(sumStr("3", "28"))