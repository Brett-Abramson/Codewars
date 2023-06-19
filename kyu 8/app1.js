// const array = [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true];

// function countSheeps(arrayOfSheep) {
//   const checkIfPresent = (sheep) => {
//     return sheep === true;
//   }
//   return arrayOfSheep.filter(checkIfPresent).length;
// }

// console.log(countSheeps(array));


function past(h, m, s){
    // 1 second is 1000 milliseconds or 1:.001 or 1/1000
    // 1 minute is 60 seconds is 600,000 milliseconds or 1/60,000
    // 1 hour is 60 minutes is 3600 seconds 
    // return (((h/60) + m)/60) + s
    const secSinceMidnight = (h * 3600) + (m * 60) + s     
    return secSinceMidnight * 10000
  }



  console.log(past (1,0,0));