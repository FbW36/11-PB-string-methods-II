// Declare a variable: 'It's hard to say who is right in this matter'.
let argument = `It's hard to say who is right in this matter`;

// 0.  Find the first occurrence of the letter "a" in a string, starting the search at position 17.
console.log(argument.indexOf(`a`, 17));

// 1. Check if a string includes "righT".
console.log(argument.includes(`righT`));

// 2. Extract 'who' word from the text.
console.log(argument.slice(17, 20));

// 3. Extract only the last character.
console.log(argument[argument.length - 1]);
