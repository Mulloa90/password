// Assignment code here
var characterLength = 8;
var chooseArray = [];

var characterArray = ['=','-',')','(','*','&','^','%','$','#','@','!','+','_','/','?','<','>'];
var lowerCaseArray =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArray = ['0','1','2','3','4','5','6','7','8','9'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// used parseInt to return character 
function getPrompts() {
  chooseArray = [];

  characterLength = parseInt(prompt("Choose password character length (8-128 charaters)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
  alert("Type selection using numeric keys only between 8-128");
  return false;
  }

  if (confirm("Would you like to include lower case letters in your password")) {
  chooseArray = chooseArray.concat(lowerCaseArray);
  }

  if (confirm("Would you like to include Upper case letters in your password")) {
  chooseArray = chooseArray.concat(upperCaseArray);
  }

  if (confirm("Would you like to include Numbers in your password")) {
  chooseArray = chooseArray.concat(numberArray);
  }
  return true;
}

// Write password to the #password input
function writePassword() {
  var passPrompts = getPrompts(); //boolean
  
  if (passPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = newPassword;
  }
}
// I get password based on prompt answers cited from example in w3schools
function generatePassword(){
  var password = "";
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Type selection using numeric keys only between 8-128");
    return
  }
  for(var i = 1; i < characterLength; i++) {
    var numbered = (Math.numbered() * chooseArray.length);
    password = password + chooseArray[numbered];
  }
   return password;
 
 

}