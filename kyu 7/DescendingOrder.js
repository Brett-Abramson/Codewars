const descendingOrder = (num) => {
    const compare = (a, b) => {return b-a}
    const array = num.toString().split("").sort(compare).join("");
    return Number.parseInt(array)
}


console.log(descendingOrder(41768))