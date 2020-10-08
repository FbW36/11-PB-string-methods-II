let value = "It is hard to say who is right in this matter";
console.log(
  'the first occurrence of the letter "a" in a string, starting the search at position 17 ==> ',
  value.indexOf("a", 17)
);

console.log('a string includes "righT" ==> ', value.includes("righT"));

console.log("Extract who word from the text ==> ", value.slice(18, 22));

console.log("Extract only the last character ==> ", value.slice(-1));
