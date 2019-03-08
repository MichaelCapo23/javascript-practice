//Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
//
// The same repeated number may be chosen from candidates unlimited number of times.

const candidates = [2,3,5];
const target = 8;

function findCombinations(candidates, target) {
    debugger;
    let possibilities = [];
    for(let index = 0; index < candidates.length; index++) {
        let currentNumber = candidates[index];
        let validSameNumberCombo = checkMultipleOfOneNumber(currentNumber, target);
        if(validSameNumberCombo != null) {
            possibilities[possibilities.length] = validSameNumberCombo;
        }
        debugger;
        let otherNumbers = candidates.filter((index) => index != currentNumber);
        let ValidMultiNumberCombo = checkMultiplesAndOtherNumbers(currentNumber, otherNumbers, target);
        if(ValidMultiNumberCombo != null) {
            possibilities[possibilities.length] = ValidMultiNumberCombo;
        }
    }
    return possibilities
}

function checkMultiplesAndOtherNumbers(currentNumber, otherNumbers, target) {
    for(let index = 0; index < otherNumbers.length; index++) {
        let numberToMultiply = 1;
        let otherNumberIndex = 0;
        debugger;
        while(currentNumber * numberToMultiply + otherNumbers[index] != target && currentNumber * numberToMultiply + otherNumbers[index] < target) {
            numberToMultiply++
        }
        if(currentNumber * numberToMultiply + otherNumbers[index] == target) {
            let validCombo = makeArrayFromPowerAndOtherNumber(currentNumber, numberToMultiply, index, otherNumbers);
            return validCombo
        }
    }
    return null;
}



function checkMultipleOfOneNumber(currentNumber, target) {
        let numberToMultiply = 1;
        while(currentNumber * numberToMultiply != target && currentNumber * numberToMultiply <= target) {
            numberToMultiply++
        }
        if(currentNumber * numberToMultiply == target) {
            let comboArr = makeArrayFromPower(currentNumber, numberToMultiply);
            return comboArr
        } else {
            return null;
        }
}

function makeArrayFromPowerAndOtherNumber(currentNumber, power, index, otherNumbers) {
    let tempArray = [];
    for(let loopIndex = 0; loopIndex < power; loopIndex++) {
        tempArray[loopIndex] = currentNumber;
    }
    tempArray[tempArray.length] = otherNumbers[index];
    return tempArray
}

function makeArrayFromPower(number, power) {
    let tempArray = [];
    for(let index = 0; index < power; index++) {
        tempArray[index] = number;
    }
    return tempArray
}

let allCombos = [];
allCombos = findCombinations(candidates, target);
console.log(allCombos);