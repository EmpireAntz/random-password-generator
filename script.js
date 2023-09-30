// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var uppercaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialArr = ["!","@","#","$","^","&","*","(",")","?"];

function generatePassword() {
  var userInput = prompt("Choose how Many Characters do you want your pasword to be");

  if (userInput < 8) {
    alert("Password too short! Must be at least 8 characters!");
    return generatePassword();
  }

  else if (userInput > 128) {
    alert("Password is too long! Must be 128 characters or less!");
    return generatePassword();
  }

  else if (isNaN(userInput)) {
    alert(userInput + " is not a number!");
    return generatePassword();
  }

  else {
    alert("Your password will be " + userInput + " characters long");
    var userNumConf = confirm("Would you like to add numbers?");
    var userUpperConf = confirm("Would you like to add uppercase letters?");
    var userLowerConf = confirm("Would you like to add lowercase letters?");
    var userSpecialConf = confirm("Would you like to add special characters?");
    console.log(userNumConf, userUpperConf, userLowerConf, userSpecialConf);
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/*  1. Prompt user to enter password critera
    2. Password length i < 8 or i > 128
    3. If Password doesnt match critera bring back to first prompt input
    4. Uppercase, lowercase, numbers and special characters
    5. Input type should be validated
    6. Password is generated based on the criteria of the prompts
    7. Display password in alert or on the page
*/