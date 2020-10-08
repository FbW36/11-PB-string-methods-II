// # 11 - PB - string - methods - II

//Declare a variable: 'It's hard to say who is right in this matter'.
let str1 = "It's hard to say who is right in this matter";
//Find the first occurrence of the letter "a" in a string, starting the search at position 17.
console.log(
  "first occurrance of a starting from position 17 => ",
  str1.indexOf("a", 17)
);

// 1. Check if a string includes "righT".
console.log(str1.includes("righT")); // false

// 2. Extract 'who' word from the text.
console.log(str1.slice(17, 20)); // who

// 3. Extract only the last character.
console.log(str1[str1.length - 1]); // r
