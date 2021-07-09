console.clear();
/* TS Algorithms Lab */
/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(numberString) => '7'
// console.log(realNumber) => 32
var numberString = '7';
var realNumber = 32;
// console.log(numberString)
// console.log(realNumber)
// todo: swap the values in the varaibles and log the results
/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix of strings of numbers and actual numbers
// ex: [10, '34', 3, '17']
// 2. write a function that accepts an array as a parameter, loops over it and converts all the 
// strings to numbers. the function should return a new array of only numbers
// ex: stringToNum([10, '34', 3, '17']) => [10, 34, 3, 17]
// Todo write the mixed array of strings and numbers
var mixedArr = [10, '34', 3, '17'];
// Todo write a function to convert the mixed array to an array of only numbers
var convertArr = mixedArr.map(function (e) {
    if (typeof e === "number") {
        return e;
    }
    else if (typeof e === "string") {
        return parseInt(e);
    }
});
var newYork = {
    0: "New York",
    1: 5,
    2: 5
};
var shanghai = {
    0: "Shanghai",
    1: 10,
    2: 10
};
var seattle = {
    0: "Seattle",
    1: 15,
    2: 15
};
// 🚨 uncomment this function to test your solution 🚨
function printCityData(city) {
    console.log(city[0] + " is at Lat: " + city[1] + ", Long: " + city[2]);
}
printCityData(seattle);
// Todo - write area function here
var findArea = function (shape) {
    if (shape.kind === "square") {
        console.log("The " + shape.kind + "'s area is " + shape.width * shape.width + "!");
    }
    else if (shape.kind === "rectangle") {
        console.log("The " + shape.kind + "'s area is " + shape.width * shape.height + "!");
    }
    else if (shape.kind === "circle") {
        console.log("The " + shape.kind + "'s area is " + 3.14 * (shape.radius * shape.radius) + "!");
    }
};
var circle = {
    kind: "circle",
    radius: 5
};
findArea(circle);
