// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

const twoSort = (s) => {
    let firstValue = s.sort()[0]
    return s.sort()[0].split("").join("***")
}


const list = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
// const list = ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]

console.log(twoSort(list))