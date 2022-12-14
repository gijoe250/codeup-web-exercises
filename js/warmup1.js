// ================================= WARM UP
//
// Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average age of a dog.
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
        name: 'Pickles',
        type: 'Dog',
        age: 10
    }

];

// findAverageDogAge(pets) // returns 7.5

console.log(findAverageDogAge(pets));

function findAverageDogAge(arrPets){
    let ageSum = 0;
    let petCount = 0;

    arrPets.forEach(function (pet){
        if(pet.type === "Dog"){
            ageSum += pet.age;
            petCount++;
        }
    })
    return ageSum/petCount;
}

