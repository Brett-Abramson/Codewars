// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

let strCount = (str, ltr) => {
    let regex = new RegExp(ltr, "g")
    let matches = str.match(regex)
    return matches ? matches.length : 0
}

let string = "Noticing"

console.log(strCount(string, "i"))


// Best Practice

const bpStrCount = (string, letter) => {
    return string.split(letter).length-1
}