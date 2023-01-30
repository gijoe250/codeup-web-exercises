(function (){
    "use strict";

    // Add a button that when clicked, changes the background color to red
    $('button').click(function() {
        $('body').css('background-color', 'red');
    });
    /**
     * additional example using the .on
     */
    // $('button').on('click', (e) => {
    //     $('body').css('background-color', 'red');
    // });

})();