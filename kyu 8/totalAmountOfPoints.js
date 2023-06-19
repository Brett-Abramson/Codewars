// how to take a string out of an array and seperate it



const gameResults = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]



// function points(games) {
//   let teamPoints = 0;
//   for (let i = 0; i < games.length; i++) {
//     const game = games[i].split(":");
//     if (game[0] > game[1]){
//       teamPoints += 3;
//     } else if (game[0] === game[1]) {
//       teamPoints++;
//     } 
//   }
//   return teamPoints;
//   }
  

  const totalPoints = (games) => {
    const game = games.map(split(":"));
    return game;
  }
  

console.log(totalPoints(gameResults));
// console.log(points(gameResults));