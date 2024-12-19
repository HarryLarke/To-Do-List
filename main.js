console.log("Active")

//GETTER
let form = document.getElementById("submit")
let rawInput = document.getElementById("taskInput")

let taskHolder = document.getElementById("itemHolder")




//COUNTERS
let textContentCounter = -1
let itemCounter = 0
let tickCounter = 1
let crossCounter = 1

//OBJECTS 
const textArray = [] //Save??


//LISTENERS 
const submissionListener = form.addEventListener("submit", submission, false)



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

function itemMaker(textArray) {
    console.log(textArray)

    taskHolder.insertAdjacentHTML("afterbegin", `<div class="task-item" id="taskItem1">
                <div class="box" id="tickBox1">
                    <div class="tick" id="tick1">
                        <div class="line-one__tick"></div>
                        <div class="line-two__tick"></div>
                    </div>
                </div> <p class="text" id="text">Hello</p>
                <div class="box" id="crossBox1">
                    <div class="cross" id="cross">
                        <div class="line-one__cross"></div>
                        <div class="line-two__cross"></div>
                    </div>
                </div>
            </div>`  )


}