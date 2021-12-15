/*Функция, которая ищет минимум*/
// My solution
function myMin(a, b) {
    if (a<b) return a;
    else if (a>b) return b;
    else return "значения равны";
}

console.log(myMin(2, 5));
console.log(myMin(3, 8));
console.log(myMin(4, 4));

// Solution from the book
function min(a, b) {
    if (a < b) return a;
    else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
