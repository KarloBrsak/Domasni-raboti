
// Class 1 - Games

class Game{
    constructor(name, genre, maxplayers, length, difficulty){
        this.name = name
        this.genre = genre
        this.maxplayers = maxplayers
        this.length = length
        this.difficulty = difficulty
    }

    gameDescription(){
        console.log(`${this.name} is an ${this.genre} game, it can be played with ${this.maxplayers} player/s, it lasts around ${this.length} and is a ${this.difficulty} game.`)
    }

    gamePlayers(){
        console.log(`${this.name} can be played with up to ${this.maxplayers} player/s.`)
    }




}

class eSportGame extends Game{
    constructor(name, genre, maxplayers, cashprize){
        super(name, genre, maxplayers)
        this.cashprize = cashprize
    }
    eSportGameDescription(){
        console.log(`${this.name} is a ${this.genre} game which is played with ${this.maxplayers} players, and the tournament cash prize is ${this.cashprize}`)
    }
}    

class casualGame extends Game{
    constructor(name, genre, maxplayers, recommendedage){
        super(name, genre, maxplayers)
        this.recommendedage = recommendedage
    }
    casualGameDescription(){
        console.log(`${this.name} is a ${this.genre} game in which you can play as a team of ${this.maxplayers} farmers, and is recommended for ages ${this.recommendedage}.`)
    }

}


newGame = new Game ("Outer Wilds", "Exploration", 1, "10 hours", "complex")
newESport = new eSportGame("Dota 2", "MOBA", 10, "$10.000.000")
newCasualGame = new casualGame ("Stardew Valley", "Farming/Simulation", 4, "6+" )


newGame.gameDescription()
newGame.gamePlayers()
newESport.eSportGameDescription()
newESport.gamePlayers()
newCasualGame.casualGameDescription()


// Class 2 - Animals

class Animal{
    constructor(name, species, weight, habitat, lifespan){
        this.name = name
        this.species = species
        this.weight = weight
        this.habitat = habitat
        this.lifespan = lifespan
    }

    animalInformation(){
        console.log(`The ${this.name} is a type of ${this.species}. They weigh approximately ${this.weight}, live in ${this.habitat} and have a lifespan of ${this.lifespan}.`)
    }
}

class Bird extends Animal{
    constructor(name, weight, habitat, lifespan, wingspan, feathercolor, flyingspeed){
        super(name, null, weight, habitat, lifespan)
        this.wingspan = wingspan
        this.feathercolor = feathercolor
        this.flyingspeed = flyingspeed
    }
    
    birdInformation(){
        console.log(`The ${this.name} weighs around ${this.weight}, they live in ${this.habitat}, and have a lifespan of ${this.lifespan}. Their wings span ${this.wingspan}, and their feathers are ${this.feathercolor}.`)
    }
    birdSpeed(){
        console.log(`With its wingspan of ${this.wingspan}, the ${this.name} can reach speeds of up to ${this.flyingspeed}.`)
    }
}

class DomesticAnimal extends Animal{
    constructor (name, species, lifespan, behavior, children){
        super(name, species, null, null, lifespan)
        this.behavior = behavior
        this.children = children
    }
    
    DomesticAnimalInformation(){
        console.log(`The ${this.name} is a type of ${this.species} which lives around ${this.lifespan}. They have an ${this.behavior} personality and are ${this.children} for families with children.`)

    }
    
}

bear = new Animal("giant panda", "bear", "100 kilograms", "mountain ranges", "20 years")
goldenEagle = new Bird("golden eagle", "6 kilograms", "open mountains, foothills, plains", "30 years", "2 meters", "brown", "50 km/h")
pitBull = new DomesticAnimal("pit bull", "dog", "8-15 years", "aggressive", "not recommended")

bear.animalInformation()
goldenEagle.birdInformation()
goldenEagle.birdSpeed()
pitBull.DomesticAnimalInformation()


// Class 3

class Device{
    constructor(model, type, year, price){
        this.model = model
        this.type = type
        this.year = year
        this.price = price
    }

    

    deviceInformation(){
        console.log(`The ${this.model} is a type of ${this.type}. It was launched in ${this.year} and it sells for ${this.price}`)
    }
}

class Phone extends Device{
    constructor(model, year, price, screensize, memory){
        super(model, null, year, price)
        this.screensize = screensize
        this.memory = memory
    }
   
    phoneInformation(){
        console.log(`The ${this.model} was released in ${this.year} and sells for ${this.price}. It boasts an impressive ${this.screensize} display, and has a memory of ${this.memory}.`)
    }
}

class Laptop extends Device{
    constructor(model, year, price, type, screensize, memory, gpu){
        super(model, null, year, price)
        this.type = type
        this.screensize = screensize
        this.memory = memory
        this.gpu = gpu
    }

    laptopInformation(){
        console.log(`The ${this.year} ${this.model}, currently selling for ${this.price} is a ${this.type} laptop. Its screen is ${this.screensize}, has a memory of ${this.memory}, and an ${this.gpu} graphics card.`)
    }
}

ps5 = new Device ("PS5", "gaming console", 2020, "$500")
iPhone15Pro = new Phone ("iPhone 15 Pro", 2023, "$1000", "6.12''", "256/512/1024 GB")
alienwareM18 = new Laptop (2023, "Dell Alienware M18", "$1700", "gaming", "18''", "1 TB", "Nvidia 4080")

ps5.deviceInformation()
iPhone15Pro.phoneInformation()
alienwareM18.laptopInformation()