// An anagram is the result of rearranging the letters of a word to produce a new word

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

const isAnagram = (test, original) => {
    return reArragnge(test) === reArragnge(original)  
}

const reArragnge = (str) => {
    return str.toLowerCase().split("").sort().join("")
}
console.log(isAnagram("foefet", "toffee"))


// REFACTOR

// In terms of efficiency, it's challenging to improve the time complexity significantly for this problem because you need to examine all characters in both strings to check if they are anagrams. However, you can improve the space complexity by avoiding the creation of temporary arrays when sorting.

// Here's an alternative implementation using character frequency counting to improve space complexity:

const isAnagram1 = (test, original) => {
    if (test.length !== original.length) {
      return false; // Anagrams must have the same length
    }
  
    const charFrequency = new Map();
  
    // Count character frequency for the test string
    for (let char of test.toLowerCase()) {
      charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
  
    // Check if the original string has the same characters and frequency
    for (let char of original.toLowerCase()) {
      const frequency = charFrequency.get(char);
      if (!frequency) {
        return false; // Character not found in test string
      }
      charFrequency.set(char, frequency - 1);
    }
  
    return true; // All characters and frequencies match
  };
  
//   This implementation uses a Map to count the frequency of characters in the test string, and then it checks if the characters and their frequencies match in the original string. This approach has a space complexity of O(n), where n is the length of the input strings, which is more efficient than creating temporary arrays for sorting.

//   Keep in mind that while this implementation improves space complexity, it might not be faster than the sorting approach in cases where the input strings are relatively short. The sorting approach with split, sort, and join can be quite efficient for small strings. The character frequency counting approach shines when dealing with much larger strings.
