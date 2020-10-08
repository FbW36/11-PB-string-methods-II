let quote = "It's hard to say who is right in this matter";

//0
console.log("0==>", quote.indexOf("a", 17));

//1
console.log("1==>", quote.includes("rightT"));

//2
console.log("who is in", quote.indexOf("who"));
console.log("2==>", quote.slice(17, 20));

//3
console.log("quote is ", quote.length + " characters big");
console.log("3==>", quote.slice(43));
