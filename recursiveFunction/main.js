//fibonacci sequence code

function fib(n) {
    debugger;
    if (n == 0) {
        return 0
    }
    else if (n == 1 || n == 2)
        return 1;
    else
        return fib(n - 1) + fib(n - 2);
}

let amount = fib(9); //34
console.log(amount);

// get a sum of all numbers in the array, including numbers inside arrays, ignore strings.

let arr = [2, 7, 4, [5, 7, 5], "hey", [4, 3, 2], 1, "heyo"];
function arraySum(arr) {
    debugger;
    let sum = 0;
    function itemSum(arr) {
        arr.forEach(function (item) {
            if(typeof item === 'object') {
                sum = itemSum(item);
            } else if (typeof item === 'number') {
                sum += item;
            }
        })
        return sum;
    }
    itemSum(arr);
    return sum;
}

let total = arraySum(arr);
console.log(total); //total should be 40

// take in a array and a number. Find all possible combos with a length of the given number.

function combos(arr, num) {
    let combo = [];
    function checkIndex(arr, num) {
        for(let index = 0; index < arr.length; index++) {
            
        }
    }
    checkIndex(arr, num);
    return combo;

}

combos([1,2,3,4,5], 3);

// function hasSubArray(master, sub) {
//     debugger;
//     return sub.every((i => v => i = master.indexOf(v, i) + 1)(0));
// }

// var array = [12, 44, 22, 66, 222, 777, 22, 22, 22, 6, 77, 3];
//
// console.log(hasSubArray(array, [777, 22, 22]));
// console.log(hasSubArray(array, [777, 22, 3]));
// console.log(hasSubArray(array, [777, 777, 777]));
// console.log(hasSubArray(array, [42]));