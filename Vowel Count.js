const getCount = (str) => {
    let count = 0;
    let newArray = str.toLowerCase().split("");
    for( let i = 0; i < newArray.length; i++) {
        if(newArray[i] === "a" || newArray[i] === "e" || newArray[i] === "o" || newArray[i] === "i" || newArray[i] === "u"){
            count++;
        };
    }
    return count
}

console.log(getCount("Abracadabra"))