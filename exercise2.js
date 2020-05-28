//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...
let i = 0;
while(i < 10){
    console.log(" the value of i in the loop is : " + i);
    i++;
}


/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...
function multiply(var1, var2){
    return var1 * var2;
}
function add(var1, var2){
    return var1 + var2;
}
function divide(var1, var2){
    return var1 / var2;
}
function square(var1){
    return var1 * var1;
}
let answer = add(30, 2);
answer = multiply(answer, 20);
answer = divide(answer, square(10))
console.log(answer);


/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""
const twenty = 20;
const zeroInt = 0;
const zeroString = "zero";
const zero = 20;
const nullValue = null;
const zeroChar = "0";
const emptyStringInverted = !"";
const emptyBrackets = {};
const helloTEKcamp = () => {console.log("hello TEKcamp!")};
const hundredTwentyFive = 125;
const undefinedVar = undefined;
const emptyString = "";
if (twenty){
    console.log(`${twenty} is truthy because it is a nonzero integer.`);
} else{
    console.log(`${twenty} is falsy.`);
}
if (zeroInt){
    console.log(`${zeroInt} is truthy.`);
} else{
    console.log(`${zeroInt} is falsy because it is zero.`);
}
if (zeroString){
    console.log(`${zeroString} is truthy because it is a nonempty string.`);
} else{
    console.log(`${zeroString} is falsy.`);
}
if (zero){
    console.log(`${zero} is truthy because it is a nonzero integer.`);
} else{
    console.log(`${zero} is falsy.`);
}
if (nullValue){
    console.log(`${nullValue} is truthy.`);
} else{
    console.log(`${nullValue} is falsy because it is a null value.`);
}
if (zeroChar){
    console.log(`${zeroChar} is truthy because it is a nonempty string.`);
} else{
    console.log(`${zeroChar} is falsy.`);
}
if (emptyStringInverted){
    console.log(`${emptyStringInverted} is truthy because it is the inverse of an empty string.`);
} else{
    console.log(`${emptyStringInverted} is falsy.`);
}
if (emptyBrackets){
    console.log(`${emptyBrackets} is truthy because it is an object.`);
} else{
    console.log(`${emptyBrackets} is falsy.`);
}
if (helloTEKcamp){
    console.log(`${helloTEKcamp} is truthy because it is a function.`);
} else{
    console.log(`${helloTEKcamp} is falsy.`);
}
if (hundredTwentyFive){
    console.log(`${hundredTwentyFive} is truthy because it is a nonzero integer.`);
} else{
    console.log(`${hundredTwentyFive} is falsy.`);
}
if (undefinedVar){
    console.log(`${undefinedVar} is truthy.`);
} else{
    console.log(`${undefinedVar} is falsy because it is undefined.`);
}
if (emptyString){
    console.log(`${emptyString} is truthy.`);
} else{
    console.log(`${emptyString} is falsy because it is an empty string.`);
}


/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!");
} else {
    console.log("It's a weekend!");
}

switch(day){
    case "monday":
        console.log("we got a long week ahead of us...");
        break;
    case "tuesday":
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case "wednesday":
        console.log("We are smack dab in the middle of the week");
        break;
    case "thursday":
        console.log("Thursday night... the mood is right");
        break;
    case "friday":
        console.log("TGIF.  Friday truly is the best day of the week!");
        break;
    default:
        console.log("It's a weekend!");
}


/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}

(age > 21) ? console.log("adult") : console.log("minor");

(age > 13 && age < 19) ? console.log('teen') : console.log("not a teenager");

(age > 65) ? console.log("retired") : console.log("still working...");


/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...
const stupid = {
    name: 'Kevin Keesee',
    age: 23,
    gender: 'Male',
    hobbies: ["Video Games", "PC Building", "Music Theory"],
    profession: 'Web design',
    education: 'High school diploma',

    learn: function(){
        console.log(this.name);
    },
    explainProfession: function(){
        console.log(this.profession);
    }
}


/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...
const myPC = {
    cpu: "Ryzen 7 3700X",
    gpu: "RTX 2060 Super",
    ram: "32gb 3600mhz rgb",
    ssd: "Intel 660p 2TB",

    benchmark: function(){
        console.log("Over 9000 in Time Spy!");
    }
}


/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...
function favoriteDataTypes(){
    console.log("I like the " + typeof "a string" + " because they're the reason we can code easier than Assembly.");
    console.log("I like the " + typeof true + " because it's powerful and simple and versatile.");
    console.log("I like the " + typeof 42 + " because math is a vital part of programming logic outside of the scope of a simple binary gate.");
}


/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...


