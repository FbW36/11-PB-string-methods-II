
let mainStr = "It's hard to say who is right in this matter";

// 0.

let searchedLetter = "a";
let firstOccurrenceOfSearchedLetter = mainStr.indexOf("a", 17);
console.log(`The first occurrence of letter '${searchedLetter}' starting at position 17 is at position ${firstOccurrenceOfSearchedLetter}`);

// 1. 
let subStr = 'rightT';
let subStrCheck = mainStr.includes(subStr);
res = subStrCheck ? `The sub-string ${subStr} is exist` : `The sub-string ${subStr} is NOT exist`;
console.log(res);

// 2. 
let whoWord = mainStr.slice(17, 20);
console.log(whoWord);

// 3
let lastChar = mainStr.length-1;
console.log(mainStr[lastChar]);