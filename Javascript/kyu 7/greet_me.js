// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

const greet = (name) => {
  const firstLtr = name.slice(0, 1).toUpperCase()
  const restOfName = name.slice(1,name.length).toLowerCase()
  const capitalizedName = firstLtr + restOfName
  return `Hello ${capitalizedName}!`
}

console.log(greet("Jack"));