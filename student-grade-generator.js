// // Write a function that prompts the user to input student marks. The input should be between 0 and 100. 
// The output should correspond the correct grade, as shown below: 
// A: >79
// B: 60 to 79
// C: 50 to 59
// D: 40 to 49
// E: 0 to 39
const prompt = require('prompt-sync')(); // Creates  prompt for user input in commandline environment

function gradeGenerator() { // creates the function

    while (true) {

        let input = prompt("Please enter the student's mark in order to generate Grade :");  // Asks the User to input marks

        let mark = parseFloat(input); // Converts the Input into a floating-point Number

        if (mark < 0 || mark > 100 || isNaN(mark)) { // Checks if tthe input is a number between 0 and 100
            console.log("You are only supposed to enter marks that lies between 0 and 100");
        }  else {

            let grade; // declares the grade

            switch(true) {
                case (mark > 79):
                    grade = " A ";
                    break;
                case (mark >= 60):
                    grade = " B ";
                    break;
                case (mark >= 50):
                    grade = " C ";
                    break;
                case (mark >= 40):
                    grade = " D ";
                    break;
                default:
                    grade = " E ";
                    break;
            }

            console.log(`Based on the marks ${mark}, the grade is: ${grade}`); // Feedback of the grade
            return;
        }
    } 
} 

gradeGenerator(); // Calls / Invokes the function