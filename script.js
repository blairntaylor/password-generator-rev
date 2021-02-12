//global variables
var specCharacters = ["!", "@", "#", "$", "%", "&", "*"];
var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var downCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}

// Add event listener so on click start writePassword function
generateBtn.addEventListener("click", writePassword);

//length of password is empty
var passLength = " ";

var passwordText = " "; // pass variables into into a string

// if choiceChars equals true push specChars into passwordText
// don't know if I concat, push, append, prepend into

// passLength = password(passLength, passwordText);

var choiceCharacters = [];

//Ask user for length of password
function generatePassword() {
  passLength = parseInt(window.prompt("Enter a number between 8-128"));
  if (passLength < 8 || passLength > 128) {
    prompt("Must enter a number between 8-128");
  }
  var choiceSpecial = window.confirm("Do you want spec char?");
  console.log(choiceSpecial);

  var choiceUpper = window.confirm("Do you want upper case?");
  console.log(choiceUpper);

  var choiceLower = window.confirm("Do you want lower case?");
  console.log(choiceLower);

  var choiceNums = window.confirm("Do you want numbers?");
  console.log(choiceNums);

  //if choicePSecial user answer is true then add choice to choiceCharaters array
  if (choiceSpecial) {
    choiceCharacters = choiceCharacters.concat(specCharacters);
    console.log(choiceCharacters);
  }

  if (choiceUpper) {
    choiceCharacters = choiceCharacters.concat(upperCases);
    console.log(choiceCharacters);
  }

  if (choiceLower) {
    choiceCharacters = choiceCharacters.concat(downCases);
    console.log(choiceCharacters);
  }

  if (choiceNums) {
    choiceCharacters = choiceCharacters.concat(numbers);
    console.log(choiceCharacters);
  }

  // //if user selects no characters
  else {
    prompt("You must make a selection.");
  }

  for (i = 0; i < passLength; i++) {
    // console.log(i);
    //random slection from the entire user choice array
    var randomAnswer =
      choiceCharacters[Math.floor(Math.random() * choiceCharacters.length)];
    // console.log(randomAnswer);

    passwordText = randomAnswer.concat(passwordText);

    // math random here to pull from array of choiceCharacters array
    //after you pick the characte you concat the var passwordText string
  }
  console.log(passwordText);

  return passwordText;
}
