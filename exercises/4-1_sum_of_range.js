// My solution

console.log("---Part 1---");

function myRange(start, end) {
    let arr = [];
    let elem = 0;
    for (let i = 0; i < end; i++) {
        arr.push(start + elem);
        elem += 1;
    }
    return arr;
}

console.log(myRange(1, 10));

console.log("---Part 2---");

let rangedArr = myRange(1, 10);

function mySum(arr2) {

    let x = 0;
    let summa = 0;

    for (let i=0; i < arr2.length; i++) {

        summa = summa + arr2[x];
        x += 1;
    }

    return summa;
}

console.log(mySum(rangedArr));

console.log("---Part 3---");

function myRangeUpgrade(start, end, step) {
    let arr = [];
    let elem = 0;

    if (step === undefined) {
        for (let i = 0; i < end; i++) {
            arr.push(start + elem);
            elem += 1;
        }

        return arr;

    } else {

        if (step > 0) {
            for (let i = 0; i < end; i++) {
                arr.push(start + elem);
                elem += step;

                if ((start+elem) > end) break;
                if ((step < 0) && ((start+elem) < end)) break;
            }

            return arr;

        } else {
            for (let i = 0; i < start; i++) {
                arr.push(start + elem);
                elem += step;

                if ((start+elem) < end) break;
            }

            return arr;
        }
    }
}

console.log(myRangeUpgrade(1, 10));
console.log(myRangeUpgrade(1, 10, 2));
console.log(myRangeUpgrade(5, 2, -1));


// Solution from book
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
