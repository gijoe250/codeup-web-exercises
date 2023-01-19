// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
function encodeStr(string){
    let lowerStr = string.toLowerCase();

    lowerStr = lowerStr.replace(/a/g, "@");
    lowerStr = lowerStr.replace(/i/g, "1");
    lowerStr = lowerStr.replace(/s/g, "$");

    return lowerStr;
}
// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’

console.log(encodeStr('apple')); // returns ‘@pple’
console.log(encodeStr('codeup')); // returns ‘codeup’
console.log(encodeStr('SASS')); // returns ‘$@$$’
console.log(encodeStr('bike')); // returns ‘b1ke’
