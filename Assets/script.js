let lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
let upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let numeric = ["123456789"];
let specialCharacters = ["!@#$%^&*()_+-=[]{}\\|/?.>,<:;'\"`~"];
// Character Arrays

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  var passwordOP = [];

  const promptLength = parseInt(prompt("Choose between 8 and 128 characters."));
  if (promptLength < 8 || promptLength > 128) {
    alert("Not a valid password length.");
    return "Error: Invalid password"
  }
  if (confirm("would you like lowercase letters?")) {
    passwordOP.push(lowerCase);
  }
  if (confirm("Would you like Uppercase letters?")) {
    passwordOP.push(upperCase);
  }
  if (confirm("Would you like numbers?")) {
    passwordOP.push(numeric);
  }
  if (confirm("Would you like Special Characters?")) {
    passwordOP.push(specialCharacters)
  }
  if (passwordOP.length === 0) {
    alert("Please enter a prameter.");
    return "Error: Please enter a parameter.";
  }
  let password = "";
  const sutiableCharaters = passwordOP.join("").split("");
  for (let i = 0; i < promptLength; i++) {
    password += sutiableCharaters[Math.floor(Math.random() * sutiableCharaters.length)];
  }
  return password;
}


