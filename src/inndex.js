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

