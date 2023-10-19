// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value



const array = (string) => { 
  let array =  string.split(",")
  if (array.length < 3) return null
  array.shift()
  array.pop()

  return array.join().replaceAll(","," ") 
 }



 console.log(array("a1, b2,3 ,323"))