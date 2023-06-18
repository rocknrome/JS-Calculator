//javascript file

//1. ELEMENT REFERENCES 
//Choosing the elements of HTML code that will be used for interaction in JS code. 

const numberButtons = document.querySelectorAll(".number-button"); //referencing number buttons
const operationButtons = document.querySelectorAll(".operation-button"); //referencing operation button
const equalButton = document.getElementById("="); //referencing equals button
const resetButton = document.getElementById("reset"); //referencing Reset button
const decimalButton = document.getElementById("."); //referencing decimal button
const display = document.getElementById("calc-display"); //referencing display 


/*Description: here I use querySelectorAll to call all of the number buttons and operations buttons. 
the querySelectorAll is used because I can select all of those elements at once when I need to 
manipulate those elements altogether. 
Another advantage is a scalability while applying event listeners. 
I also reference the Equals Button and decimal button by its IDs attribute value which 
are "=" and ".". 
In this case the number buttons is an array-like collection/object. I can then use methodology 
used when working with arrays/objects to manipulate those. 
the idea is to simplify the code, make it DRY without having repetetive lines of code.
I use the same concept for the operations buttons. I use querySelectorAll to obtain an array-like 
collection of those for further manipulation.
The variable 'calculation' is used to storemy current calculation.
The variable updateDisplay is a function to update display. 
When no result or number clicked, it returns '0'.*/
/*=====================================*/


//2. CALCULATION VARIABLES
let calculation = ''; //variable to store current calculation
const updateDisplay = () => {
    display.textContent = calculation || '0';
};
//console.log(typeof updateDisplay()); //this is just a check-point
/*Declaring and initializing the calculation variables. Storing calculation input.
/*=====================================*/


//3. UPDATE DISPLAY FUNCTION
//Creating display function to display the result of calculation.
const handleNumberButtonClick = (number) => {
    calculation += number;
    updateDisplay();
    };  //event handler for number button click

const handleOperationButtonClick = (operation) => {
    calculation += operation;
    updateDisplay();
}; //event handler for operation button click

//console.log(typeof calculation); check-point
/*=====================================*/


//4. BUTTON CLICK HANDLERS
//Creating number and operations click handlers.
const handleEqualsButtonClick = () => {
    const result = eval(calculation);
    calculation = String(result);
    updateDisplay();
}; /* Here I take 'number' and 'operation' and update the 'calculation' variable.
    It is a string. 
    Now I evaluate the 'calculation' .
    Then I update 'result' as a string with the 'result'.*/
    //console.log(typeof calculation); check-point

const handleResetButtonClick =() => {
    calculation = '0';
    updateDisplay();
}; //Here I update the display with'0' once the Reset button clicked.//

const handleDecimalButtonClick = () => {
    if (!calculation.includes('.')) {
        calculation += '.';
        updateDisplay();
    }
}; //decimal button click
/*=====================================*/


//5. EVENT LISTENERS
//Attaching event listeners to numbers, operations buttons, equals and reset. 