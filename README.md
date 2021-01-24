# High-Security-Password-Generator

Secure password generator based on user inputs.

Title: High-Security-Password-Generator

Technologies: .HTML, .CSS, .JS

Introduction: The goal of this refactor was to write JavaScript code in a linked .js file to make a random password generator application. The password would have four parameters that it must meet in order to be displayed on the page. The password must be randomly generated, as it will be used to access sensitive data.

Scope of Functionality: The user is prompted on four password parameters: password length; if lowercase letters are to be used; if upppercase letters are to be used; and if special characters are to be used. A button is then pushed to generate the password.

Scope of JavaScript Refactor: With sensitive data being protected, I wanted to write code that could achieve multiple random pulls from arrays. These arrays would be defined by the user inputs. Conditional if statemets cycled through possible combinations of user inputs. The use of for loops filled in these arrays. Arrays were built by randomly pulling from declared constant arrays. Concat, splice, and joint methods were used to modify the arrays. As there is a button that requires a click for the passowrd to be generated, an event listener was added to wait for the button click. A query selector and ID are used to display the password on the page after the button is clicked.

Problems Faced: One early problem was establishing the constant arrays while creating the random arrays by randomly pulling from the constant arrays. Once the random arrays were built, order of operations became a problem. Addiontal AND (&&) statements were used to clariy conditionals further, and if statments were rearranged.

Potential Future Plans: Use of functions to cut down on code.

JavaScript (script.js) Table of Contents

Variables
Write password
Function Expression User Prompts
Const Array Declarations
Generate Password Function {
Conditional statements for all possible combinations.
}

LIVE PAGE: https://davidsjg.github.io/High-Security-Password-Generator-JGD/
