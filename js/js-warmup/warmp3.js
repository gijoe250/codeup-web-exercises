// ================================= WARM UP
//
// Create a function, returnLongestPetName, that takes in a array of pet objects and returns a string of the longest name for a pet.

    const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];

console.log(returnLongestPetName(pets)); // returns 'Mr. Salmon'

function returnLongestPetName(pets){
    let longestString = "";

    pets.forEach(function (pet){
        if (longestString.length < pet.name.length){
            longestString = pet.name;
        }
    })
    return longestString;
}