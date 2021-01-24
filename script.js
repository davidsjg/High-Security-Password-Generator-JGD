// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword;
var PWL;
var Lower;
var Upper;
var NumberB;
console.log(generateBtn);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//prompt user for password length
var PasswordLength = function () {
  PWL = window.prompt("Enter password length (must be between 8-128): ");
    if ((PWL < 8) || (PWL > 128)) {
      if (!window.alert("Password must be between 8-128 characters."))
      LowerBoolean()
    } 
}

//ask user if lowercase letters will be used
var LowerBoolean = function () {
  Lower = window.prompt("Would you like to use lowercase letters?");
}

//ask user if uppercase letters will be used
var UpperBoolean = function () {
  Upper = window.prompt("Would you like to use uppercase letters?");
}

//ask user if numbers letters will be used
var NumberBoolean = function () {
  NumberB = window.prompt("Would you like to use numbers?");
}

var Special;
// ask user if special characters will be used
var SpecialCharacters = function () {
  Special = window.prompt("Would you like to use special characters?");
 
  console.log(Special)
}


PasswordLength();
LowerBoolean();
UpperBoolean();
NumberBoolean();
SpecialCharacters();

var lowerArray = [];
var UpperArray = [];
var NumbArray = [];
var SpecArray = [];

const lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const UpperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const NumbersArray = [0,1,2,3,4,5,6,7,8,9];
const SpecialArray = ["!","@","#","$","%","^","&","*"]

function generatePassword () {
if (Lower == "y" && Upper == "n" && NumberB == "n") {
  //creates a random array from lowercase lettesrs PWL long 
  for (var i = 0; i < PWL; i++){
    const randomLower = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
    lowerArray[i] = randomLower;
    }
    if (Special == "y") {
      lowerArray.splice(0, 1, "$")
    }
  return lowerArray.join('');
  }
if (Lower == "n" && Upper == "y" && NumberB == "n") {
  //creates a random array from lowercase lettesrs PWL long 
  for (var i = 0; i < PWL; i++){
    const randomUpper = UpperCaseArray[Math.floor(Math.random() * UpperCaseArray.length)];
    UpperArray[i] = randomUpper;
    }
    if (Special == "y") {
      UpperArray.splice(0, 1, "$")
    }
  return UpperArray.join('');
  }
if (Lower == "n" && Upper == "n" && NumberB == "y") {
  //creates a random array from lowercase lettesrs PWL long 
  for (var i = 0; i < PWL; i++){
    const randomNumber = NumbersArray[Math.floor(Math.random() * NumbersArray.length)];
    NumbArray[i] = randomNumber;
    }
    if (Special == "y") {
      NumbArray.splice(0, 1, "$")
    }
  return NumbArray.join('');
  }


if (Upper == "y" && Lower == "y" && NumberB == "n"){
  //generates variable half password length
  var TwoSelect = Math.floor(PWL*0.5)
  //creates a random array from lowercase lettesrs PWL long 
  for (var i = 0; i < PWL; i++){
    const randomLower = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
    lowerArray[i] = randomLower;
    }
   //removes half of lowerArray
   var removed = lowerArray.splice(0,TwoSelect)
  
  //creates upper array TwoSelect long (half of password)
  for (var i = 0; i < (TwoSelect); i++){
  const randomUpper = UpperCaseArray[Math.floor(Math.random() * UpperCaseArray.length)];
  UpperArray[i] = randomUpper;
  }
  //concats lowerArray and uppperArray
  var ConcatArray1 = lowerArray.concat(UpperArray);
  if (Special == "y") {
    ConcatArray1.splice(0, 1, "$")
  }
  return ConcatArray1.join('')

} 

if (Lower == "n" && Upper == "y" && NumberB == "y"){
  //generates variable half password length
  var TwoSelect = Math.floor(PWL*0.5)
  //create upperArray
    for (var i = 0; i < PWL; i++){
    const randomUpper = UpperCaseArray[Math.floor(Math.random() * UpperCaseArray.length)];
    UpperArray[i] = randomUpper;
    }
  //removes half of UpperArray
  var removed = UpperArray.splice(0,TwoSelect)
  
  //creates number array TwoSelect long (half of password)
  for (var i = 0; i < (TwoSelect); i++){
   randomNumber = NumbersArray[Math.floor(Math.random() * NumbersArray.length)];
  NumbArray[i] = randomNumber;
  }
  //concats UpperArray and NumberArray
  var ConcatArray4 = UpperArray.concat(NumbArray);
  if (Special == "y") {
    ConcatArray4.splice(0, 1, "$")
  }
  return ConcatArray4.join('');

} 

else if (Lower == "y" && Upper == "n" && NumberB == "y"){
  //generates variable half password length
  var TwoSelect = Math.floor(PWL*0.5)
  //creates a random array from lowercase lettesrs PWL long 
  for (var i = 0; i < PWL; i++){
      const randomLower = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
      lowerArray[i] = randomLower;
      }
  //removes half of lowerArray
  var removed = lowerArray.splice(0,TwoSelect)
  
  //creates number array TwoSelect long (half of password)
  for (var i = 0; i < (TwoSelect); i++){
   randomNumber = NumbersArray[Math.floor(Math.random() * NumbersArray.length)];
  NumbArray[i] = randomNumber;
  }
  //concats lowerArray and NumberArray
  var ConcatArray3 = lowerArray.concat(NumbArray);

  if (Special == "y") {
    ConcatArray3.splice(0, 1, "$")
  }
  return ConcatArray3.join('');
} 

if (Upper == "y" && Lower == "y" && NumberB == "y"){
  //generates variable one-third password length
  var ThreeSelect = Math.floor(PWL*0.3333333333333333)
    //generates variable half password length
    var TwoSelect = Math.floor(PWL*0.5)
    //creates a random array from lowercase lettesrs PWL long 
    for (var i = 0; i < PWL; i++){
      const randomLower = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
      lowerArray[i] = randomLower;
      }
     //removes half of lowerArray
     var removed = lowerArray.splice(0,TwoSelect)
    
    //creates upper array TwoSelect long (half of password)
    for (var i = 0; i < (TwoSelect); i++){
    const randomUpper = UpperCaseArray[Math.floor(Math.random() * UpperCaseArray.length)];
    UpperArray[i] = randomUpper;
    }
    //concats lowerArray and uppperArray
    var ConcatArray1 = lowerArray.concat(UpperArray);
  //removes the last one-third of ConcatArray1(contain upper and lower arrays)
  var removed = ConcatArray1.splice(0,ThreeSelect)
  
  //creates number array ThreeSelect long (one-third of password length)
  for (var i = 0; i < (ThreeSelect); i++){
  const randomNumber = NumbersArray[Math.floor(Math.random() * NumbersArray.length)];
  NumbArray[i] = randomNumber;
  }
  //concats ConcatArray1 and NumbArray
  var ConcatArray2 = ConcatArray1.concat(NumbArray);
  if (Special == "y") {
    ConcatArray2.splice(0, 1, "$")
  }
  return ConcatArray2.join('');

}
}

