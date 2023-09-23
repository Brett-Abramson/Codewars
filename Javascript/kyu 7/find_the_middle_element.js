// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

const tuple = [2, 3, 1];

const gimme = (triplet) => {
  const sortedArray = [...triplet];
  sortedArray.sort((a, b) => a - b);

  return triplet.indexOf(sortedArray[1]);
};

console.log(gimme(tuple));


