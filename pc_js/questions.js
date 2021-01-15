let array1 = [1, 4, 6, 7, 9, 10, 6, 3, 44, 3];
let array2 = [4, 9, 6, 5, 10];
let array3 = [3, 7, 1, 44];


function check(arr1, arr2){
    for(var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            return false;
        }
        } return true;
}
console.log(check(array1, array2));
console.log(check(array1, array3));


let sum2 = (a, b) => a + b;

const sayHello2 = (name = "World!") => 'hello ${name}';



// 4. Write a function that translates an input string by replacing each character with a number representing the amount of times that character appears in the string. Then separate each individual number with a different character.

function replaceString(string, dash) {
    let output = "";
    for (let i = 0; i < string.length; i++) {
        let count = 0;
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j]) {
                count++;
            }
        }   output += count + dash;
            count = 0;
    }
    return output.substring(0, output.length -1);
}
console.log(replaceString("hello world", "-"));






