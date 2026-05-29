// let body = document.body
// let tasks = [] ;

// // Adding task
// let addtask = document.getElementById("taskbutton") ;
// addtask.addEventListener("click", function () {
//     let userInput = document.getElementById("inputfield").value ;
//         if (userInput === "") {
//             return
//             alert("type again");
//         } else {
//             tasks.push(userInput);
//             document.getElementById("inputfield").value = "" ;
//             let orderedList = document.createElement("ol")
//             let listItems = document.createElement("li")
//             listItems.textContent = userInput
//             orderedList.append(listItems)
//             // orderedList.textContent = listItems
//             body.append(orderedList)
//         } 
// })

// // checking available tasks
// // let checktask = document.getElementById("allbutton") ;
// // checktask.addEventListener("click", () => {
// //     alert(tasks) ;
// // } )

// // deleting task
// let deletetask = document.getElementById("deletebutton") ;
// deletetask.addEventListener("click", function() { 
//     let deleteinput = document.getElementById("deleteinput").value
//     let index = tasks.indexOf(deleteinput) ;
//     if (index === -1) {
//         alert("Task not found, please input a valid task to delete.")
//     } else {
//         tasks.splice(index, 1)
//         document.getElementById("deleteinput").value = "" ;
//     }
// })


let tasks = []

// variables
let add = document.getElementById("addbut")
let deletion = document.getElementById("deletebut")
let done = document.getElementById("donebut")
let userInput = document.getElementById("inputbox")
let ordered = document.getElementById("ordered")


// functions
addFunc = function () {
    if (userInput.value === "") {
        return
    } else {
        tasks.push(userInput.value) 
        let listItems = document.createElement('li')
        listItems.textContent = userInput.value
        ordered.appendChild(listItems)
        userInput.value = ""
    }
}

// adding a task
add.addEventListener("click", addFunc)