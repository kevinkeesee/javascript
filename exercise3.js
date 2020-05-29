//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 

//your code...
function stringIsEmpty(var1){
    if (var1){
        return false;
    } else {
        return true;
    }
}


/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 

//your code...
let replaceWord = "Is that a Jojo reference?";
replaceWord = replaceWord.replace("Jojo", "Loss");


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 

//your code...
squareArray = () => {
    let nums = [1, 2, 3, 4, 5];

    return nums.map((num) => num * num);
}


/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.

//your code...
let numbers2 = [1, 3, 5, 7, 9, 1, 3, 5];
greaterThanThree = () => {
    comparing = (val) => val > 3;

    return numbers2.filter(comparing);
}


/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 

//your code...
let numbers3 = [4, 7, 2, 1, 8];
arraySum = () => {
    function myFunc(total, num) {
      return total + num;
    }
  
    return numbers3.reduce(myFunc);
}


/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  

//your code...
strandTranspose = (fourChars) => {
    fourChars = fourChars.split("");
    [fourChars[0], fourChars[1]] = [fourChars[1], fourChars[0]];
    [fourChars[2], fourChars[3]] = [fourChars[3], fourChars[2]];
    return fourChars;
}


/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

function maxNumber(numArray) {
    //your code...

    // remove empty values
    numArray = numArray.filter(notempty => notempty);

    // remove non-objects
    numArray = numArray.filter(n => typeof n != 'object');

    // remove booleans
    numArray = numArray.filter(p => typeof p != 'boolean');

    // convert strings that are numbers to the number type
    const numStrings = ["zero", "one", "two", "three"];
    numArray = numArray.map(nb => numStrings.includes(nb) ? numStrings.indexOf(nb) : nb)

    // remove remaining strings
    numArray = numArray.filter(n => typeof n != 'string');

    return Math.max(...numArray);
}

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers) {
    //your code...
    return numbers.sort((first, next) => next - first);
};


/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
//mapObj.set({company: "TEKsystems"},"object");


//console.log(mapObj.has({company: "TEKsystems"}));  
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...
console.log("mapObj is set up incorrectly, the .has function searches for the key only and an undeclared object isn't stored in memory the same way.");

const obj = {company: "TEKsystems"};
mapObj.set(obj, "object");

console.log(mapObj.has(obj));  //returns true


//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
mapObj.set("key1", 42);
mapObj.set("key2", true);
mapObj.set("key3", ["an", "array"])
mapObj.set("key4", {name: "An object"});

let dataTypeArray = Array.from(mapObj.values());
let stringArray = ["", "", "", "", ""];
for (let i = 0; i < dataTypeArray.length; i++){
    stringArray[i] = typeof dataTypeArray[i];
}

/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.

// I already made a function for this in problem 7.b, now's the best time to use it
sortNums(ones);

/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

// There isn't a Udemy video this week about callback functions, so this is technically a bonus assignment. -Kevin
function performer(cb) {
    //code goes here
}


/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
