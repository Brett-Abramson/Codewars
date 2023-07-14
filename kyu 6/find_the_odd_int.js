// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const findOdd = (A) => {
  // seperates unique values
  let uniqueArray = A.filter((v, i, arr) => {
    return i == arr.indexOf(v);
  });
  // determines if unique value appears an odd amount of times in original array
  let oddNum = "no odd number"
  uniqueArray.forEach(element => {
    let counter = 0
    A.map((value)=>{
        value === element ? counter ++ : null
    })
    counter % 2 === 0 ? null : oddNum = element
  });
  return oddNum;
};

const array = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

console.log(findOdd(array));


// My solution time complexity was O(n^2)
// The one below is O(n)
function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }