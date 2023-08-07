// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

const validatePIN = (pin) => {
  const regExFour = /^[0-9]{4}$/
  const regExSix = /^[0-9]{6}$/
  if( regExFour.test(pin) || regExSix.test(pin)) {
    return true
  } else return false
}

console.log(validatePIN(1234))

// REFACTORED

const validatePINRefactored = (pin) => {
  return /^(\d{4}|\d{6})$/.test(pin)
}