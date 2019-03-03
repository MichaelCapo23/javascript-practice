let string = "reverse";
console.log("string: ", string);

function reverseString(string) {
    // let arrayString = Array.from(string);
    let arrayString = string.split('');
    console.log("array from string: ", arrayString);
    const reverseArray = [];
    for(let index = 0; index < arrayString.length; index++) {
        reverseArray[index] = arrayString[arrayString.length - (index + 1)];
        console.log(`index: ${index} reverse array: `, reverseArray);
    }
    const reversedWord = reverseArray.join("");
    console.log("reversedWord should be a string: ", reversedWord);
    return reversedWord;
}

const word = reverseString(string);

console.log("result of function: ", word);
