// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

const expandedForm = (num) => {
  let numArray = num.toString().split("");
  let expanded = "";

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] != 0 && i === 0) {
      expanded += numArray[i].padEnd(numArray.length - i, "0")
    } else if (numArray[i] != 0) {
      expanded += ` + ` + numArray[i].padEnd(numArray.length - i, "0")
    } 
  }
  return expanded;
};

console.log(expandedForm(42));

// REFACTORED

const expandedForm1 = (num) => {
  if(typeof num !== "number" || !Number.isInteger(num)){
    throw new Error("Input must be a positive integer.")
  }
  
  const numStr = Math.abs(num).toString();
  const numArray = numStr.split("")
  let expanded = "";

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] !== 0 ) {
      expanded += (i > 0 ? " + " : "") + numArray[i].padEnd(numArray.length - i, "0")
    } 
  }
  return num >= 0 ? expanded : "-" + expanded;
};