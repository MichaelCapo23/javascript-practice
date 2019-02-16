//take the last number in the array and make the first number move that amount of times to get the the last index of the array

const jumpArr = [2,3,1,1,4];

function getToEnd(jumpArr) {
    for(let index = 0; index < jumpArr.length; index++) {
        let lastNumber = jumpArr[jumpArr.length];
        let currentNumber = jumpArr[index];
        let movesPerJump = (jumpArr.length - index+1) / lastNumber;
        if(movesPerJump % 2 !== 0) {
            for(let jumpNumber = 0; jumpNumber < (jumpArr.length - index+1); jumpNumber++) {
                let temp = jumpArr[index+1];

            }
        }
    }
}