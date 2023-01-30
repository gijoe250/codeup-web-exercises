( () => {
    "use strict"

    // TODO: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
    let userInfo;

    $('#searchButton1').click(async function(e) {
        e.preventDefault();
        userInfo = await getUserName($('#inputBox1').val());
        const date = new Date(userInfo[0].created_at);
        console.log(date);
        console.log(userInfo[0].actor.login);
    });

    $('#searchButton2').on('click', async (e) => {
        await changeBackground();
    });

    async function getUserName(userName){
        try{
            let response = await fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': `token ${keys.gitHub}`}});
            let data = await response.json();
            return data;
        }
        catch (error){
            console.log("it failed");
            return error;
        }
    }

    async function changeBackground(){
        try{
            let response = await fetch('./../data/profiles.json');
            let data = await response.json();
            let input = $('#inputBox2').val();
            $('body').css('background-color', `${data[input]}`);
            $("#inputBox2").val("");
        }
        catch (error){
            console.log("it failed");
            return error;
        }
    }

})();