console.log("Active")

//GETTER
let form = document.getElementById("submit")
let rawInput = document.getElementById("taskInput")

let itemHolder = document.getElementById("itemHolder")
let item = document.getElementById("taskItem", "taskItem1") //Can we add an array??
let textContent = document.getElementById("text")


let tickBox = document.getElementById("tickBox", "tickBox1")
let tickCSS = document.getElementById("tick", "tick1") //Props need rid

let crossBox = document.getElementById("crossBox", "crossBox1")
let crossCSS = document.getElementById("cross", "cross1")



//COUNTERS
let textContentCounter = -1
let itemCounter = 0
let tickCounter = 1
let crossCounter = 1

//OBJECTS 
const textArray = [] //Save??


//LISTENERS 
const submissionListener = form.addEventListener("submit", submission, false)

const tickBoxListener = tickBox.addEventListener("click", tick, false)

const remover = crossBox.addEventListener("click", removeFunct, false)


//FUNCTIONS
function submission(eve) {
    //Need an if statement to check for content

    eve.preventDefault();
    textContentCounter += 1

    const textString = rawInput.value.toString()
    let textThrow = textString.trim()
    textArray.push(textThrow)
    console.log(textArray)
    rawInput.value = ""

    itemMaker()
    return textThrow //Save to a database or remove this line?????? Is this function too big? 

}

function tick(eve) {
    tickCounter += 1
    console.log(tickCounter)
    if (tickCounter % 2 === 0) {
        tickCSS.style.opacity = "100%"
        textContent.style.textDecoration = "line-through"
    }
    else {
        tickCSS.style.opacity = "0%"
        textContent.style.textDecoration = "none"
    }
}

function removeFunct(eve) {
    console.log("Cross clicked!")
    item.style.display = "none"
}

function itemMaker(text) {
    itemCounter += 1
    const newItem = document.getElementById("taskItem1")
    newItem.style.display = "flex"
    console.log(textArray[textContentCounter])
    return
}