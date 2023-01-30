const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let users3Languages = users.filter( user => {
    return user.languages.length >= 3;
});
console.log(users3Languages);

// Use .map to create an array of strings where each element is a user's email address

let userEmail = users.map( user => {
    return user.email;
})
console.log(userEmail);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalExperience = users.reduce((accumulatedExperience, currentUser) => {
    return accumulatedExperience + currentUser.yearsOfExperience;
}, 0);

console.log(totalExperience);
console.log(totalExperience/users.length);

// Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce((currentLongest, currentUser) => {
    return (currentLongest.length < currentUser.email.length) ? currentUser.email : currentLongest;
}, "");

console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let userNames = users.reduce((stringOfNames, currentUser) => {
    return (currentUser.id === users.length) ? `${stringOfNames}${currentUser.name}.`: `${stringOfNames}${currentUser.name}, `;
}, "");

console.log(userNames);

// Use .reduce to get the unique list of languages from the list of users.

let uniqueLanguages = users.reduce((listLanguages, currentUser) => {
    for (let language of currentUser.languages){
        if (listLanguages.includes(language)){
            continue;
        }
        listLanguages.push(language);
    }

    return listLanguages;
}, []);

console.log(uniqueLanguages);