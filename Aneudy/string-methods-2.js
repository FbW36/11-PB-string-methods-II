/*Declare a variable: 'It's hard to say who is right in this matter'. */ /*
0. Find the first occurrence of the letter "a" in a string, starting the search at position 17.*/
var one ="It's hard to say who is right in this matter";
console.log(one.indexOf("a", 17));

/*1. Check if a string includes "righT".*/

console.log (one.includes("righT"));

/*2. Extract 'who' word from the text.*/

var let = one.slice(17, 20);
console.log(let);

/*3. Extract only the last character.*/

var let = one.slice(-1);
console.log(let);