let str = "It's hard to say who is right in this matter."

// Find the first occurrence of the letter "a" in a string, starting the search at position 17
console.log('result 1 -->', str.indexOf('a', 17))

// Check if a string includes "righT"
console.log('result 2 -->', str.includes('righT'))

// Extract 'who' word from the text
console.log(str.indexOf("w")); // 17
console.log(str.lastIndexOf("o")); // 19
console.log("result 3 --> ", str.slice(17, 20));

// Extract only the last character
console.log('result 4 -->', str.slice(str.length - 1))