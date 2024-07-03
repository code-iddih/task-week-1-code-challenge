// // Write a program that takes the speed of a car as input e.g 80. 
// // If the speed is less than 70, it should print “Ok”. 
// // Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// // For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

const prompt = require('prompt-sync')(); // Creates  prompt for user input in commandline environment

function speedDetector() { // Creates the function

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    let input = prompt("Please enter the speed of the Car in Km/h :"); // Takes the User Input

    // Converts the Input into a floating-point Number
    let speed = parseFloat(input); 

    if (isNaN(speed)) {  // Checks if the Input is Not a Number

        console.log("Please enter Speed in form of a number in Km/h : ");
        return;
    }

    if (speed < 0) { //Checks if the Speed is negative
        console.log("Speed cannot be negative. Please enter a valid speed");
        return;
    }

    if ( speed < speedLimit ) {  // Checks if Speed is Less Than 70

        console.log( "Ok ");
        return;

    }


    demeritPoints = (speed - speedLimit) / kmPerDemeritPoint; //Formulae to Calculate the Demerit Points

    Math.floor(demeritPoints); // Converts into the Largest Integer Less Than Demerit Points Calculated

    if ( demeritPoints > 12 ) {  // Higher side

        console.log( "License Suspended" );

    } else {

        console.log(`Points: ${demeritPoints}`);  // Outputs the Demerit Points
    }

}

speedDetector();  // Calls / Invokes the Function

