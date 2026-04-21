'use strict';

// Palindrom (simple)
function isPalindromSimple(string) {
    const stringBlankSpace = string.toLowerCase().replace(/ /g, ''); 
    const reversedString = stringBlankSpace.split('').reverse().join('');
    if (reversedString === stringBlankSpace) return true;
    return false;
}

console.log('isPalindromSimple')
console.log(isPalindromSimple('Я несУ ГУСЕня'));
console.log(isPalindromSimple('сонЦе'));


// Palindrom (hard)
function isPalindromHard(string) {
    let stringBlankSpace = string.toLowerCase().replace(/ /g, ''); 
    let reversedString = '';
    for (let i = stringBlankSpace.length - 1; i >= 0; i--) {
        reversedString += stringBlankSpace[i];
    }
    if (reversedString === stringBlankSpace) return true;
    return false;
}

console.log('isPalindromHard')
console.log(isPalindromHard('Я несУ ГУСЕня'));
console.log(isPalindromHard('сонЦе'));

// Anagram (simple)
function isAnagramSimple(string1, string2) {
    const string1LowerCase = string1.toLowerCase().replace(/ /g, ''); 
    const string2LowerCase = string2.toLowerCase().replace(/ /g, ''); 
    const arr1 = Array.from(string1LowerCase).sort().join('');
    const arr2 = Array.from(string2LowerCase).sort().join('');
    if (arr1 === arr2) return true;
    return false;
}

console.log('isAnagramSimple')
console.log(isAnagramSimple('ArT        ', '         Rat'));
console.log(isAnagramSimple('Hello', 'Sea'));

// Anagram (hard)
function bubbleSort(arr) {
    for(let i= 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function isAnagramHard(string1, string2) {
    const string1LowerCase = string1.toLowerCase().replace(/ /g, ''); 
    const string2LowerCase = string2.toLowerCase().replace(/ /g, ''); 
    if (string1LowerCase.length === string2LowerCase.length) { 
        const arr1 = [...string1LowerCase];
        const arr2 = [...string2LowerCase];
        bubbleSort(arr1);
        bubbleSort(arr2);
        for(let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
    return false;
}

console.log('isAnagramHard')
console.log(isAnagramHard('ArT        ', '         Rat'));
console.log(isAnagramHard('ArT        ', '         hat'));
console.log(isAnagramHard('Hello', 'Sea'));

        