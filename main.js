let str = "reverse";

function reverse1(str) {
    let newstr = str.split("").reverse().join("");
    return newstr
}

function reverse2(str) {
    debugger;
    let strArr = str.split("");
    let reverseArr = [];
    for(let index = 0; index < strArr.length; index++) {
        reverseArr[index] = strArr[strArr.length - (index + 1)];
        console.log(reverseArr);
    }
    return reverseArr
}

function reverse3(str) {
    debugger;
    let strArr = str.split("");
    let reverseArr = [];
    for(let index = 0; index < strArr.length; index++) {
        reverseArr[strArr.length - (index + 1)] = strArr[index];
        // console.log(reverseArr);
    }
    return reverseArr

}


let newString = reverse1(str);
console.log("string1: ", newString);
let newstr2 = reverse2(str);
let newStr3 = reverse3(str);
console.log(newstr2);
console.log("str3: ", newStr3)