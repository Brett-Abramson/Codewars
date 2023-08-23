// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

const input = "4of Fo1r pe6ople g3ood th5e the2"

const order = (words) => { 
  if(!words) return "";
  const stringOrder = words.match(/[0-9]/g);
  const inputArray = words.split(" ");
  let orderedArray = new Array(inputArray.length)
  for (let i = 0; i < inputArray.length; i++) {
    // let numlessWord = inputArray[i].replace(/[1-9]/, "") Don't need to remove number
    orderedArray.splice(stringOrder[i] - 1, 1, inputArray[i])
  }
  return orderedArray.join(" ")
 }

 console.log(order(input))