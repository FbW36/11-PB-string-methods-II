let str = "it's hard to say who is right in this matter"
// Find the first occurrence of the letter "a" in a string, starting the search at position 17.

console.log("str ==>", str.indexOf("a", 17)); // 39

// 1. Check if a string includes "righT".
console.log("str ==>", str.includes("righT")); // false

// 2. Extract 'who' word from the text.

console.log("str ===>", str.indexOf("who")); // 17

// 3. Extract only the last character.

console.log("str ==>", str[str.length - 1]); //  r