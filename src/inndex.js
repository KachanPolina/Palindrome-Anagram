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
