//Practicing recursive functions. Get a rolling sum of all values in an array, some indexes could bve strings/arrays.
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
console.log(total);