// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

const longest = (s1, s2) => {
    const uniqueArray = ([...new Set(s1.concat(s2))])
    const distinctArray =([...new Set(s2)])
    return uniqueArray.sort().join("")
  }



let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"

  console.log(longest(a,b))