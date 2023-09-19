const Questions = [{
    q: "What interntaional country does Lionel Messi play for?",
    a: [{ text: "Argentina", isCorrect: true},
    { text: "Brazil", isCorrect: false},
    { text: "Uruguay", isCorrect: false},
    { text: "Spain", isCorrect: false}
    ]
},

{
    q: "Which internatinoal team won the 2018 World Cup in Russia?",
    a: [{ text: "Iran", isCorrect: false, isSelected: false},
    { text: "Russia", isCorrect: false},
    {text: "Croatia", isCorrect: false},
    { text: "France", isCorrect: true}
    ]
},

{
    q: "What team did Lionel Messi originally played for?",
    a: [{ text: "Real Madrid", isCorrect: false},
    { text: "FC Barcelona", isCorrect: true},
    { text: "Paris Saint-Germain", isCorrect: false},
    { text: "Inter Miami", isCorrect: false},
    ]
},

{
    q: "What team did Cristiano Ronaldo originally played for?",
    a: [{ text: "Real Madrid", isCorrect: false},
    { text: "Manchester United", isCorrect: false},
    { text: "Sporting Lisbon", isCorrect: true},
    { text: "Al-Nassr Club", isCorrect: false},
    ]
},

{
    q: "What international country does Cristiano Ronaldo plays for?",
    a: [{ text: "Spain", isCorrect: false},
    { text: "Portugal", isCorrect: true},
    { text: "Saudi Arabia", isCorrect: false},
    { text: "Morocco", isCorrect: false},
    ]
},

{
    q: "Which country won the 2022 Men's World Cup?",
    a: [{ text: "England", isCorrect: false},
    { text: "Morocco", isCorrect: false},
    { text: "France", isCorrect: false},
    { text: "Argentina", isCorrect: true},
    ]
},

{
    q: "Which country won the 2023 Women's World Cup?",
    a: [{ text: "Spain", isCorrect: true},
    { text: "Philippines", isCorrect: false},
    { text: "France", isCorrect: false},
    { text: "Brazil", isCorrect: false},
    ]
},

{
    q: "Which organization is the governing body of soccer/football all around the world?",
    a: [{ text: "UEFA", isCorrect: false},
    { text: "CONCACAF", isCorrect: false},
    { text: "FIFA", isCorrect: true},
    { text: "CONMEBOL", isCorrect: false},
    ]
},

{
    q: "Which two teams compete in the event called, 'El Clasico'?",
    a: [{ text: "Inter Milan & AC Milan", isCorrect: false},
    { text: "FC Barcelona & Real Madrid", isCorrect: true},
    { text: "Manchester City & Manchester United", isCorrect: false},
    { text: "Los Angeles FC & Los Angeles Galaxy", isCorrect: false},
    ]
},

{
    q: "Which country was soccer invented in?",
    a: [{ text: "England", isCorrect: true},
    { text: "Mexico", isCorrect: false},
    { text: "France", isCorrect: false},
    { text: "Argentina", isCorrect: true},
    ]
},

]

let currentQuestions = 0
let score = 0

function loadQuestions() {
    const question = document.getElementbyId("questions2")
    const answer = document.getElementById("answers2")

    question.textContent = Questions[currentQuestions].q;
    answer.innerHTML = ""

    for (let i = 0; i < Questions[currentQuestions].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input")
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currentQuestions].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        answer.appendChild(choicesdiv);
    }
}

loadQuestions();

function loadScore(){
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}!`
}

function nextQuestion() {
    if (currentQuestions < Questions.length - 1) {
        currentQuestions++;
        loadQuestions();
    } else {
        document.getElementById("answers2").remove()
        document.getElementById("questions2").remove()
        document.getElementById("buttons").remove()
        loadScore();
    }
}

function checkAnswers() {
    const selectedAnswers = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currentQuestions].a[selectedAnswers].isCorrect) {
        score++;
        console.log("Correct!")
        nextQuestion();
    } else {
        nextQuestion();
    }
}