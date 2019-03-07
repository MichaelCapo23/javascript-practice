//move the first index in the array the number of time of its value to the end of the array

let string = "2314";

function moveString(string) {
    console.log(string);
    debugger;
    let stringArray = string.split("");
    for (let index = 0; index < stringArray.length; index++) {
        let timesToMove = stringArray[0];
        if (timesToMove / 1) { //0 s falsey so this only runs if its not 1
            if (timesToMove > stringArray.length - 1) {
                console.log("unable to move number " + timesToMove + " times to the end of the array. switching first and last index to continue loop");
                let temp = stringArray[0];//because number doesn't work im switching it with the last number to continue the loop
                stringArray[0] = stringArray[stringArray.length-1];
                stringArray[stringArray.length-1] = temp;
                console.log(stringArray)
            } else {
            for (let moveNumber = 0; moveNumber < timesToMove; moveNumber++) {
                    if (moveNumber == timesToMove - 1) {
                        let temp = stringArray[moveNumber];
                        stringArray[moveNumber] = stringArray[stringArray.length - 1];
                        stringArray[stringArray.length - 1] = temp;
                        console.log(stringArray)
                    } else {
                        let temp = stringArray[moveNumber];
                        stringArray[moveNumber] = stringArray[moveNumber + 1];
                        stringArray[moveNumber + 1] = temp;
                        console.log(stringArray);
                    }
                }
            }

        } else { //if the number is 1 then move it directly to the end of the array
            let temp = stringArray[0];
            stringArray[0] = stringArray[stringArray.length - 1];
            stringArray[stringArray.length - 1] = temp;
            console.log(stringArray)
        }
    }
}

moveString(string);