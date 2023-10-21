// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

// const findDifference = (a, b) =>
//   a.reduce((volume, side) => (volume *= side), 1) >
//   b.reduce((volume, side) => (volume *= side), 1)
//     ? a.reduce((volume, side) => (volume *= side), 1) -
//       b.reduce((volume, side) => (volume *= side), 1)
//     : b.reduce((volume, side) => (volume *= side), 1) -
//       a.reduce((volume, side) => (volume *= side), 1);

const findDifference = (a, b) => { 
  const cubeA = a.reduce((volume, side) => (volume *= side))
  const cubeB = b.reduce((volume, side) => (volume *= side))

  return cubeA > cubeB ? cubeA - cubeB : cubeB - cubeA
 }


console.log(findDifference([9, 7, 2], [5, 2, 2]));
