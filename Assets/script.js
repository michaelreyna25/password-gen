const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numeric = ["1","2","3","4","5","6","7","8","9"];
const specialCharacters = ["!","@","#","$","%","&","?"];
// Character Arrays



// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var passwordOP = []

 const promptLength = window.prompt("Choose between 8 and 128 characters.")
  if (promptLength < 8 || promptLength > 128){
      alert("Not a valid password length.");
      return "Error: Invalid password"
    } 
  if (confirm("would you like lowercase letters?")){
    passwordOP.push(lowerCase);
  }
  if (confirm("Would you like Uppercase letters?")){
    passwordOP.push(upperCase);
  }
  if (confirm("Would you like numbers?")){
    passwordOP.push(numeric);
  }
  if (confirm("Would you like Special Characters?")){
    passwordOP.push(specialCharacters)
  }
  let password = "";
  const sutiableCharaters = passwordOP.join("").split("");
  for (let i = 0; i < promptLength; i++){
    password += sutiableCharaters[Math.floor(Math.random() * sutiableCharaters.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

