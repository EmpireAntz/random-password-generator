//Selects the button with the id of generate
var generateBtn = document.querySelector("#generate");
//Arrays for the various character types to be used in the password 
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var uppercaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialArr = ["!","@","#","$","^","&","*","(",")","?"];
//The function that generates the password based on user choice 
function generatePassword() {
  var password = [];
  var allCharactersArr = [];
  var userInput = prompt("Choose how many characters you want your password to be");
//Alerts the user if their input is less than 8 and returns them to the start of the generatePassword function
  if (userInput < 8) {
    alert("Password is too short! Must be at least 8 characters!");
    return generatePassword();
  }
//Alerts the user if their input is greater than 128 and returns them to the start of the generatePassword function
  if (userInput > 128) {
    alert("Password is too long! Must be 128 characters or less!");
    return generatePassword();
  }
//Alerts the user if their input is not a number and returns them to the start of the generatePassword function
  if (isNaN(userInput)) {
    alert('"' + userInput + '"' + " is not a number!");
    return generatePassword();
  }
//If the user passes all the above criteria checks they will get an alert that tells them how long their password will be
  alert("Your password will be " + userInput + " characters long.");
//Confirms with the user wether or not they would like to add numbers 
  var userNumConf = confirm("Would you like to add numbers?");
//Confirms with the user wether or not they would like to add uppercase
  var userUpperConf = confirm("Would you like to add uppercase letters?");
//Confirms with the user wether or not they would like to add lowercase
  var userLowerConf = confirm("Would you like to add lowercase letters?");
//Confirms with the user wether or not they would like to add characters
  var userSpecialConf = confirm("Would you like to add special characters?");
//If the user confirms that they want numbers then numbers will be concatenated to the allCharactersArr array 
  if (userNumConf === true) {
    allCharactersArr = allCharactersArr.concat(numberArr);
  }
//If the user confirms that they want uppercase then uppercase will be concatenated to the allCharactersArr array 
  if (userUpperConf === true) {
    allCharactersArr = allCharactersArr.concat(uppercaseArr);
  }
//If the user confirms that they want lowercase then lowercase will be concatenated to the allCharactersArr array 
  if (userLowerConf === true) {
    allCharactersArr = allCharactersArr.concat(lowercaseArr);
  }
//If the user confirms that they want special characters then special characters will be concatenated to the allCharactersArr array 
  if (userSpecialConf === true) {
    allCharactersArr = allCharactersArr.concat(specialArr);
  }
//If the user cancels all confirmations, an alert will pop up that tells them to choose at least one character type and returns to the start of the generatePassword function
  if (allCharactersArr == 0) {
    alert("Password must include at least one character type!");
    return generatePassword();
  }
//Prints in the console the concatenated array
  console.log(allCharactersArr);
//Loops for the number of characters that the user chose, chooses a random index from the allCharactersArr array and pushes it to the password array 
  for (var i = 0; i < userInput; i++) {
    var randomArrIndex = Math.floor(Math.random() * allCharactersArr.length);
    password.push(allCharactersArr[randomArrIndex]);
  }
//Prints in the console the password array 
  console.log(password);
// Returns the generated password array as a string 
  return password.join("");
}
//Function that displays the password thats generated on the page
function writePassword() {
//Calls the generatePassword function and stores it in a variable named password 
  var password = generatePassword();
//Selects the area of the webpage with the id of password 
  var passwordText = document.querySelector("#password");
//Displays the generated password
  passwordText.value = password;
}
//adds an click event listener to the generateBtn button and calls the write password function when clicked 
generateBtn.addEventListener("click", writePassword);
