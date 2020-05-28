//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 
//                            ^
//                            |
//                    (see me after class) -Kevin

//your code...
function convertToCels(){
    let temperature = prompt("Enter the temperature in Fahrenheit:");
    let celsTemp = (temperature - 32) * 5 / 9;
    alert("The temperture is " + celsTemp.toFixed(2) + " degrees Celsius.");
}

function convertToFahr(){
    let temperature = prompt("Enter the temperature in Celsius:");
    let fahrTemp = (temperature * 9 / 5) + 32;
    alert("The temperture is " + fahrTemp.toFixed(2) + " degrees Fahrenheit.");
}


/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...
function canVote(){
    let age = prompt("Enter the person's age:");
    if (age >= 18){
        console.log("This person may vote in all 50 states, and in primary elections and caucuses.");
    } else if (age == 17) {
        console.log("This person may vote in primary elections and caucuses, but only if they will be 18 by election day and in the states of Colorado, Connecticut, Delaware, Illinois, Indiana, Kentucky, Maine, Maryland, Mississippi, Nebraska, New Mexico, North Carolina, Ohio, South Carolina, Virginia, Vermont, and West Virginia.  They may also participate in a presidential caucus in Iowa, Minnesota, and Nevada, but for no other offices.");
    } else if (age == 16) {
        console.log("This person may vote in the City of Takoma Park, Maryland; Hyattsville, Maryland; Greenbelt, Maryland; and Berekely, California for local elections and referendums.");
    } else{
        console.log("This person cannot vote yet.");
    }
}


/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

//your code...
function stringToArray(toSplit){
    return toSplit.split(" ");
}

let sentence = "The five boxing wizards jump quickly.";
let words = stringToArray(sentence);
console.log(words[0]);
console.log(words[1]);
console.log(words[2]);
console.log(words.join(" "));


/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...
function reverseNumber(){
    let num = prompt("Enter your number:");
    let numArray = num.split("");
    numArray = numArray.reverse();
    num = numArray.join("");
    alert("Your number reversed is " + num);
}


/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...
function createCarObj(){
    let car = {
        make: "none",
        model: "none",
        year: 9999,
        color: "none"
    }

    car.year = prompt("Enter the car's year:");
    car.color = prompt("Enter the car's color:");
    car.make = prompt("Enter the car's make:");
    car.model = prompt("Enter the car's model:");

    return car;
}


/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...
function oddOrEven(){
    for(let i = 0; i < 16; i++){
        if (i % 2 == 1){
            console.log(i + " is odd.");
        } else{
            console.log(i + " is even.");
        }
    }
}


/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
function threeAndFive(){
    for(let i = 1; i <= 100; i++){
        if(i % 15 == 0){
            console.log("TEKcamp");
        } else if(i % 5 == 0){
            console.log("camp");
        } else if(i % 3 == 0){
            console.log("TEK");
        }
    }
}


/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...
function threes(){
    for(let i = 0; i < nums.length; i++){
        if(i % 3 == 0){
            console.log(nums[i]);
        }
    }
}


// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
function lastFood(){
    let school = foodArray[foodArray.length - 1];
    console.log(school);
}

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".
function arraySentence(){
    for (let i = 0; i < foodArray.length; i++){
        if(typeof foodArray[i] != "string"){
            console.log(foodArray[i].school + " is " + adjectiveArray[i]);
        } else if (foodArray[i].endsWith("s")){
            console.log(foodArray[i] + " are " + adjectiveArray[i]);
        } else {
            console.log(foodArray[i] + " is " + adjectiveArray[i]);
        }
    }
}


/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
let add = function(var1, var2){
    return var1 + var2;
}
let subtract = function(var1, var2){
    return var1 - var2;
}
let multiply = function(var1, var2){
    return var1 * var2;
}
let divide = function(var1, var2){
    return var1 / var2;
}
const operations = [add, subtract, multiply, divide];
function doMath() {
    let num1 = Math.floor((Math.random() * 9) + 1);
    let num2 = Math.floor((Math.random() * 9) + 1);
    let select = Math.floor(Math.random() * 3);
    switch (select){
        case 0:
            console.log(num1 + " plus " + num2 + " equals " + operations[select](num1, num2));
            break;
        case 1:
            console.log(num1 + " minus " + num2 + " equals " + operations[select](num1, num2));
            break;
        case 2:
            console.log(num1 + " times " + num2 + " equals " + operations[select](num1, num2));
            break;
        case 3:
            console.log(num1 + " divided by " + num2 + " equals " + operations[select](num1, num2));
    }
}