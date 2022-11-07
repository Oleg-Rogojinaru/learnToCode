// This is an in-line comment.
/* This is a
multi-line comment */

// Use the var keyword to create a variable called myName.
var myName;

// Assign the value 7 to variable a
var a;
a = 7;

// Assign the contents of a to variable b.
var a;
a = 7;
var b;
b = a;

// Define a variable a with var and initialize it to a value of 9.
var a = 9;

/* Create two new string variables: myFirstName and myLastName and assign them the 
values of your first and last name, respectively. */
var myFirstName = "Oleg";
var myLastName = "Rogojinaru";

/* Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively 
so that they will not be undefined. */ 
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

/* Understanding Case Sensitivity in Variables.
Modify the existing declarations and assignments so their names use camelCase.
Do not create any new variables. */
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/* Explore Differences Between the var and let Keywords
So unlike var, when you use let, a variable with the same name can only be declared once.
Update the code so it only uses the let keyword. */
let catName = "Oliver";
let catSound = "Meow!";

/* Declare a Read-Only Variable with the const Keyword
Change the code so that all variables are declared using let or const */
const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 

// Add Two Numbers with JavaScript. Change the 0 so that sum will equal 20.
const sum = 10 + 10;

// Subtract One Number from Another with JavaScript. 
// Change the 0 so the difference is 12.
const difference = 45 - 33;

// Multiply Two Numbers with JavaScript
// Change the 0 so that product will equal 80.
const product = 8 * 10;

// Divide One Number by Another with JavaScript.
// Change the 0 so that the quotient is equal to 2.
const quotient = 66 / 33;

// Increment a Number with JavaScript
// Change the code to use the ++ operator on myVar
let myVar = 87;
myVar++;

// Decrement a Number with JavaScript
// Change the code to use the -- operator on myVar
let myVar = 11;
myVar--;

// Create Decimal Numbers with JavaScript
// Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
const myDecimal = 5.7;

// Multiply Two Decimals with JavaScript
// Change the 0.0 so that product will equal 5.0.
const product = 2.0 * 2.5;

// Divide One Decimal by Another with JavaScript
// Change the 0.0 so that quotient will equal to 2.2.
const quotient = 4.4 / 2.0;

// Finding a Remainder in JavaScript
//Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
const remainder = 11 % 3;

// Compound Assignment With Augmented Addition
// Convert the assignments for a, b, and c to use the += operator.
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// Compound Assignment With Augmented Subtraction
// Convert the assignments for a, b, and c to use the -= operator.
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

// Compound Assignment With Augmented Multiplication
// Convert the assignments for a, b, and c to use the *= operator.
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// Compound Assignment With Augmented Division
// Convert the assignments for a, b, and c to use the /= operator.
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

// Escaping Literal Quotes in Strings
/* Use backslashes to assign a string to the myStr variable so that if you were to print 
it to the console, you would see:
I am a "double quoted" string inside "double quotes". */
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// Quoting Strings with Single Quotes
/* Change the provided string to a string with single quotes at the beginning and end 
and no escape characters.
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>"; */
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings
/* Code	Output
    \'	single quote
    \"	double quote
    \\	backslash
    \n	newline
    \t	tab
    \r	carriage return
    \b	word boundary
    \f	form feed
*/
/* Assign the following three lines of text into the single variable myStr using escape 
sequences.
FirstLine
    \SecondLine
ThirdLine
*/
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatenating Strings with Plus Operator
/* Build myStr from the strings This is the start. and This is the end. using the + operator. 
   Be sure to include a space between the two strings. */
	const myStr = "This is the start." + " This is the end.";

// Concatenating Strings with the Plus Equals Operator
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Constructing Strings with Variables
const myName = "Oleg";
const myStr = " My name is " + myName + " and I am well!";

// Appending Variables to Strings
const someAdjective = "awesome!";
let myStr = "Learning to code is ";
myStr += someAdjective;

// Find the Length of a String
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

// Understand String Immutability
let myStr = "Jello World";
myStr = "Hello World";

// Use Bracket Notation to Find the Nth Character in a String
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];

// Use Bracket Notation to Find the Last Character in a String
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];

// Use Bracket Notation to Find the Nth-to-Last Character in a String
// Use bracket notation to find the second-to-last character in the lastName string.
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Word Blanks
// You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb.
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myAdjective + " nice " + myNoun + " can " + myVerb + " so " + myAdverb + "."; 

// Store Multiple Values in one Variable using JavaScript Arrays
// Modify the new array myArray so that it contains both a string and a number (in that order).
const myArray = ["stage" , 1];

//Nest one Array within Another Array
// This is also called a multi-dimensional array.
const myArray = [["Bulls", 23], ["White Sox", 45]];

// Access Array Data with Indexes
// Create a variable called myData and set it to equal the first value of myArray using bracket notation.
const myArray = [50, 60, 70];
const myData = myArray[0]

// Modify Array Data With Indexes
// Modify the data stored at index 0 of myArray to a value of 45.
const myArray = [18, 64, 99];
myArray[0] = 45;

// Access Multi-Dimensional Arrays With Indexes
// Using bracket notation select an element from myArray such that myData is equal to 8.
const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
 ];
 
const myData = myArray[2][1];

// Manipulate Arrays With push()
// Push ["dog", 3] onto the end of the myArray variable.
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// Manipulate Arrays With pop()
// Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

// Manipulate Arrays With shift()
// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

// Manipulate Arrays With unshift()
// Add ["Paul", 35] to the beginning of the myArray variable using unshift().
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// Shopping List
// Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
// There should be at least 5 sub-arrays in the list.
const myList = [
	["Water bottle", 6],
	["Avocado", 2],
	["Banana", 5],
	["Cheese", 1],
	["bread", 3]
 ];
 
// Write Reusable JavaScript with Functions
// 1. Create a function called reusableFunction which prints the string Hi World to the dev console.
// 2. Call the function.
function reusableFunction() {
	console.log("Hi World");
 }
 
reusableFunction();

// Passing Values to Functions with Arguments
// 1. Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
// 2. Call the function with two numbers as arguments.
function functionWithArgs(param1, param2) {
	console.log(param1 + param2); 
 }
 
 functionWithArgs(4,5);

// Return a Value from a Function with Return
// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
function timesFive(num) {
	return num * 5;
 }

// Global Scope and Functions
// Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
// Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}
	// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


// Local Scope and Functions
// Declare a local variable myVar inside myLocalScope and run the tests.
// Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.
function myLocalScope() {
	// Only change code below this line
	let myVar;
	console.log('inside myLocalScope', myVar);
 }
 myLocalScope();
 
 // Run and check the console
 // myVar is not defined outside of myLocalScope
 console.log('outside myLocalScope', myVar);


// Global vs. Local Scope in Functions
// Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();


// Understanding Undefined Value returned from a Function
// Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}
// Only change code above this line

addThree();
addFive();


// Assignment with a Returned Value
// Call the processArg function with an argument of 7 and assign its return value to the variable processed.
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
processed = processArg(7);


// Stand in Line
// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
// Add the number to the end of the array, then remove the first element of the array.
// The nextInLine function should then return the element that was removed.
function nextInLine(arr, item) {
	// Only change code below this line
	arr.push(item);
	const removed = arr.shift();
	return removed;
	// Only change code above this line
 }
  // Setup
 let testArr = [1, 2, 3, 4, 5];
 
  // Display code
 console.log("Before: " + JSON.stringify(testArr));
 console.log(nextInLine(testArr, 6));
 console.log("After: " + JSON.stringify(testArr));


// Understanding Boolean Values
// Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.
function welcomeToBooleans() {
	// Only change code below this line
	return true; // Change this line
 	// Only change code above this line
 }


// Use Conditional Logic with If Statements
// Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.
function trueOrFalse(wasThatTrue) {
	// Only change code below this line
	if (wasThatTrue) {
	  return "Yes, that was true";
	}
 	return "No, that was false";
	// Only change code above this line
 }


 // Comparison with the Equality Operator
 // Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
 // Setup
function testEqual(val) {
	if (val == "12") { // Change this line
	  return "Equal";
	}
	return "Not Equal";
 }
 
 testEqual(10);


// Comparison with the Strict Equality Operator
// Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
// Setup
function testStrict(val) {
	if (val === 7) { // Change this line
	  return "Equal";
	}
	return "Not Equal";
 }
 
 testStrict(10);


// Practice comparing different values
// The compareEquality function in the editor compares two values using the equality operator. 
// Modify the function so that it returns the string Equal only when the values are strictly equal.
// Setup
function compareEquality(a, b) {
	if (a === b) { // Change this line
	  return "Equal";
	}
	return "Not Equal";
 }
 
 compareEquality(10, "10");


// Comparison with the Inequality Operator
// Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
// Setup
function testNotEqual(val) {
	if (val != 99) { // Change this line
	  return "Not Equal";
	}
	return "Equal";
 }
 
 testNotEqual(10);


// Comparison with the Strict Inequality Operator
// Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
// Setup
function testStrictNotEqual(val) {
	if (val !== 17) { // Change this line
	  return "Not Equal";
	}
	return "Equal";
 }
 
 testStrictNotEqual(10);


// Comparison with the Greater Than Operator
// Add the greater than operator to the indicated lines so that the return statements make sense.
function testGreaterThan(val) {
	if (val > 100) {  // Change this line
	  return "Over 100";
	}
 
	if (val > 10) {  // Change this line
	  return "Over 10";
	}
 
	return "10 or Under";
 }
 
 testGreaterThan(10);


// Comparison with the Greater Than Or Equal To Operator
// Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
function testGreaterOrEqual(val) {
	if (val >= 20) {  // Change this line
	  return "20 or Over";
	}
 
	if (val >= 10) {  // Change this line
	  return "10 or Over";
	}
 
	return "Less than 10";
 }
 
 testGreaterOrEqual(10);


// Comparison with the Less Than Operator
// Add the less than operator to the indicated lines so that the return statements make sense.
function testLessThan(val) {
	if (val < 25) {  // Change this line
	  return "Under 25";
	}
 
	if (val < 55) {  // Change this line
	  return "Under 55";
	}
 
	return "55 or Over";
 }
 
 testLessThan(10);


// Comparison with the Less Than Or Equal To Operator
// Add the less than or equal to operator to the indicated lines so that the return statements make sense.
function testLessOrEqual(val) {
	if (val <= 12) {  // Change this line
	  return "Smaller Than or Equal to 12";
	}
 
	if (val <= 24) {  // Change this line
	  return "Smaller Than or Equal to 24";
	}
 
	return "More Than 24";
 }
 
 testLessOrEqual(10);


// Comparisons with the Logical And Operator
/* Replace the two if statements with one statement, using the && operator, 
which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. 
Otherwise, will return the string No. */
function testLogicalAnd(val) {
	// Only change code below this line
 
	if (val <= 50 && val >= 25) {
	  return "Yes";
	}
 
	// Only change code above this line
	return "No";
 }
 
 testLogicalAnd(10);


// Comparisons with the Logical Or Operator
// Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive.
// Otherwise, return the string Inside
function testLogicalOr(val) {
	// Only change code below this line
 
	if (val < 10 || val > 20) {
	  return "Outside";
	}
 
	// Only change code above this line
	return "Inside";
 }
 
 testLogicalOr(15);


// Introducing Else Statements
// Combine the if statements into a single if/else statement.
function testElse(val) {
	let result = "";
	// Only change code below this line
 
	if (val > 5) {
	  result = "Bigger than 5";
	} else {
	  result = "5 or Smaller";
	}
	
	// Only change code above this line
	return result;
 }
 
 testElse(4);


// Introducing Else If Statements
// Convert the logic to use else if statements.
function testElseIf(val) {
	if (val > 10) {
	  return "Greater than 10";
	} else if (val < 5) {
	  return "Smaller than 5";
	} else {
	  return "Between 5 and 10";
	}
 }
 
 testElseIf(7);


// Logical Order in If Else Statements
// Change the order of logic in the function so that it will return the correct statements in all cases.
function orderMyLogic(val) {
	if  (val < 5) {
	  return "Less than 5";
	} else if (val < 10) {
	  return "Less than 10";
	} else {
	  return "Greater than or equal to 10";
	}
 }
 
 orderMyLogic(7);


// Chaining If Else Statements
/* Write chained if/else if statements to fulfill the following conditions:
	num < 5 - return Tiny
	num < 10 - return Small
	num < 15 - return Medium
	num < 20 - return Large
	num >= 20 - return Huge
*/
function testSize(num) {
	// Only change code below this line
	if (num < 5) {
	  return "Tiny";
	} else if (num < 10) {
	  return "Small";
	} else if (num < 15) {
	  return "Medium";
	} else if (num < 20) {
	  return "Large";
	} else {
	  return "Huge";
	}
	// Only change code above this line
 }
 
 testSize(7);


// Golf Code
// Your function will be passed par and strokes arguments.
// Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
/*	Strokes	Return
	1	"Hole-in-one!"
	<= par - 2	"Eagle"
	par - 1	"Birdie"
	par	"Par"
	par + 1	"Bogey"
	par + 2	"Double Bogey"
	>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. 
We have added an array of all the names for your convenience. */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
      return names[0];
  } else if (strokes <= par - 2) {
      return names[1];
  } else if (strokes === par - 1) {
      return names[2];
  } else if (strokes === par) {
      return names[3];
  } else if (strokes === par + 1) {
      return names[4];
  } else if (strokes === par + 2) {
      return names[5];
  } else {
      return names[6];
  }
  // Only change code above this line
}

golfScore(5, 4);



// Selecting from Many Options with Switch Statements
/* Write a switch statement which tests val and sets answer for the following conditions:
	1 - alpha
	2 - beta
	3 - gamma
	4 - delta
*/
function caseInSwitch(val) {
	let answer = "";
	// Only change code below this line
	switch (val) {
	  case 1:
		 answer = "alpha";
		 break;
	  case 2:
		 answer = "beta";
		 break;
	  case 3:
		 answer = "gamma";
		 break;
	  case 4:
		 answer = "delta";
		 break;
	}
	// Only change code above this line
	return answer;
 }
 
 caseInSwitch(1);