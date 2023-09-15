// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

const input = "This is a test!";

const encrypt = (text, n) => {
  if (text === null || n < 1) return text;

  const runEncrypt = (string) => {
    let odd = "";
    let even = "";
    for (let i = 0; i < string.length; i++) {
      i % 2 !== 0 ? (odd += string.charAt(i)) : (even += string.charAt(i));
    }
    const encrypted = odd.concat(even);
    return encrypted;
  };

  while (n > 0) {
    text = runEncrypt(text);
    n--;
  }

  return text;
};

const encryptedText = encrypt(input, 1);
console.log(encryptedText);

const decrypt = (encryptedText, n) => {
  if (encryptedText === null || n < 1) return encryptedText;
  const length = encryptedText.length;

  const runDecrypt = (string) => {
    let decryptedString = "";
    let odd = 0;
    let even = Math.floor(length / 2);
    while (odd < length / 2) {
      decryptedString += string.charAt(even++) + string.charAt(odd++);
    }
    return decryptedString;
  };

  while (n > 0) {
    encryptedText = runDecrypt(encryptedText);
    n--;
  }

  return encryptedText.slice(0, length);
};

console.log(decrypt(encryptedText, 1));
