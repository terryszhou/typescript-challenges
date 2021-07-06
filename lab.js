console.clear();
/* TS Algorithms Lab */
/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(numberString) => '7'
// console.log(realNumber) => 32
var numberString = '42';
var realNumber = 7;
// todo: swap the values in the varaibles and log the results
// an intermidiaary var
var holderVar = String(realNumber);
realNumber = Number(numberString);
numberString = holderVar;
console.log(numberString, typeof numberString);
console.log(realNumber, typeof realNumber);
/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix of strings of numbers and actual numbers
// ex: [10, '34', 3, '17']
// 2. write a function that accepts an array as a parameter, loops over it and converts all the 
// strings to numbers. the function should return a new array of only numbers
// ex: stringToNum([10, '34', 3, '17']) => [10, 34, 3, 17]
// Todo write the mixed array of strings and numbers
var mixedArray = [10, '34', 3, '17'];
// Todo write a function to convert the mixed array to an array of only numbers
// map solve
// const stringToNum = (arr: (number | string)[]): number[] => {
//   return arr.map( element => Number(element))
// }
// forEach solve
var stringToNum = function (arr) {
    var newArr = [];
    arr.forEach(function (item) {
        if (typeof (item) === 'string') {
            newArr.push(parseInt(item));
        }
        else {
            newArr.push(item);
        }
    });
    return newArr;
};
console.log(stringToNum(mixedArray));
var seattle = ['Seattle', 47.6, 122.2];
var spokane = ['Spokane', 47.7, 117.4];
// 🚨 uncomment this function to test your solution 🚨
function printCityData(city) {
    console.log(city[0] + " is at Lat: " + city[1] + ", Long: " + city[2]);
}
printCityData(seattle);
printCityData(spokane);
// Todo - write area function here
function area(s) {
    if (s.kind === "square") {
        return s.width * s.width;
    }
    else if (s.kind === "rectangle") {
        return s.width * s.height;
    }
    else if (s.kind === "circle") {
        return Math.PI * (Math.pow(s.radius, 2));
    }
    else {
        return -1;
    }
}
