( () => {
    "use strict"

    // TODO: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
    let userInfo;

    $('#searchButton').click(async function(e) {
        e.preventDefault();
        userInfo = await getUserName($('#inputBox').val());

        const date = new Date(userInfo[0].created_at);

        console.log(date);
        console.log(date.toLocaleString('en-US',
                {
                timeZone: 'CST',
            }),
        );
        console.log(userInfo[0].actor.login);
    });

    async function getUserName(userName){
        try{
            let response = await fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': `token ${keys.gitHub}`}});
            let data = await response.json()
            return data;
        }
        catch (error){
            return error;
        }
    }
})();