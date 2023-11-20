// Switch

// Season

let month = "January"
let season 

switch (month) {
    case "December":
    case "January":
    case "February":
        season = "Winter"
        break
    case "March":
    case "April":
    case "May":
        season = "Spring"
        break
    case "June":
    case "July":
    case "August":
        season = "Summer"
        break
    case "September":
    case "October":
    case "November":
        season = "Autumn"
        break
}

console.log (`It's ${season}`)

// What day is it?

let day = 8;
let selection;

switch (day){
    case 1:
        selection = "It's Monday"
        break
    case 2:
        selection = "It's Tuesday"
        break
    case 3:
        selection = "It's Wednesday"
        break
    case 4:
        selection = "It's Thursday"
        break
    case 5:
        selection = "It's Friday"
        break
    case 6:
        selection = "It's Saturday"
        break
    case 7:
        selection = "It's Sunday"
        break
    default:
        selection = "Enter a valid number!"
}

console.log(selection)

// Menu item

let item = 5;
let food;

switch(item){
    case 1:
        food = "Pizza"
        console.log ("I want a pizza!")
        break
    case 2:
        food = "Burger"
        console.log ("I want a burger!")
        break
    case 3:
        food = "Gyro"
        console.log ("I want a gyro!")
        break
    case 4:
        food = "Soup"
        console.log ("I want a soup!")
        break
    case 5:
        food = "Falafel"
        console.log ("I want a falafel!")
        break
    default:
        food = "Enter a menu item!"
}

// Animal sounds

let animal = "Mouse"

switch (animal){
    case "Dog":
        console.log("Woof")
        break
    case "Cat":
        console.log("Meow")
        break
    case "Cow":
        console.log("Moo")
        break
    case "Mouse":
        console.log("Squeak")
}


// Declare functions

// Hello!

function hello(name){
    console.log(`Hello, ${name}!`)
}

hello("Karlo")


// Addition

function addition(a, b){
    return (a + b)
    
}
console.log(addition(5, 15))

// Multiplication - Arrow function 

let multiplication = (a, b) => console.log(a * b)

multiplication(5, 15)

// Division - Arrow function

let division = (a, b) => a / b;
console.log(division (20, 4))


// Celsius to Fahrenheit - arrow function

let getFahrenheit = (celsius) => console.log(celsius * 2 + 30)

getFahrenheit(40)

// Fahrenheit to Celsius - return

function getCelsius (fahrenheit){
    return ((fahrenheit - 30) / 2)
}

console.log(getCelsius(30))

// Feet to meters

let feetToMeters = (feet) => console.log(feet * 0.3048)
feetToMeters (15)

// Niza - gradovi

let gradovi = ["Skopje", "Prilep", "Bitola", "Ohrid", "Kumanovo"];
console.log(gradovi)

// Niza - drzavi

let drzavi = ["Makedonija", "Srbija", "Bugarija", "Grcija", "Albanija", "SAD", "Francija", "Egipet", "Ukraina", "Anglija"];

console.log(drzavi)