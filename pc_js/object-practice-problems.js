
// Write a function called findWeapon that accepts a D&D character object and
// returns a string of the name of their weapon

function here(){
}
var playerOne = {
    name: "Murder Hobo",
    class: "Barbarian",
    inventory: [
        {
            itemName: "Health Potion",
            itemType: "Potion"
        },
        {
            itemName: "Deck of many things",
            itemType: "Bad idea"
        },
        {
            itemName: "Great Axe",
            itemType: "Weapon"
        }
    ]
}
var playerTwo = {
    name: "Min Max",
    class: "Fighter",
    inventory: [
        {
            itemName: "Long sword",
            itemType: "Weapon"
        },
        {
            itemName: "Ration",
            itemType: "Annoying thing to track"
        },
        {
            itemName: "Elephant",
            itemType: "Mount"
        }
    ]
}
var playerThree = {
    name: "Rules Lawyer",
    class: "Wizard",
    inventory: [
        {
            itemName: "Rat",
            itemType: "Friend"
        },
        {
            itemName: "Peasant rail gun",
            itemType: "Weapon"
        },
        {
            itemName: "Pointy Hat",
            itemType: "Clothing"
        }
    ]
}
console.log(findWeapon(playerOne));
console.log(findWeapon(playerTwo));
console.log(findWeapon(playerThree));

// Write a function called findLargest that accepts an array of rectangle objects
// and returns the rectangle object that has the largest area

function findLargest(input) {
    const high = input.reduce(function(a, b) {
        if ((a.height * a.width) > (b.height * b.width)) {
            return a;
        } else {
            return b;
        }
    });
    return high;
}

var rectanglesOne = [
    {height: 3, width: 7, color: "blue"},
    {height: 13, width: 4, color: "pink"},
    {height: 40, width: 18, color: "purple"}
    ]

var rectanglesTwo = [
    {height: 10, width: 10, color: "yellow"},
    {height: 88, width: 7, color: "red"},
    {height: 5, width: 6, color: "green"}
    ]

console.log(findLargest(rectanglesOne))
console.log(findLargest(rectanglesTwo))