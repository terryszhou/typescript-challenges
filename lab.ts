console.clear()
/* TS Algorithms Lab */

/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(numberString) => '7'
// console.log(realNumber) => 32

let numberString: string = '7'
let realNumber: number = 32
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
let mixedArr = [10, '34', 3, '17']

// Todo write a function to convert the mixed array to an array of only numbers
const convertArr = mixedArr.map(e => {
    if (typeof e === "number") {
        return e
    } else if (typeof e === "string") {
        return parseInt(e)
    }
})

/* --- Problem #3 - Tuple Type --- */
// 1. Create a tuple type named 'cityCoordinate' that has three elements: city name, latitute, and longitude
// 2. Create some cities with lat/lon data and pass them into printCityData;
// uncomment the function to test your solution

// Todo - create the type definition, and some cities
// let cityCoordinate: [string, number, number]
interface cityCoordinate {
    0: string,
    1: number,
    2: number
}

let newYork = {
    0: "New York",
    1: 5,
    2: 5
}

let shanghai = {
    0: "Shanghai",
    1: 10,
    2: 10
}

let seattle = {
    0: "Seattle",
    1: 15,
    2: 15
}

// 🚨 uncomment this function to test your solution 🚨
function printCityData(city: cityCoordinate): void {
    console.log(`${city[0]} is at Lat: ${city[1]}, Long: ${city[2]}`);
}

printCityData(seattle);

/* --- Problem #4 - Interfaces and Union Types --- */
// Given the following interfaces and type declarations...
// 1. Create a union type that is the union of the Square, Rectangle, and Circle interfaces
// 2. Write the area function that: 1. Only takes in your union type as an input 2. Returns the area of the shape
// oh no! math!
// the area of a square is found by multipling the width by the width
// the area of a rectangle is found by multipling the width by the height
// the area of a circle is found by multiplying pi by the radius squared

interface Square {
    kind: 'square',
    width: number,
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number,
}
interface Circle {
    kind: 'circle',
    radius: number,
}

// Todo - Create union type here
type Shapes = Square | Rectangle | Circle

// Todo - write area function here
const findArea = (shape: Shapes): void => {
    if (shape.kind === "square") {
        console.log(`The ${shape.kind}'s area is ${shape.width*shape.width}!`)
    } else if (shape.kind === "rectangle") {
        console.log(`The ${shape.kind}'s area is ${shape.width * shape.height}!`)
    } else if (shape.kind === "circle") {
        console.log(`The ${shape.kind}'s area is ${3.14 * (shape.radius*shape.radius)}!`)
    }
}

let circle = {
    kind: "circle",
    radius: 5
}

findArea(circle)
