// Create a function, filterList, that takes a list of non-negative integers and strings
// and returns a new list with the strings filtered out.
function filterList(list){
    let newList = [];
    list.forEach(function (variable){
        if (typeof variable === "number"){
            newList.push(variable);
        }
    })
    return newList;
}

console.log(filterList([1,2,'a','b'])); // returns [1,2]
console.log(filterList([1,'a','b',0,15])); // returns [1,0,15]
console.log(filterList([1,2,'aasf','1','123',123])); // returns [1,2,123]