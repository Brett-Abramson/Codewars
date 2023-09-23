function abbrevName(name){
    let seperateNames = name.split(" ")
    let firstName = seperateNames[0].split("")
    let lastName = seperateNames[1].split("")
    let firstInitial = firstName[0].toUpperCase()
    let secondInitial = lastName[0].toUpperCase()
    return (`${firstInitial}.${secondInitial}`)
}

console.log(abbrevName("Miles lassi"))