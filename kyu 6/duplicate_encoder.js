// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const duplicateEncode = (word) => {
    const ltrAmount = {};
    const string = word.toLowerCase()
    
    for (const ltr of string) {
        ltrAmount[ltr] ? ltrAmount[ltr]++ : ltrAmount[ltr] = 1
    }
    let encoded = ""
    // for each ltr in word check to see its value in ltrAmount is over 1
    for (const ltr of string) {
        (ltrAmount[ltr] > 1) 
        ? encoded += ")"
        : encoded += "("
    }
    return encoded
};

console.log(duplicateEncode("Recede"));

// REFACTORED

// This refactored version increases the time complexity but uses regex

const duplicateEncodeRefactored = (word) => {
    const string = word.toLowerCase();
    return string.replace(/./g, (match) => string.indexOf(match) === string.lastIndexOf(match) ? "(" : ")")
}

// In this regex solution, we use the replace method with the regular expression /./g, which matches any character in the input string. The second argument of the replace method is a callback function that gets called for each match. Inside the callback, we check if the character match appears only once in the string (i.e., its first and last index are the same), and if so, we replace it with '(', otherwise, we replace it with ')'.

// This regex solution achieves the same result as the previous ones but in a more compact manner. The time complexity is still O(n^2) due to the use of indexOf and lastIndexOf methods, but the code is shorter and more expressive.