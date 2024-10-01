let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr 
}


let welcomeEl = document.getElementById("welcome-el")

let name = "Quan"
let greeting = "Welcome back! "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name
