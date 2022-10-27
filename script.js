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
