var1 = "It's hard to say who is right in this matter";

// exercise 0
pos_17 = var1.slice(17);
first_a = pos_17.indexOf("a");
console.log('position of the first occurrence of the letter "a" =', first_a);

// exercise 1
verif = var1.includes("righT");
console.log("The sentence contains the expression 'righT'?", verif);

// exercise 2
who_pos = var1.indexOf("who");
extract = var1.slice(who_pos, who_pos + 3);
console.log(extract);

// exercise 3
console.log(var1[var1.length - 1]);
