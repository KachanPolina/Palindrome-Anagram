'use strict';
// Palindrom (simple)
function isPalindromSimple(string) {
    const stringBlankSpace = string.toLowerCase().replaceAll(' ', ''); 
    const reversedString = stringBlankSpace.split("").reverse().join("");
    if (reversedString === stringBlankSpace) return true;
    return false;
}

console.log(isPalindromSimple('Я несУ ГУСЕня'));
console.log(isPalindromSimple('сонЦе'));

console.log('--------------')

// Palindrom (hard)
function isPalindromHard(string) {
    let stringBlankSpace = string.toLowerCase().replaceAll(' ', ''); 
    let reversedString = "";
    for (let i = stringBlankSpace.length - 1; i >= 0; i--) {
        reversedString += stringBlankSpace[i];
    }
    if (reversedString === stringBlankSpace) return true;
    return false;
}

console.log(isPalindromHard('Я несУ ГУСЕня'));
console.log(isPalindromHard('сонЦе'));

console.log('--------------')

// Anagram (simple)
function isAnagram(string1, string2) {
    const string1LowerCase = string1.toLowerCase().replaceAll(' ', ''); 
    const string2LowerCase = string2.toLowerCase().replaceAll(' ', ''); 
    const arr1 = Array.from(string1LowerCase).sort().join("");
    const arr2 = Array.from(string2LowerCase).sort().join("");
    if (arr1 === arr2) return true;
    return false;
}

console.log(isAnagram('ArT        ', '         Rat'));
console.log(isAnagram('Hello', 'Sea'));

