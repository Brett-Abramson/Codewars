// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const duplicateEncode = (word) => {
    const ltrAmount = {};
    const string = word.toLowerCase()
    
    for (const ltr of string) {
        ltrAmount[ltr] ? ltrAmount[ltr]++ : ltrAmount[ltr] = 1
    }
    let encoded = []
    // for each ltr in word check to see its value in ltrAmount is over 1
    for (const ltr of string) {
        (ltrAmount[ltr] > 1) 
        ? encoded.push(")")
        : encoded.push("(")
    }
    return encoded.join("")
};

console.log(duplicateEncoder("Recede"));
