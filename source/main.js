

document.addEventListener('DOMContentLoaded', activate, false)

function activate() {
    const items = localStorage.getItem('tasks')
    const tasksObject = JSON.parse(items)
    const tasks = tasksObject.tasks
    tasks.forEach(task => {
        const li = document.createElement("li")
        li.className = "task-item"
        li.textContent = `${task}`
        li.id = "taskItem"
        itemHolder.append(li)
        const newRemoverButton = document.createElement("button")
        newRemoverButton.className = "remover-button"
        newRemoverButton.id = `removerButton`
        li.append(newRemoverButton)
    })
    toDoList()
} //This way of having a render at the start seemed to best, avoids a weird infinity loop of if statements or aggressively going through the functions?

function toDoList() {


    //GETTERS
    const form = document.getElementById("submit")
    const submitButton = document.getElementById("submitButton")
    let rawInput = document.getElementById("taskInput")
    const itemHolder = document.getElementById("itemHolder")
    const removerButtons = document.querySelectorAll(".remover-button")
    let taskItems = document.querySelectorAll("task-item")

    let itemSelected = null

    let saveArray = []


    //LISTENERS 

    removerButtons.forEach(item => {
        item.addEventListener("click", () => {
            let element = item
            element.parentElement.remove()
            saver() //This will be ran three timess??!! Could be cleaner send this out to an function?
        })
    })

    const submissionListener = form.addEventListener("submit", submission, false)



    //FUNCTIONS

    function submission(eve) {
        eve.preventDefault()
        if (rawInput.value === '') {
            return
        }
        let inputValue = rawInput.value.trim()
        let valueString = String(inputValue)
        itemMaker(valueString)
        rawInput.value = ''
    }


    function itemMaker(arg) {

        const li = document.createElement("li")
        li.className = "task-item"
        li.textContent = `${arg}`
        li.id = "taskItem"
        itemHolder.append(li)

        const newRemoverButton = document.createElement("button")
        newRemoverButton.className = "remover-button"
        newRemoverButton.id = `removerButton`
        li.append(newRemoverButton)

        saver()
    }


    function saver() {
        saveArray = []
        let taskItems = document.querySelectorAll(".task-item")
        taskItems.forEach(item => {
            let element = item
            const parentText = element.textContent
            console.log(parentText)
            saveArray.push(parentText)
        })
        localStorage.clear()
        const myObject = {
            tasks: saveArray
        }
        const jsonSave = JSON.stringify(myObject)
        localStorage.setItem('tasks', jsonSave)
        console.log(jsonSave)
        toDoList()
    }


}