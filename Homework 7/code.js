window.onload = function(){

let books = [
    {Title: "The Great Gatsby", Author: "F. Scott Fitzgerald", Year: "1925"},
    {Title: "The Lord of the Rings", Author: "J.R.R. Tolkien", Year: "1937"},
    {Title: "To Kill a Mockingbird", Author: "Harper Lee", Year: "1960"},
    {Title: "The Catcher in the Rye", Author: "J. D. Salinger", Year: "1951"},
    {Title: "War and Peace", Author: "Leo Tolstoy", Year: "1867"},
    {Title: "Don Quixote", Author: "Miguel de Cervantes", Year: "1615"}
    
]

function createTable(array, caption){
    let table = document.createElement("table")
    let tableCaption = document.createElement("caption")
    tableCaption.innerText = caption
    table.appendChild(tableCaption)

    let firstRowObject = array[0]
    let firstRow = document.createElement("tr")

    for(key in firstRowObject){
        let th = document.createElement("th")
        th.innerText = key
        firstRow.appendChild(th)
    }

    table.appendChild(firstRow)

    for(element of array){
        let tr = document.createElement("tr")
        for(key in firstRowObject){
            let td = document.createElement("td")
            td.innerText = element[key]
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

    table.setAttribute("border", "1px")
    document.body.appendChild(table)
}

createTable(books, "Books")


function removeRow(index) {
    let table = document.querySelector("table");
    table.deleteRow(index + 1)

}

removeRow(4)





}

