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





//COUNTERS
let textContentCounter = -1
let eventCounter = 0

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





//FUNCTIONS
function submission(eve) {
    //Need an if statement to check for content!!!!!

    eve.preventDefault();
    textContentCounter += 1

    console.log(textContentCounter)
    const textString = rawInput.value.toString()
    let textThrow = textString.trim()
    textArray.push(textThrow)
    console.log(textArray)
    rawInput.value = ""

    if (textContentCounter === 0) {
        itemMakerOne()
    }
    if (textContentCounter === 1) {
        itemMakerOne()
    }
    if (textContentCounter === 2) {
        itemMakerOne()
    }
    if (textContentCounter === 3) {
        itemMakerOne()
    }
    if (textContentCounter === 4) {
        itemMakerOne()
    }
    if (textContentCounter === 5) {
        itemMakerOne()
    }
    if (textContentCounter === 6) {
        textContentCounter -= 1
        return
    }
    else {

        return textThrow
    }//Save to a database or remove this line?????? Is this function too big? Will also need to save array!

}

//Tick Functions ----- Make this dryer?

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

function removeFunct(eve) {
    const item = document.getElementById("taskItem")
    console.log("Cross clicked!")
    item.style.display = "none"
}

function removeFunctOne(eve) {

    textArray.splice(0, 1)
    textContentCounter -= 1
    const itemOne = document.getElementById("taskItem1")
    itemOne.style.display = "none"
}
function removeFunctTwo(eve) {

    textArray.splice(1, 1)
    textContentCounter -= 1
    const itemTwo = document.getElementById("taskItem2")
    itemTwo.style.display = "none"
}
function removeFunctThree(eve) {

    textArray.splice(2, 1)
    textContentCounter -= 1
    const itemThree = document.getElementById("taskItem3")
    itemThree.style.display = "none"
}
function removeFunctFour(eve) {

    textArray.splice(3, 1)

    textContentCounter -= 1
    const itemFour = document.getElementById("taskItem4")
    itemFour.style.display = "none"
}
function removeFunctFive(eve) {

    textArray.splice(4, 1)

    textContentCounter -= 1
    const itemFive = document.getElementById("taskItem5")
    itemFive.style.display = "none"
}
function removeFunctSix(eve) {

    textArray.splice(4, 1)

    textContentCounter -= 1
    const itemSix = document.getElementById("taskItem6")
    itemSix.style.display = "none"
}




//Item Makers

//Going back to making the element to get more bespoke button an data selection
function itemMakerOne() {
    itemCounter += 1
    eventCounter += 1

    function maker(html) {


        const template = document.createElement("template")

        template.innerHTML = html.trim();
        return template.content.firstElementChild
    }

    let textContent = textArray[textContentCounter] //May need to change this counter too! 
    const myList = maker(`div class="task-item__example" id="taskItem1">
        <div class="box" id="tickBox1">
            <div class="tick" id="tick1">
                <div class="line-one__tick"></div>
                <div class="line-two__tick"></div>
            </div>
        </div>
        <p class="text" id="textOne">${textContent}</p>
        <div class="box" id="crossBox1">
            <div class="cross" id="cross1">
                <div class="line-one__cross"></div>
                <div class="line-two__cross"></div>
            </div>
        </div>
    </div>`)


}




