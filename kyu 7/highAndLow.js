// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// const highAndLow = (numbers) => {
//     const sortedNumbers = numbers.split(" ").sort(sortNum)
//     return `${sortedNumbers[sortedNumbers.length - 1]} ${sortedNumbers[0]}`
// }

// const sortNum = (a, b) => {
//     return a-b
// }

// Best Practice
//  Sorting is O(nlogn) and max/min is O(n). It's pointless sorting the array if you only need two values. What if there were 100000 elements in the array; it would have to sort 99998 useless items, only for 2 useful items.

const highAndLow = (numbers) => {
    let arr = numbers.split(" ")
    return Math.max(...arr) + " " + Math.min(...arr)
}


const example = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"

console.log(highAndLow(example))