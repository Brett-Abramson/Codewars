// Complete the solution so that it returns the number of times the search_text is found within the full_text.

// Usage example:

// solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
// solution('aaabbbcccc', 'bbb') # should return 1
// Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

const solution = (fullText, searchText) => {
  const regex = new RegExp(searchText, "g");
  const matches = fullText.match(regex);

  return matches ? matches.length : 0;
};

console.log(solution("aa_bb_cc_dd_bb_e", "bb"));
