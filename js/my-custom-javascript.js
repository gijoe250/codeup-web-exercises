"use strict";

$(function() {

    // from intro exercise
    // alert( 'The DOM has finished loading!' );

    //
    // Id Selectors
    //
    // Create content in your HTML file using at least the following elements: h1, p, ul, li, div.
    //
    //     Add several attributes to your elements; you will need both id and class attributes.
    //
    //Use jQuery to select an element by the id. Alert the contents of the element.
    // let helloTitle = $('#helloTitle').html();
    // alert(helloTitle);
    //
    //Update the jQuery code to select and alert a different id.
    // let bodyContent = $('#bodyContent').html();
    // alert(bodyContent);
    //
    //Use the same id on 2 elements. How does this change the jQuery selection?
    // //if used as a duplicate, only the first id will register
    // let items = $('#item').html();
    // alert(items);
    //     Remove the duplicate id. Each id should be unique on that page.

    //     Class Selectors

    //     Update your code so that at least 3 different elements have the same class named codeup.
    //
    //     Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
    // $('.codeup').css('border-style', 'solid');
    // $('.codeup').css('border-width', '1px');
    // $('.codeup').css('border-color', 'red');
    //     Remove the class from one of the elements. Refresh and test that the border has been removed.
    //
    //     Give another element an id of codeup. Does this element get a border now?
    //
    //     Element Selectors
    //
    // Remove your custom jQuery code from previous exercises.
    //
    // //     Using jQuery, set the font-size of all li elements to 20px.
    // $('li').css('font-size', '20px');
    // //
    // //     Craft selectors that highlight all the h1, p, and li elements.
    // $('h1').css('background-color', 'yellow');
    // $('p').css('background-color', 'yellow');
    // $('li').css('background-color', 'yellow');
    // //
    // //     Create a jQuery statement to alert the contents of your h1 element(s).
    // let h1Element = $('h1').html();
    // alert(h1Element);
    // //
    // //     Multiple Selectors
    // //
    // // Combine your selectors that highlight all the h1, p, and li elements.
    // $('h1, p, li').css('background-color', 'yellow');
    $('h1').click(function() {
        $(this).css('background-color', 'red');
    });
    $('p').dblclick(function(e) {
        $(this).css('font-size', '18px');
    });
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );
});