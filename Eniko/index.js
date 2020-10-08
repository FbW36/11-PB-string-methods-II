// These exercises are aimed at making you familiar with string methods.

// Declare a variable: 'It's hard to say who is right in this matter'.
let var1 = 'It is hard to say who is right in this matter';

// Find the first occurrence of the letter "a" in a string, starting the search at position 17.
console.log("Find the first occurrence of the letter a in a string, starting the search at position 17: " + var1.indexOf("a", 17));

// Check if a string includes "righT".
console.log("Check if a string includes righT: " + var1.includes("righT"));

// Extract 'who' word from the text.
console.log("Exact who word from the text: " + var1.slice(18, 21));

// Extract only the last character.
console.log("Extract only the last character: " + var1[var1.length-1]);