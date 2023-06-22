function passwordValidator(password) {
  let isValidPassword = true;
  let isInvalidLength = password.length < 6 || password.length > 10;

  if (isInvalidLength) {
    isValidPassword = false;
    console.log("Password must be between 6 and 10 characters");
  }
  let isOnlyLettersAndDigits = true;
  let digitsCounter = 0;

  for (let index = 0; index < password.length; index++) {
    let currentCode = password.charCodeAt(index);
    let isNotNumber = currentCode < 48 || currentCode > 57;
    let isNumber = currentCode >= 48 && currentCode <= 57;
    let isNotSmallLetter = currentCode < 97 || currentCode > 122;
    let isNotBigLetter = currentCode < 65 || currentCode > 90;

    if (isNumber) {
      digitsCounter++;
    }
    if (isNotNumber && isNotSmallLetter && isNotBigLetter) {
      isValidPassword = false;
      isOnlyLettersAndDigits = false;
    }
  }

  if (!isOnlyLettersAndDigits) {
    console.log("Password must consist only of letters and digits");
  }
  if (!(digitsCounter >= 2)) {
    isValidPassword = false;
    console.log("Password must have at least 2 digits");
  }
  if (isValidPassword) {
    console.log("Password is valid");
  }
}

passwordValidator("logIn");
console.log(`----------`);
passwordValidator("MyPass123");
console.log(`----------`);
passwordValidator("Pa$s$s");
