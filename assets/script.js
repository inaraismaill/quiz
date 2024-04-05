const answers = document.getElementById("answers")
const question = document.getElementById("question")
const score = document.getElementById("score")
const answer = document.querySelectorAll(".variant");
const input = document.getElementsByName("drone")
const body = document.getElementById("buttons")

let point = 0
let questionNumber = -1

const data = new Questions()
const ui = new UI()

let newData = null;

evenListener()

function evenListener() {
    document.addEventListener("DOMContentLoaded", getQuestion)
}

async function getQuestion() {
    await data.getData()
        .then(da => { newData = da })
        .catch((err) => console.error(err))
    nextQuestion()
}

function checkedElement() {

    var checkRadio = document.querySelector('input[name="drone"]:checked')

    const trueAnswer = newData[questionNumber].correct_answer

    if (checkRadio !== null) {
        if (checkRadio.value === trueAnswer) {
            point += 10
            ui.showPoint(point)
            ui.showMessage("tebriklerr", body, "green")
        }
        else {
            document.getElementById(checkRadio.id).parentElement.parentElement.style.backgroundColor = "red"
            ui.showMessage("false", body, "red")
        }
        document.getElementById(trueAnswer).parentElement.parentElement.style.backgroundColor = "green"
       
        input.forEach( x=> x.setAttribute('disabled', ''))
    }
    else {
        ui.showMessage("answer not selected", body, "blue")
    }
}

function oldQuestion() {
    if (questionNumber < 0) {
        ui.showData(newData, question, answers, --questionNumber)
    }
    else{
        ui.showMessage("no question", body, "blue")
    }
    
}
function nextQuestion() {
    ui.showData(newData, question, answers, ++questionNumber)
}
