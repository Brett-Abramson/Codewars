// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


array = [ "A", "D", "C","C","P",]
string = "ABBCcAD"

const uniqueInOrder = (i) => {

    let newArray= []

    if (typeof i === "string") {
        newArray = i.split("")
    } else if (Array.isArray(i)) {
        newArray = i
    }

    const uniqueArray = newArray.filter((value, index) => value !== newArray[index - 1])

    return uniqueArray
}

console.log(uniqueInOrder(array))
console.log(uniqueInOrder(string))


// BEST PRACTICE

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}