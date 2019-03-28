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

//take in a array and a number. Find all possible combos with a length of the given number.

function combos(arr, num) {
    for(let index = 0; index < arr.length; index++) {
        
    }
}

combos([1,2,3,4,5], 3);
