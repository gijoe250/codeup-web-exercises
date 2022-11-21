let message = myFunction();
console.log(message);
fight("Bill", "Ted");
console.log(isEven(12353466));
console.log(isEven(12323451555));
console.log(isEven(true));
console.log(isEven(false));

function myFunction(){
    let name ="Joe"
    console.log("in the function");
    return "my function is returning";
}

function fight(peep1, peep2){
    console.log(peep1, "and", peep2, "are fighting!");
}

function isEven(num){
    return (num % 2 == 0);
}