// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

// const multiply = (number) => { 
//   let digits = 0
//   if(number.toString()[0] !== "-"){
//     digits = number.toString().length
//   } else {
//     digits = number.toString().length - 1
//   }
  
//   return number * (5 ** digits)
//  }

//  console.log(multiply(150));


//  REFACTORED 


const multiply = (number) => { 
  let digits = Math.abs(number).toString().length

  return number * (5 ** digits)
 }

 console.log(multiply(-3));