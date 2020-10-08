
let mainStr = "It's hard to say who is right in this matter";

// 0.
let firstOccurrence = 0;
lastIndexOf_a = mainStr.lastIndexOf('a');
/* console.log(lastIndexOf_a); */
lastIndexOf_aExtraction = mainStr[lastIndexOf_a];
console.log(lastIndexOf_aExtraction);

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