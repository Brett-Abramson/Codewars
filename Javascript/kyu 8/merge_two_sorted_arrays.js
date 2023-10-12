// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [10, 8, 6, 4, 2];

// const mergeArrays = (arr1, arr2) => {
//   const mergedArr = arr1.concat(arr2);
//   const sortedArr = mergedArr.sort((a, b) => a - b);
//   return sortedArr;
// };

const mergeArrays = (arr1, arr2) => {
  const mergedArray = arr1.concat(arr2);
  const sortedArray = mergedArray.sort((a, b) => a - b);
  let mergedSortedFiltered = []

  sortedArray.forEach(element => {
    mergedSortedFiltered.includes(element) ?
    null
    : mergedSortedFiltered.push(element)
  });

  return mergedSortedFiltered
};

console.log(mergeArrays(arr1, arr2));
