
let tasks = []
// variables
let add = document.getElementById("addbut")
let deletion = document.getElementById("deletebut")
let done = document.getElementById("donebut")
let userInput = document.getElementById("inputbox")
let ordered = document.getElementById("ordered")

// functions
const addFunc = function () {
    if (userInput.value === "") {
        return
    } else {
        tasks.push(userInput.value) 
        let listItems = document.createElement('li')
        listItems.className = "items"
        listItems.textContent = userInput.value
        ordered.appendChild(listItems)
        userInput.value = ""
    }
}

const deleteFunc = function () {
    let index = tasks.indexOf(userInput.value)
    if (index === -1) {
        return
    } else {
        tasks.splice(index, 1)
        let allItems = document.querySelectorAll("li")
        allItems[index].remove()
        userInput.value = ""
    }   
}
    
// eventListeners
add.addEventListener("click", addFunc)
deletion.addEventListener("click", deleteFunc)
