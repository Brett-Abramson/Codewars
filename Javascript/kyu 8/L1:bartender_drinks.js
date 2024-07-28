// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

const getDrinkByProfession = (param) => {
  // const formattedParam = param.toLowerCase().replaceAll(" ", "_");
  const formattedParam = param.toLowerCase().replace(/ /g, "_");

  const professions = {
    jabroni: "Patron Tequila",
    school_counselor: "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    bike_gang_member: "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
  };

  return professions[formattedParam] !== undefined
    ? professions[formattedParam]
    : "Beer";
};

console.log(getDrinkByProfession("Bike gang member"));
console.log(getDrinkByProfession("Me"));
