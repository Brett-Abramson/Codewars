// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM

const input = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

// const dataReverse = (data) => { 
//   let numOfBytes = data.length / 8
//   let segmentedArray = []
  
//   let start = 0
//   let stop = 8
//   while (numOfBytes > 0) {
//     segmentedArray.push(data.slice(start, stop))

//     numOfBytes--
//     start += 8
//     stop += 8
//   }
//   return segmentedArray.reverse().flat()
//  }

// REFACTORED

const BYTE_SIZE = 8;

const dataReverse = (data) => { 
  const segmentedArray = [];

  for (let i = 0; i < data.length; i += BYTE_SIZE) {
    segmentedArray.push(data.slice(i, i + BYTE_SIZE))
  }

  return segmentedArray.reverse().flat()
 }

 console.log(dataReverse(input))