// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

const calculateYears = (principal, interest, tax, desired) => {
  if (principal === desired) return 0;

  const decimalPlaces = 100;
  const factor = 10 ** decimalPlaces;

  let P = Math.round(principal * factor);
  let D = Math.round(desired * factor);
  let years = 0;

  while (P < desired * factor) {
    const interestAmount = Math.round(P * interest);
    const taxes = Math.round(interestAmount * tax);

    P += interestAmount - taxes;
    years++;
    console.log(`after ${years} year. Principal = ${P}`);
  }

  return years;
};

const P = 1000;
const I = 0.05;
const T = 0.18;
const D = 1100;

console.log(calculateYears(P, I, T, D));
