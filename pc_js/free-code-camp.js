//33.//
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray;
//*****************************************//
//34.//
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line
//*****************************************//
//35.//
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
//*****************************************//
//36.//
var myList = [["Chocolate Bar", 15], ["string2", 1], ["string3", 2],
    ["string4", 3], ["string5", 4]];
//*****************************************//
//37.//
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();
//*****************************************//
//38.//
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(1, 2);
//*****************************************//
//39.//
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
//*****************************************//
//40.//
function myLocalScope() {
    'use strict';

    // Only change code below this line
    var myVar
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
//*****************************************//
//41.//
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    var outerWear = "sweater";


    // Only change code above this line
    return outerWear;
}

myOutfit();
//*****************************************//
//42.//
function timesFive(input) {
    return input * 5;
}
//*****************************************//
//43.//
// Setup
var sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum += 5;
}

// Only change code above this line

addThree();
addFive();
//*****************************************//
//44.//
// Setup
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
//*****************************************//
//45.//
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    var remove = arr.shift();
    return remove;
    // Only change code above this line


}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//*****************************************//
//46.//
function welcomeToBooleans() {

    // Only change code below this line

    return true; // Change this line

    // Only change code above this line
}
//*****************************************//
//47.//
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue === true) {
        return "Yes, that was true";
    } else {
        return "No, that was false";
    }

    // Only change code above this line

}
//*****************************************//
//48.//
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);
//*****************************************//
//49.//
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);
//*****************************************//
//50.//
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");
//*****************************************//
//51.//
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);
//*****************************************//
//52.//
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);
//*****************************************//
//53.//
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    } else {

    }
    return "10 or Under";
}

testGreaterThan(10);
//*****************************************//
//54.//
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    } else {

    }

    return "Less than 10";
}

testGreaterOrEqual(10);
//*****************************************//
//55.//
function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);
//*****************************************//
//56.//
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);
//*****************************************//
//57.//
function testLogicalAnd(val) {
    // Only change code below this line
    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);
//*****************************************//
//58.//
function testLogicalOr(val) {
    // Only change code below this line

    if (val > 20 || val < 10) {
        return "Outside";
    } else {
    }
    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);
//*****************************************//
//59.//
function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    // Only change code above this line
    return result;
}

testElse(4);
//*****************************************//
//60.//
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    } else {

    }
    return "Between 5 and 10";
}

testElseIf(7);
//*****************************************//
//61.//
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);
//*****************************************//
//62.//
function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny";
    } else if (num < 10)  {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }

    return "Change Me";
    // Only change code above this line
}

testSize(7);
//*****************************************//
//63.//
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par -1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6];
    }
    // Only change code above this line
}

golfScore(5, 4);
//*****************************************//
//64.//
function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }


    // Only change code above this line
    return answer;
}

caseInSwitch(1);
//*****************************************//
//65.//
function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }


    // Only change code above this line
    return answer;
}

switchOfStuff(1);
//*****************************************//
//66.//
function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);
//*****************************************//
//67.//
function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);
//*****************************************//
//68.//
function isLess(a, b) {
    // Only change code below this line
    return  a < b;
    // Only change code above this line
}

isLess(10, 15);
//*****************************************//
//69.//
// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0) {
        return undefined;
    } else if (b < 0) {
        return undefined;
    }

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
//*****************************************//
//70.//
var count = 0;

function cc(card) {
    // Only change code below this line
    var regex = /[JQKA]/;
    if (card > 1 && card < 7) {
        count++;
    } else if (card === 10 || regex.test(card)) {
        count--;
    }

    if (count > 0) return count + " Bet";
    return count + " Hold";


    return "Change Me";
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
//*****************************************//
//71.//
var myDog = {
“name”: “Joe”,
“legs”: 4,
“tails”: 1,
“friends”:[“many”, “Ade”]

};


//*****************************************//
//72.//
