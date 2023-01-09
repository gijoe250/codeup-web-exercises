// ================================= WARM UP

// Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays are empty, return an empty array.

function zipArrays(array0, array1){
    let newArray = [];
    if (array0.length === 0){
        return newArray;
    }
    let num = array0.length;
    for (let i=0; i < num; i++){
        newArray.push(array0.shift());
        newArray.push(array1.shift());
    }
    return newArray;
}

console.log(zipArrays([], [])); // returns []
console.log(zipArrays([1], [2])); // returns [1, 2]
console.log(zipArrays(['a', 'b'], ['c', 'd'])); // returns... ['a', 'c', 'b', 'd']
console.log(zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]) )// returns...

    // [
    // 1,
    //     'bob',
    //     2,
    //     null,
    //     'a',
    //     'sally',
    //     'b',
    //     25
    // ]