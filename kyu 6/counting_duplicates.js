// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

const duplicateCount = (text) => {
  let dbls = text.toLowerCase().split("").sort();
  if (dbls.length <= 1) return 0;
  let duplicates = [];
  // function that checks to see if that letter exists already in an array
  const doesLtrExist = (ltr, array) => {
    let counter = 0
    for (let i = 0; i < array.length; i++) {
      if (ltr !== array[i]) {
        console.log(ltr + "  " + array[i]);
      } else counter++
    }
    return (counter === 0)
  };

    for (let i = 0; i < dbls.length; i++) {
      if (dbls[i] == dbls[i + 1] && doesLtrExist(dbls[i], duplicates))
        duplicates.push(dbls[i]);
    }

  // for (let i = 0; i < duplicates.length - 1; i++) {
  //     for (let j = 0; j < duplicates.length - 1; j++){
  //         if (duplicates[i] == duplicates[j + 1]){
  //             duplicates.pop(duplicates[j])
  //         }
  //     }
  // }
//   console.log(doesLtrExist("e", duplicates));
  return duplicates;
};

string = "Indivisibilities";

console.log(duplicateCount(string));

// for Each, if it doesn't match any of the existing then add it.

// if a == b .pop(a)
