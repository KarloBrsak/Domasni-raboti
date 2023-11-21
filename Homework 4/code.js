// City array analysis

let cities = [
    {name: "New York City", population: 8537673},
    {name: "Los Angeles", population: 3980400},
    {name: "Chicago", population: 2716000},
    {name: "Houston", population: 2328000},
    {name: "Phoenix", population: 1680992},
    {name: "Philadelphia", population: 1584138},
    {name: "Atlanta", population: 498044},
    {name: "San Antonio", population: 1547253},
    {name: "San Diego", population: 1425976},
    {name: "Austin", population: 1007371},
    {name: "Dallas", population: 1343573}
   
]


// Sort by population

// Method 1

let sortPopulation = cities.map(cities => cities.population)
console.log(sortPopulation)

// Method 2

cities.sort((a, b) => b.population - a.population)
console.log(cities)



// Three most populated

// Method 1


let najnaseleni = cities.map(cities => cities.population)
console.log(najnaseleni.slice(0, 3))

// Method 2

// Start with A, 1,000,000 +

let findA = cities.find(cities => cities.name.startsWith("A") && cities.population > 1000000)
console.log (findA)

// Average population

let totalPopulation = cities.reduce ((total, city) => total + city.population, 0)
console.log (totalPopulation)

let averagePopulation = totalPopulation/cities.length
console.log (averagePopulation)