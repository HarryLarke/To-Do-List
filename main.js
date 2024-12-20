console.log("Active")

//GETTER
let form = document.getElementById("submit")
let rawInput = document.getElementById("taskInput")

let itemHolder = document.getElementById("itemHolder")
//Can we add an array internal getters??? Same below
let textContent = document.getElementById("text")


let tickBox = document.getElementById("tickBox")
let tickBoxOne = document.getElementById("tickBox1")
let tickBoxTwo = document.getElementById("tickBox2")
let tickBoxThree = document.getElementById("tickBox3")
let tickBoxFour = document.getElementById("tickBox4")
let tickBoxFive = document.getElementById("tickBox5")
let tickBoxSix = document.getElementById("tickBox6")


let crossCSS = document.getElementById("cross")

let crossBox = document.getElementById("crossBox")
let crossBoxOne = document.getElementById("crossBox1")
let crossBoxTwo = document.getElementById("crossBox2")
let crossBoxThree = document.getElementById("crossBox3")
let crossBoxFour = document.getElementById("crossBox4")
let crossBoxFive = document.getElementById("crossBox5")
let crossBoxSix = document.getElementById("crossBox6")

const textOne = document.getElementById("textOne")
const textTwo = document.getElementById("textTwo")
const textThree = document.getElementById("textThree")
const textFour = document.getElementById("textFour")
const textFive = document.getElementById("textFive")
const textSix = document.getElementById("textSix")



//COUNTERS
let textContentCounter = -1
let itemCounter = 0
let tickCounter = 1
let tickCounter1 = 1
let tickCounter2 = 1
let tickCounter3 = 1
let tickCounter4 = 1
let tickCounter5 = 1
let tickCounter6 = 1
let crossCounter = 1

//OBJECTS 
const textArray = [] //Save??


//LISTENERS  
const submissionListener = form.addEventListener("submit", submission, false)

const tickBoxListener = tickBox.addEventListener("click", tick, false)
const tickBoxListenerOne = tickBoxOne.addEventListener("click", tickOne, false)
const tickBoxListenerTwo = tickBoxTwo.addEventListener("click", tickTwo, false)
const tickBoxListenerThree = tickBoxThree.addEventListener("click", tickThree, false)
const tickBoxListenerFour = tickBoxFour.addEventListener("click", tickFour, false)
const tickBoxListenerFive = tickBoxFive.addEventListener("click", tickFive, false)
const tickBoxListenerSix = tickBoxSix.addEventListener("click", tickSix, false)

const remover = crossBox.addEventListener("click", removeFunct, false)
const crossBoxListenerOne = crossBoxOne.addEventListener("click", removeFunctOne, false)
const crossBoxListenerTwo = crossBoxTwo.addEventListener("click", removeFunctTwo, false)
const crossBoxListenerThree = crossBoxThree.addEventListener("click", removeFunctThree, false)
const crossBoxListenerFour = crossBoxFour.addEventListener("click", removeFunctFour, false)
const crossBoxListenerFive = crossBoxFive.addEventListener("click", removeFunctFive, false)
const crossBoxListenerSix = crossBoxSix.addEventListener("click", removeFunctSix, false)


//If statement concern wheteher there is text content in each element which will decide whether or nt they should get filled or not!


//FUNCTIONS
function submission(eve) {
    //Need an if statement to check for content

    eve.preventDefault();
    textContentCounter += 1

    console.log(textContentCounter)
    let textString = rawInput.value
    let toString = String(textString)
    let textThrow = toString.trim()

    /*     textArray.push(textThrow)
        console.log(textArray) */


    if (textOne.textContent === '') {
        itemMakerOne(textThrow)
        rawInput.value = ""
    }
    else if (textTwo.textContent === '') {
        itemMakerTwo(textThrow)
        rawInput.value = ""
    }
    else if (textThree.textContent === '') {
        itemMakerThree(textThrow)
        rawInput.value = ""
    }
    else if (textFour.textContent === '') {
        itemMakerFour(textThrow)
        rawInput.value = ""
    }
    else if (textFive.textContent === '') {
        itemMakerFive(textThrow)
        rawInput.value = ""
    }
    else if (textSix.textContent === '') {
        itemMakerSix(textThrow)
        rawInput.value = ""
    }
    else {
        textContentCounter -= 1
        rawInput.value = ""
        return
    }
}//Save to a database or remove this line?????? Is this function too big? Will also need to save array!



//Tick Functions

function tick(eve) {
    tickCounter += 1
    console.log(tickCounter)
    let tickCSS = document.getElementById("tick") //Props need rid
    if (tickCounter % 2 === 0) {
        tickCSS.style.opacity = "100%"
        textContent.style.textDecoration = "line-through"
    }
    else {
        tickCSS.style.opacity = "0%"
        textContent.style.textDecoration = "none"
    }
}

function tickOne(eve) {
    tickCounter1 += 1

    let tickCSS = document.getElementById("tick1") //Props need rid
    let textContent = document.getElementById("textOne")
    if (tickCounter1 % 2 === 0) {
        tickCSS.style.opacity = "100%"
        textContent.style.textDecoration = "line-through"
    }
    else {
        tickCSS.style.opacity = "0%"
        textContent.style.textDecoration = "none"
    }
}

function tickTwo(eve) {
    tickCounter2 += 1

    let tickCSS = document.getElementById("tick2") //Props need rid
    let textContent = document.getElementById("textTwo")
    if (tickCounter2 % 2 === 0) {
        tickCSS.style.opacity = "100%"
        textContent.style.textDecoration = "line-through"
    }
    else {
        tickCSS.style.opacity = "0%"
        textContent.style.textDecoration = "none"
    }
}
function tickThree(eve) {
    tickCounter3 += 1

    let tickCSS = document.getElementById("tick3") //Props need rid
    let textContent = document.getElementById("textThree")
    if (tickCounter3 % 2 === 0) {
        tickCSS.style.opacity = "100%"
        textContent.style.textDecoration = "line-through"
    }
    else {
        tickCSS.style.opacity = "0%"
        textContent.style.textDecoration = "none"
    }
}
function tickFour(eve) {
    tickCounter4 += 1

    let tickCSS = document.getElementById("tick4") //Props need rid
    let textContent = document.getElementById("textFour")
    if (tickCounter4 % 2 === 0) {
        tickCSS.style.opacity = "100%"
        textContent.style.textDecoration = "line-through"
    }
    else {
        tickCSS.style.opacity = "0%"
        textContent.style.textDecoration = "none"
    }
}
function tickFive(eve) {
    tickCounter5 += 1

    let tickCSS = document.getElementById("tick5") //Props need rid
    let textContent = document.getElementById("textFive")
    if (tickCounter5 % 2 === 0) {
        tickCSS.style.opacity = "100%"
        textContent.style.textDecoration = "line-through"
    }
    else {
        tickCSS.style.opacity = "0%"
        textContent.style.textDecoration = "none"
    }
}
function tickSix(eve) {
    tickCounter6 += 1

    let tickCSS = document.getElementById("tick6") //Props need rid
    let textContent = document.getElementById("textSix")
    if (tickCounter6 % 2 === 0) {
        tickCSS.style.opacity = "100%"
        textContent.style.textDecoration = "line-through"
    }
    else {
        tickCSS.style.opacity = "0%"
        textContent.style.textDecoration = "none"
    }
}

//Remover Funnctions 
const item = document.getElementById("taskItem")
const itemOne = document.getElementById("taskItem1")
const itemTwo = document.getElementById("taskItem2")
const itemThree = document.getElementById("taskItem3")
const itemFour = document.getElementById("taskItem4")
const itemFive = document.getElementById("taskItem5")
const itemSix = document.getElementById("taskItem6")

//Will need to untick in as part of the function
//And clear text element
function removeFunct(eve) {

    console.log("Cross clicked!")
    item.style.display = "none"
}

function removeFunctOne(eve) {

    textArray.splice(0, 1)
    textContentCounter -= 1
    const text = document.getElementById("textOne")
    text.textContent = ``

    itemOne.style.display = "none"
}
function removeFunctTwo(eve) {

    textArray.splice(1, 1)
    textContentCounter -= 1
    const text = document.getElementById("textTwo")
    text.textContent = ``


    itemTwo.style.display = "none"
}
function removeFunctThree(eve) {

    textArray.splice(2, 1)
    textContentCounter -= 1
    const text = document.getElementById("textThree")
    text.textContent = ``

    itemThree.style.display = "none"
}
function removeFunctFour(eve) {

    textArray.splice(3, 1)

    textContentCounter -= 1
    const text = document.getElementById("textFour")
    text.textContent = ``

    itemFour.style.display = "none"
}
function removeFunctFive(eve) {

    textArray.splice(4, 1)

    text.textContent = ``

    textContentCounter -= 1

    itemFive.style.display = "none"
}
function removeFunctSix(eve) {

    textArray.splice(4, 1)
    const text = document.getElementById("textSix")
    text.textContent = ``

    textContentCounter -= 1

    itemSix.style.display = "none"
}




//Item Makers

function itemMakerOne(arg) {
    itemCounter += 1
    const newItem = document.getElementById("taskItem1")
    newItem.style.display = "flex"


    textOne.textContent = `${arg}`
    return
}

function itemMakerTwo(arg) {
    itemCounter += 1
    const newItem = document.getElementById("taskItem2")
    newItem.style.display = "flex"



    textTwo.textContent = `${arg}`
    return
}

function itemMakerThree(arg) {
    itemCounter += 1
    const newItem = document.getElementById("taskItem3")
    newItem.style.display = "flex"


    textThree.textContent = `${arg}`
    return
}

function itemMakerFour(arg) {
    itemCounter += 1
    const newItem = document.getElementById("taskItem4")
    newItem.style.display = "flex"


    textFour.textContent = `${arg}`
    return
}

function itemMakerFive(arg) {
    itemCounter += 1
    const newItem = document.getElementById("taskItem5")
    newItem.style.display = "flex"


    textFive.textContent = `${arg}`
    return
}

function itemMakerSix(arg) {
    itemCounter += 1
    const newItem = document.getElementById("taskItem6")
    newItem.style.display = "flex"
    console.log(textArray[textContentCounter])


    textSix.textContent = `${arg}`
    return
}