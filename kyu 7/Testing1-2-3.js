// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

const number = (array) => {
    let newArray = []

    for(let i = 0; i < array.length; i++) {
        newArray.push(`${i+1}: ${array[i]}`)
    }
    return newArray
}


const thisArray = [ "a","b","c"]

console.log(number(thisArray))

// To do this using map

const numberTwo = (array) => {
    return array.map((string, index) => {
        return (index + 1) + ": " + string
    })
}

console.log(numberTwo(thisArray))