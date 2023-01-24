const strs = [
    {
        id: 1,
        str: 'hello'
    },
    {
        id: 2,
        str: 'world'
    },
    {
        id: 3,
        str: 'codeup'
    },
    {
        id: 4,
        str: 'x'
    }
]

console.log(reverseStrings(strs)); // returns...

//     [
//     {
//         id: 1,
//         str: 'olleh'
//     },
//         {
//             id: 2,
//             str: 'dlrow'
//         },
//         {
//             id: 3,
//             str: 'puedoc'
//         },
//         {
//             id: 4,
//             str: 'x'
//         }
//     ]

// Make a function, reverseStrings, that takes in an array of objects and reverses the value of the 'str' properties.
function reverseStrings(objects){
    objects.forEach(function (object){
        let splitString = object.str.split("");
        let reverseArray = splitString.reverse();
        object.str = reverseArray.join("");
    })
    return objects;
}