"use strict";

// file was made to utilize the respective function
function applyDiscount(price, discount){
    return (price - (price*discount));
}
//return true if even
function isEven(num){
    return (num % 2 == 0);
}
//get random value between min and max
function randomNumber(min, max) {
    return (Math.floor(Math.random() * (max+1 - min)) + min);
}