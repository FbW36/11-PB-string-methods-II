let opinion = "'It's hard to say who is right in this matter'.";

// 0.
console.log("opinion look for a at pos 17==> ", opinion.indexOf("a", 17)); //40

//1.
console.log("look for righT ==> ", opinion.indexOf("righT")); // -1

//2. 
console.log("extract who ==> ", opinion.slice(18, 22)); //who

//3.
console.log("extract last char ==> ", opinion[opinion.length - 1]); // "."