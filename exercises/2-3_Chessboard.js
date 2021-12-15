// My solution

let size = 8;
let str = "";

for (let a = 0; a < size; a++) {
    for (let b = 0; b < size; b++) {
        if ((a+b) % 2 == 0) {
            str += " ";
        } else {
            str += "#";
        }
    }
    str += "\n";
}

console.log(str);
