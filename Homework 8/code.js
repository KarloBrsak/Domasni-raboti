window.onload = function(){


    async function getPlanets(){
        try{
            const result = await fetch("https://swapi.dev/api/planets")
            const data = await result.json()
            const array = data.results
            const filteredArray = array.map(({name, climate, terrain, population})=>({
                name,
                climate,
                terrain,
                population

            }))

            
        

        let table = document.createElement("table")
        let thead = document.createElement("thead")
        let tbody = document.createElement("tbody")

        let headerRow = document.createElement("tr")
        for (key in filteredArray[0]){
            th = document.createElement("th")
            th.innerHTML = key
            headerRow.appendChild(th)
        }

        thead.appendChild(headerRow)
        table.appendChild(thead)

        filteredArray.forEach((element)=>{
            tr = document.createElement("tr")
            for (key in element){
                td = document.createElement("td")
                td.innerHTML = element[key]
                tr.appendChild(td)

            }

            tbody.appendChild(tr)
        })

        
        table.style.fontWeight = "bold"
        tbody.style.backgroundColor = "pink"
        thead.style.backgroundColor = "rgb(162,228,184)"
        table.style.border = "1px solid black"

        table.appendChild(tbody)
        document.body.appendChild(table)
    
    
    }catch(error){
        console.log(error)
    }
}

 
getPlanets()





}