// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

const productArray = (numbers) => { 
  const totalProduct = numbers.reduce((total, num) => total * num)
  let productArray = []
  for (const number of numbers) {
    productArray.push(totalProduct / number)
  }

  return productArray
 }


console.log(productArray([13,10,5,2,9]));