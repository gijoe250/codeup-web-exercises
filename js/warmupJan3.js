// Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’ characters replaced with ‘ie’.
function iBeforeE(string){
    let newString = string.replace(/ei/g, "ie");
    return newString;
}

console.log(iBeforeE("ei")); // returns ‘ie’
console.log(iBeforeE("height")); // returns ‘hieght’
console.log(iBeforeE("heist")); // returns ‘hiest’
console.log(iBeforeE("their")); // returns ‘thier’
console.log(iBeforeE("theirtheir")); // returns ‘thierthier’