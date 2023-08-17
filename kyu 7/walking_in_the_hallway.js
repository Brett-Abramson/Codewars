// You are a security guard at a large company, your job is to look over the cameras. Finding yourself bored you decide to make a game from the people walking in a hallway on one of the cameras. As many people walk past the hallway you decide to figure out the minimum steps it will take before 2 people cross or come into contact with each other (assuming every person takes a step at the same time).

// People are represented as arrows, < for a person moving left and > for a person moving right and - for an empty space

// in this example the first people to come in contact with each other do it after 1 step
// ---><----
// in this example the first people to come in contact with each other do it after 1 step
// --->-<------->----<-
// in the case that no people come in contact return -1
// ----<----->----

const hallway = "---->---<";

const contact = (hallway) => {
  const array = hallway
  let personFacingRight = -1;
  let personFacingLeft = -1;
  let minDistance = Infinity;

  for (let i = 0; i < array.length; i++) {
    
    if (array[i] === ">") {
      personFacingRight = i;
      if (personFacingLeft !== -1) {
        minDistance = Math.min(minDistance, personFacingRight - personFacingLeft)
      }
    } else if (array[i] === "<") {
      personFacingLeft = i;
      if (personFacingRight !== -1) {
        minDistance = Math.min(minDistance, personFacingLeft - personFacingRight)
      }
    }
  }

  if (minDistance === Infinity) {
    return -1
  } else return Math.ceil(minDistance / 2)
};

console.log(contact(hallway));
