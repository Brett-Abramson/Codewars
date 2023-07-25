// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// don't worry about uppercase vowels
// y is not considered a vowel for this kata

const shortcut = (str) => {
    const vowels = /[aeiou]/g;
    const noVowels = str.replace(vowels,"")
    return noVowels
}

// Using .filter instead
function shortcutFilterMethod (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
  }

console.log(shortcut("hello"))

// Both implementations achieve the same result of removing lowercase vowels from the input string. The choice between using regular expressions and the .filter method depends on the specific needs of your project, familiarity with regular expressions, and the complexity of the matching pattern you require. If you only need to remove a fixed set of characters like vowels, the .filter method might be simpler and more readable. However, if you need to perform more complex text matching tasks, regular expressions are the more appropriate choice.