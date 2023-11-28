window.onload = function() {

const registerButton = document.querySelector("#button")

registerButton.addEventListener("click", () => {
    let username = document.getElementById("username").value
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let address = document.getElementById("address").value
    let phonenumber = document.getElementById("phone-number").value
    
    console.log(`Username is ${username}`)
    console.log(`First name is ${firstName}`)
    console.log(`Last name is ${lastName}`)
    console.log(`E-mail is ${email}`)
    console.log(`Password is ${password}`)
    console.log(`Address is ${address}`)
    console.log(`Phone number is ${phonenumber}`)
    
    
})

}