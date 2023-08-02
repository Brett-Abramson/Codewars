// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

const count = (string) => {
  const uniqueStrings = new Set(string)
  let num = 1
  const object = {}
  
  
  uniqueStrings.forEach((ltr) => {
    // object[ltr] = num
    let count = new RegExp(`${ltr}`)
  })
  
  return object
}

console.log(count("aba"))