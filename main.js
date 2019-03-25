let str = "reverse";

function reverse1(str) {
    let newstr = str.split("").reverse().join("");
    return newstr
}

function reverse2(str) {
    let strArr = str.split("");
    for(let index = 0; index < strArr.length - 1; index++) {
        debugger;
        let temp = strArr[index];
        strArr[index] = strArr[strArr.length - (index + 1)];
        strArr[strArr.length - (index + 1)] = temp;
    }
    return strArr

}


let newString = reverse1(str);
console.log("string1: ", newString);
let newstr2 = reverse2(str);
console.log(newstr2);