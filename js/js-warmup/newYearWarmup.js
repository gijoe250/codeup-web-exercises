// Write a function, returnLastTwoChars that returns the last two characters of an input string. Assume a string input of at least two characters.
function returnLastTwoChars (string){
    let newString = "";
    newString = newString + string[string.length-2] + string[string.length-1]
    return newString;
}


console.log(returnLastTwoChars('cat')); // returns ‘at’
console.log(returnLastTwoChars('hello')); // returns ‘lo’
console.log(returnLastTwoChars('hi')); // returns ‘hi’
// EXTRA CHALLENGE
// Create a function, returnLastCharsReversed that takes in two arguments:
//     1. a string of characters
// 2. an integer that represents how many characters should be returned
// The function should return a string of characters, equal to the number specified
// by the second argument, in reverse order. If 0 is passed as a second argument,
// return an empty string. Assume only valid inputs and that the second argument
// will NOT exceed the length of the input string.

function returnLastCharsReversed (string, numReturn){
    let newString = "";
    for( let i=0; i < numReturn; i++){
        newString = newString + string[string.length - (1 + i)];
    }
    return newString;
}

console.log(returnLastCharsReversed('cat', 0)); // returns ‘’
console.log(returnLastCharsReversed('cat', 1)); // returns ‘t’
console.log(returnLastCharsReversed('cat', 2)); // returns ‘ta’
console.log(returnLastCharsReversed('cat', 3)); // returns ‘tac’
console.log(returnLastCharsReversed("codeup", 1)); // returns ‘p’
console.log(returnLastCharsReversed("codeup", 3)); // returns ‘pue’
console.log(returnLastCharsReversed('codeup', 4)); // returns ‘pued’