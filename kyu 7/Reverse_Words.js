// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.


const reverseWords = (str) => {
    return str.split(" ").map((word)=>[...word].reverse().join("")).join(" ")
}


console.log(reverseWords("Apple Orange"))