// This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z

const accum = (string) => {

    return string.split("").map((string, index) => {
        let text = ""
        for(let i = 0; i < index; i++){
            text += string.toLowerCase()
        }
        return (
            string.toUpperCase() + text
        )
    }).join("-")
}

let string = "AbdEc"
console.log(accum(string))

// 