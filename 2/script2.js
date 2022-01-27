// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
*/

var marksWeight = 78; //kg
var marksHeight = 1.69; //meters

var johnWeight = 92 
var johnHeight = 1.76; 

var marksBMI = marksWeight / (marksHeight * marksHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);

var markHigherBMI = marksBMI > johnBMI;

//console.log("Is Marks BMI higher then Johns BMI? " + markHigherBMI);

if (markHigherBMI == true) {
    console.log("Marks BMI " + "(" + marksBMI + ") " + "is higher than Johns" + "(" + johnBMI + ")!" );
} else {
    console.log("Johns BMI " + "(" + johnBMI + ") " + "is higher than Marks" + "(" + marksBMI + ")!" );
}