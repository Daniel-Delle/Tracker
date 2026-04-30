let tasks = []
let addtask = document.querySelector("button")
addtask.addEventListener("click", function () {
    let userInput = document.getElementById("inputfield").value
        if (userInput === "") {
            alert("type again")
        } else {
            tasks.push(userInput)
            document.getElementById("inputfield").value = ""
            alert(tasks)

        }
    
})

