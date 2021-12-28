

function myArrayToList (arr) {
    let listObj = null;

    for (let i = arr.length - 1; i >= 0; i--) {

        listObj = {value: arr[i], rest: listObj};

    }

    return listObj;
}

console.log(myArrayToList([10, 20, 40, 70]));

const listFromArray = myArrayToList([10, 20, 40, 70]);

function myListToArray(list) {
    let array = [];

    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }

    return array;
}

console.log(myListToArray(listFromArray));

function myPretend(elem, list) {
    let newList = {};

    newList.value = elem;
    newList.rest = list;

    return newList;
}

console.log(myPretend(80, listFromArray));

function myNth(list, n) {

    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return myNth(list.rest, n - 1);
}

console.log(myNth(listFromArray, 2));
