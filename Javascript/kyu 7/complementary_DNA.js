// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

const DNAStrand = (dna) => {
  const array = dna.split("");
  let complementarySide = [];
  for (let i = 0; i < array.length; i++) {
    if ((array[i] === "A")) {
      complementarySide[i] = "T";
    } else if ((array[i] === "T")) {
      complementarySide[i] = "A";
    } else if ((array[i] === "C")) {
      complementarySide[i] = "G";
    } else if ((array[i] === "G")) {
      complementarySide[i] = "C";
    }
  }
  return complementarySide.join("");
};

console.log(DNAStrand("ATTGC"));

// REFACTOR

const dnaStrand = (dna) => {
    const nucleotideComplements = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C",
    }

    const array = dna.split("");
    const complementarySide = array.map(nucleotide => nucleotideComplements[nucleotide])

    return complementarySide.join("")
}

