const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numeric = ["1","2","3","4","5","6","7","8","9"];
const specialCharacters = ["!","@","#","$","%","&","?"];
// Character Arrays



// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  promptLength = prompt("Choose between 8 and 128 characters.")
  if (7 < promptLength && promptLength < 129){
    for (characterChoice = false; characterChoice== true;){
    choseLC = confirm ("Would you like to have lower case letters?")
    choseUC = confirm ()
    choseNum = confirm ()
    choseSP = confirm ()
    if (!choseLC && chose){

    } else {
        characterChoice = true
    }}
  } else {
    alert("Not a valid password length.")
  }
  var passwordOP = []
  if (choseLC){
    passwordOP = passwordOP.concat(lowerCase)
  }
  if ()
  if ()
  if ()
  const boomTrap = []
  for (randomCat = 0; randomCat == promptLength; randomCat++){
    var randomNum = Math.floor(Math.random() * passwordOP.length)
    boomTrap.push(passwordOP[randomNum])
  }
  return boomTrap
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

