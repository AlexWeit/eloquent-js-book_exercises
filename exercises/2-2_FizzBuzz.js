// My solution
let result = 1;

for (let counter = 0; counter < 100; counter++) {

    if ((result % 3 == 0) && (result % 5 !== 0)) {
        console.log("Fizz");
        result++;
    } else if ((result % 5 == 0) && (result % 3 !== 0)) {
        console.log("Buzz");
        result++;
    } else if ((result % 3 == 0) && (result % 5 == 0)) {
        console.log("FizzBuzz");
        result++;
    } else {
        console.log(result);
        result++;
    }
}

// Solution from book
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}
