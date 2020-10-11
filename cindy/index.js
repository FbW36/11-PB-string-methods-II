//Programming Basics: string methods

//These exercises are aimed at making you familiar with string methods.

//Declare a variable: 'It's hard to say who is right in this matter'.
let sentence = "It's hard to say who is right in this matter";
//Find the first occurrence of the letter "a" in a string, starting the search at position 17.
console.log(
  "first occurrance of a starting from position 17 => ",
  sentence.indexOf("a", 17)
);

//Check if a string includes "righT".
console.log("Is 'righT' included? => ", sentence.includes("righT"));

//Extract 'who' word from the text.

console.log("Extracting the word 'who' => ", sentence.match("who"));

//Extract only the last character.
console.log(
  "last character of the string => ",
  sentence.substr(sentence.length - 1)
);
