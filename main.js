console.log("Active")

//GETTER
let form = document.getElementById("submit")
let rawInput = document.getElementById("taskInput")

let itemHolder = document.getElementById("itemHolder")
let item = document.getElementById("taskItem") //Can we add an array internal getters???
let textContent = document.getElementById("text")


let tickBox = document.getElementById("tickBox")
let tickCSS = document.getElementById("tick") //Props need rid

let crossBox = document.getElementById("crossBox")
let crossCSS = document.getElementById("cross")



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

    if (textContentCounter === 0) {
        itemMakerOne()
    }
    if (textContentCounter === 1) {
        itemMakerTwo()
    }

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

function itemMakerOne() {
    itemCounter += 1
    const newItem = document.getElementById("taskItem1")
    newItem.style.display = "flex"

    const text = document.getElementById("textOne")
    let textContent = textArray[textContentCounter]
    text.textContent = `${textContent}`

    return
}

function itemMakerTwo() {
    itemCounter += 1
    const newItem = document.getElementById("taskItem2")
    newItem.style.display = "flex"
    console.log(textArray[textContentCounter])

    const text = document.getElementById("textTwo")
    let textContent = textArray[textContentCounter]
    text.textContent = `${textContent}`

    return
}