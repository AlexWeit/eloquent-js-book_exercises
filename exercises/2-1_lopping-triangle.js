// My solutions
// 1st way

let str = "#";
let counter = 0;
while (counter < 7) {
	console.log(str);
	str = str + "#";
  counter ++;
}*/

/*
// 2nd way

let str2 = "#";
for (let counter2 = 0; counter2 < 7; counter2 ++) {
	console.log(str2);
  str2 = str2 + "#";
 }
 */

// 3rd way
let str3 = "#";
for (let strLength = str3.length; strLength <= 7; strLength ++) {
    console.log(str3);
    str3 = str3 + "#";
}

// Solutions from the book
for (let line = "#"; line.length < 8; line += "#")
    console.log(line);
