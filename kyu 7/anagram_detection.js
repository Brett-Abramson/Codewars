// An anagram is the result of rearranging the letters of a word to produce a new word

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

const isAnagram = (test, original) => {
    return reArragnge(test) === reArragnge(original)  
}

const reArragnge = (str) => {
    return str.toLowerCase().split("").sort().join("")
}
console.log(isAnagram("foefet", "toffee"))