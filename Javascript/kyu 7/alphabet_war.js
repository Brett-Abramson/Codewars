// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// const leftSidePowers = (letter) => {
//   if (letter === "w") return 4;
//   if (letter === "p") return 3;
//   if (letter === "b") return 2;
//   if (letter === "s") return 1;
// };

// const rightSidePowers = (letter) => {
//   if (letter === "m") return 4;
//   if (letter === "q") return 3;
//   if (letter === "d") return 2;
//   if (letter === "z") return 1;
// };

const leftSidePowers = (letter) => {
  switch (letter) {
    case "w":
      return 4;
    case "p":
      return 3;
    case "b":
      return 2;
    case "s":
      return 1;
    default:
      return 0;
  }
};

const rightSidePowers = (letter) => {
  switch (letter) {
    case "m":
      return 4;
    case "q":
      return 3;
    case "d":
      return 2;
    case "z":
      return 1;
    default:
      return 0;
  }
};

const alphabetWar = (fight) => {
  let leftSide = 0;
  let rightSide = 0;

  for (const letter of fight) {
    leftSide += leftSidePowers(letter);
    rightSide += rightSidePowers(letter);
  }

  if (leftSide > rightSide) {
    return "Left side wins!";
  } else if (rightSide > leftSide) {
    return "Right side wins!";
  } else return "Let's fight again!";
};

console.log(alphabetWar("z"));
