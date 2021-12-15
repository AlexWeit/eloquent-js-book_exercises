// My solution
function myReverseArray(arr) {

    let newArr = [];
    let x = 1;

    for (let elem in arr) {
        let lastElem = arr[(arr.length - x)];
        newArr.push(lastElem);
        x++;
    }

    return newArr;
}

console.log(myReverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(myReverseArray(["A", "B", "C"]));

function myReverseArrayInPlace(arr) {
    let x = 1;
    const length = arr.length;

    for (let elem in arr) {
        let firstElem = arr[x-1];
        arr.unshift(firstElem);
        x+=2;
    }

    arr.splice((length), length);

    return arr;
}

console.log(myReverseArrayInPlace([1, 2, 3, 4, 5, 10]));
console.log(myReverseArrayInPlace(["A", "B", "C"]));

// Solution from book
function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
