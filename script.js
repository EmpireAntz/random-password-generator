// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = prompt("Choose how Many Characters you want your pasword to be");

  if (userInput < 8) {
    alert("Password too short! Must be at least 8 characters!");
    return generatePassword();
  }

  else if (userInput > 128) {
    alert("Password is too long! Must be l28 characters or less!");
    return generatePassword();
  }

  else {
     alert("Your password is " + userInput + " characters long");
  }
  return "Something"
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
    3.  If Password doesnt match critera bring back to first prompt input
    4. Uppercase, lowercase, numbers and special characters
    5. Input type should be validated
    6. Password is generated based on the criteria of the prompts
    7. Display password in alert or on the page
*/