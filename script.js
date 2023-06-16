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
collection of those for further manipulation.*/



//2. CALCULATION VARIABLES
//Declaring and initializing the calculation variables. Storing calculation input.

//3. UPDATE DISPLAY FUNCTION
//Creating display function to display the result of calculation.

//4. BUTTON CLICK HANDLERS
//Creating number and operations click handlers.

//5. EVENT LISTENERS
//Attaching event listeners to numbers, operations buttons, equals and reset. 