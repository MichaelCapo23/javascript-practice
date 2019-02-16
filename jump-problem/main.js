//take the last number in the array and make the first number move that amount of times to get the the last index of the array

const jumpArr = [2,3,1,1,4];

function getToEnd(jumpArr) {
    console.log(jumpArr);
    for(let index = 0; index < jumpArr.length; index++) {
        let lastNumber = jumpArr[jumpArr.length-1];
        let currentNumber = jumpArr[0];
        let movesPerJump = (jumpArr.length - 1) / lastNumber;
        if(movesPerJump % 1 === 0) {
            for(let jumpNumber = 0; jumpNumber < ((jumpArr.length-1) / movesPerJump); jumpNumber++) {
                debugger;
                let temp = jumpArr[(jumpNumber.indexOf(currentNumber).)+movesPerJump];
                jumpArr[jumpNumber+movesPerJump] = currentNumber;
                jumpArr[jumpNumber] = temp;
                console.log(jumpArr);
            }
        } else {
            let indexesToJump = Math.ceil(movesPerJump);
            for(let jumpNumber = 0; jumpNumber < ((jumpArr.length-1) / movesPerJump); jumpNumber++) {
                let temp = jumpArr[(jumpNumber.indexOf(currentNumber))+indexesToJump];
                jumpArr[jumpNumber+indexesToJump] = currentNumber;
                jumpArr[jumpNumber] = temp;
                console.log(jumpArr);
            }
        }
    }
}

getToEnd(jumpArr);