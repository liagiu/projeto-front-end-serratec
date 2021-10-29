const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
e.preventDefault();

let username = document.getElementById("userInput").value;
let password = document.getElementById("userPassword").value;
console.log(username, password);

let data = {
    username,
    password
}

let convertData = JSON.stringify(data);

localStorage.setItem("lead", convertData);

})
