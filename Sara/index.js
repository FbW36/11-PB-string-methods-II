// Declare a variable: 'It's hard to say who is right in this matter'. 🐹 🐹 🐹 🐹 🐹
let problem = 'It is hard to say who is right in this matter' ;

// Find the first occurrence of the letter "a" in a string, starting the search at position 17.
console.log('0 ==>', problem.indexOf('a', 17)) ; // 40
 
//Check if a string includes "righT".
console.log('1 ==>', problem.includes('righT')) ; // false ==> it includes right

// Extract 'who' word from the text.
console.log('2 ==>', problem.slice(17, 21)); // who 

// Extract only the last character. 
console.log('3 ==>', problem[problem.length - 1]) ; // r

