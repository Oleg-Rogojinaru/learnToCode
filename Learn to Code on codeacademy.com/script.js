
// Console
// 1. Use the console.log code in the editor to log your age to the console.
console.log(38);

// 2. On the next line, write another console.log to print out a different number representing the number of weeks you’ve been programming.
console.log(2);




// Data Types
// 1. On line 1, log the string 'JavaScript' to the console.
console.log('JavaScript');

// 2. On line 2, log the number 2011 to the console.
console.log(2011);

// 3. On line 3, print 'Woohoo! I love to code! #codecademy' to the console.
console.log('Woohoo! I love to code! #codecademy');

// 4. On line 4, print the number 20.49 to the console.
console.log(20.49);




// Arithmetic Operators
// 1. Inside of a console.log(), add 3.5 to your age. This is the age you’ll be when we start sending people to live on Mars.
console.log(38 + 3.5);

/* 2. On a new line write another console.log(). 
		Inside the parentheses, take the current year and subtract 1969.
		The answer is how many years it’s been since the 1969 moon landing.
*/
console.log(2022 - 1969);

// 3. Create another console.log(). Inside the parentheses divide 65 by 240.
console.log(65 / 240);

/* 4. Create one last console.log(). Inside the parentheses, multiply 0.2708 by 100.
      That’s the percent of the sun that is made up of helium. 
      Assuming we could stand on the sun, we’d all sound like chipmunks!
*/
console.log(0.2708 * 100);




// String Concatenation
/* 1. Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'.
		Note: You should concatenate the two strings exactly (without introducing any additional characters).
*/
console.log('Hello' + 'World');

/* 2. We left off the space last time. 
      Create a second console.log() statement in which you concatenate the strings 'Hello' and 'World', but this time make sure to also include a space (' ') between the two words.
*/
console.log('Hello ' + 'World');




// Properties
/* 1. Use the .length property to log the number of characters in the following string to the console:
		'Teaching the world how to code'
*/
console.log('Teaching the world how to code'.length);




// Methods
// 1. Use the .toUpperCase() method to log the string 'Codecademy' to the console in all capital letters.
console.log('Codecademy'.toUpperCase());
/*
	2. In the second console.log() statement in app.js, we have a string ' Remove whitespace ' which has spaces before and after the words 'Remove whitespace'.
		The one method that seems ideal for us is .trim().
		Use the method to remove the whitespace at the beginning and end of the string in the second console.log() statement.
*/
console.log('    Remove whitespace   '.trim());




// Built-in Objects
// 1. Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.
console.log(Math.random() * 100);
/*
	2. Now, use Math.floor() to make the output a whole number.
		Inside the console.log() you wrote in the last step, put the existing Math.random() * 100 code inside the parentheses of Math.floor().
*/
console.log(Math.floor(Math.random() * 100));
/*
	3. Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.
		Use this method with the number 43.8. Log the answer to the console.
*/
console.log(Math.ceil(43.8));
/*
	4. Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.
		Put the number 2017 in the parentheses of the method and use console.log() to print the result.
*/
console.log(Number.isInteger(2017));




// Variables
// Create a Variable: var
// 1. Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.
var favoriteFood = 'pizza';

// 2. Declare a variable named numOfSlices using the var keyword and assign to it the number 8.
var numOfSlices = 8;

/* 3. Under the numOfSlices variable, use console.log() to print the value saved to favoriteFood.
		On the following line, use console.log() to print the value saved to numOfSlices.
*/
console.log(favoriteFood);
console.log(numOfSlices);




// Create a Variable: let
// 1. Create a let variable called changeMe and set it equal to the boolean true.
let changeMe = true;

/* 2. On the line after changeMe is declared, set the value of changeMe to be the boolean false.
		To check if changeMe was reassigned, log the value saved to changeMe to the console.
*/
changeMe = false;
console.log(changeMe);




// Create a Variable: const
// 1. Create a constant variable named entree and set it to equal to the string 'Enchiladas'.
const entree = 'Enchiladas';

// 2. Just to check that you’ve saved the value of 'Enchiladas' to entree, log the value of entree to the console.
console.log(entree);




// Mathematical Assignment Operators
// 1. Use the += mathematical assignment operator to increase the value stored in levelUp by 5.
// 2. Use the -= mathematical assignment operator to decrease the value stored in powerLevel by 100.
// 3. Use the *= mathematical assignment operator to multiply the value stored in multiplyMe by 11.
// 4. Use the /= mathematical assignment operator to divide the value stored in quarterMe by 4.
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);




// The Increment and Decrement Operator
// 1. Using the increment operator, increase the value of gainedDollar.
// 2. Using the decrement operator, decrease the value of lostDollar.
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;




// String Concatenation with Variables
// 1. Create a variable named favoriteAnimal and set it equal to your favorite animal.
let favoriteAnimal = 'Raccoon';

/* 2. Use console.log() to print 'My favorite animal: ANIMAL' to the console. 
		Use string concatenation so that ANIMAL is replaced with the value in your favoriteAnimal variable.
*/
console.log('My favorite animal: ' + favoriteAnimal);




// String Interpolation
// 1. Create a variable called myName and assign it your name.
let myName = 'Oleg';

// 2. Create a variable called myCity and assign it your favorite city’s name.
let myCity = 'Stockholm';

/* 3. Use a single template literal to interpolate your variables into the sentence below. 
		Use console.log() to print your sentence to the console in the following format:
		My name is NAME. My favorite city is CITY.
		Replace NAME and CITY in the string above by interpolating the values saved to myName and myCity.
*/
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);




// typeof operator
// 1. Use console.log() to print the typeof newVariable.
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);

/* 2. Great, now let’s check what happens if we reassign the variable.
		Below the console.log() statement, reassign newVariable to 1.
*/
newVariable = 1;

/* 3. Since you assigned this new value to newVariable, it has a new type! 
		On the line below your reassignment, use console.log() to print typeof newVariable again.
*/
console.log(typeof newVariable);