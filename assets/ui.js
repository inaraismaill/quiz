class UI {

    showData(data, questionS, answerS, num) {

        questionS.innerHTML = `
            <h3>${data[num].question}?</h3>
        `
        console.log(data)
        answerS.innerHTML = ``
        const allAnswers = [data[num].correct_answer, ...data[num].incorrect_answers];

        for (let i = allAnswers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
        }

        allAnswers.forEach((answer) => {

            var z = document.createElement('div');
            
            z.innerHTML =
                `<div  class="variant">
                    <span><input type="radio" id="${answer}" name="drone" value=${answer}> <label for="${answer}">${answer}</label></span>
                   
                </div>`;

            answerS.appendChild(z)
        });

    }
    disabled(input){
       input.setAttribute('disabled', '');
    }
    showPoint(point) {
        score.innerHTML = `
        <h2>${point}</h2>
        `
    }
    showMessage(message, body, color) {
        const mes = document.createElement("div")

        mes.id = "message"
        mes.style.backgroundColor = color
        mes.textContent = message
        body.appendChild(mes)
        setTimeout(() => { mes.remove() }, 2000);
    }

}