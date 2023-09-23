// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

const doubleChar = (str) => {
    let newStr = []
    str.split("").map((ltr)=>{newStr.push(ltr+ltr)})
    return newStr.join("")
}
console.log(doubleChar("String"))

// refactored

const doubleChar2 = (str) => str.split("").map(ltr => ltr + ltr).join("")

console.log(doubleChar2("Hello World!"))