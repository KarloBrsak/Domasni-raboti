// Sekoj neparen broj od 1 do 50

for (let i = 0; i <= 50; i++){
    if (i % 2 === 1)
    console.log(`${i} e neparen broj`)
}

// Sekoj vtor neparen broj od 1 do 100

// Opcija 1

for (let i = 0; i <=100; i+=4){
    console.log(`${i} e neparen broj!`)
}

// Opcija 2

let counter = 0

for (let i = 0; i <= 100; i++){
    if (i % 2 === 1){
        counter++

        if (counter === 2){
            console.log(`${i} e neparen broj!`)
            counter = 0
        }
    }
}
    
