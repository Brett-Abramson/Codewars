const findShort = (s) => {
    compare = (a, b) => a.length - b.length
    let shortestWord = s.split(" ").sort(compare)
    return shortestWord[0].length
}
function findsShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
console.log (findsShort("bitcoin take over the world maybe who knows perhaps"))

// find the length of each word in array
// sort by length of each word