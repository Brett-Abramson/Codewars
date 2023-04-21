const XO = (str) => {
    let howManyXs = 0
    let howManyOs = 0
    const xS = str.toLowerCase().split("").forEach((ltr) => {
       ltr === "x" ?  howManyXs++ : null
       ltr === "o" ? howManyOs++ : null
    })
    return howManyOs === howManyXs 
}

console.log(XO("xoxoxoxoox"))