// FizzBuzz so 3, 5 i 15

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++)
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i)
}

fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(15)

// If Else statements

// Bedtime

let time = 22

if (time => 20){
    console.log("It's bedtime!")
}

// 18+

let age = 66

if(age >= 18 && age <= 65){
    console.log("You may enter")
} else if (age < 18){
    console.log("Too young!")
} else if (age > 65){
    console.log("Go away, grandpa!")
}

// Odd/Even

let number = 55

if (number % 2 === 0){
    console.log ("Even number!")
} else console.log("Odd number!")

// Temperature

let temperature = 11

if (temperature <= 10){
    console.log("It's freezing, take a jacket!")
} else if (temperature > 10 && temperature < 20){
    console.log("It's pretty chilly.")
} else if (temperature >= 20 && temperature < 30){
    console.log("It's pretty warm.");
} else if (temperature >= 30){
    console.log("It's way too hot!")
}


// Matematicki presmetki

a = 5
b = 10
c = 4
d = 8
e = 9
f = 14
g = 32

console.log (a + b + c + d + e + f + g)
console.log (a * b + c / d - e + f * g)
console.log ((a+b) / c *(d + e) - (f + g))
console.log (((g - f) - a*b + f / c) * e)
console.log (g / (a - f) * (c + d) - b - e)