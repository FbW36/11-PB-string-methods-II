let right = "Its hard to say who is right in this matter";

// 0 Find the first occurrence of the letter "a" in a string, starting the search at position 17.

console.log(right.slice(17), right.lastIndexOf("a")); // 38

// 1 Check if a string includes "righT".

console.log(right.includes("righT")); // false

// 2 Extract 'who' word from the text.

console.log(right.slice(16, 20)); // who

// 3 Extract only the last character.

console.log(right[right.length - 1]); // r
