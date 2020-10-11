var sentence = "It's hard to say who is right in this matter";

//0 find the first occurrence of the letter "a" in a string, starting the search at position 17.
console.log("no0", sentence.indexOf("a", 17));

//1. Check if a string includes "righT".
console.log("no1", sentence.includes("righT"));

//2. Extract 'who' word from the text.
console.log("no2", sentence.slice(17, 20));

//3. Extract only the last character.
console.log("no3", sentence[sentence.length - 1]);
