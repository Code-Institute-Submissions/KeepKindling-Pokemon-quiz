const startButton = document.getElementById('startButton');
const questionContainerElement = document.getElementById('question-container');
const answerElement = document.getElementById('answer');
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')
const answerBoxElement = document.getElementById('answer-box')
const scoreElement = document.getElementById('score')
  
let integer = 0
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
startButton.addEventListener('click', () => {
    currentQuestionIndex++
    selectNextQuestion()
  })

/**
 * This function displays questions by searching inside the questions
 * array and creates buttons which are then filled with the answers 
 * relevant to the question displayed. 
 */
function displayQuestion (question) {
    questionElement.innerText = question.question
    answerBoxElement.innerHTML = ''
    question.answers.forEach(answer => {
        console.log(answerButtonElement)
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBoxElement.appendChild(button)
    }) 
}

/**
 * This function randomly shuffles the questions and it's
 * answers inside the question index so the displayed questions 
 * are never in the same order as previous games.
 */
function selectNextQuestion() {
    displayQuestion(shuffledQuestions[currentQuestionIndex])
}

/**
 * The first function used which uses the sort attribute to shuffle 
 * the questions and calls the displayScore and selectNextQuestion functions.
 */
function startGame() {
    console.log("Game Started!")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    integer = 0
    displayScore()
    selectNextQuestion()
}

/**
 * This function notes which answer is selected and checks 
 * whether its correct boolean is true and then determines if
 * it should call incrementScore or the incrementIncorrect functions. 
 */
function selectAnswer(e) {
    let clickedButton = e.target
    console.log(clickedButton)
    let classToAdd
    if (clickedButton.dataset.correct == 'true') {
        incrementScore()
        classToAdd = 'correct'
    } else {
        incrementIncorrect()
        classToAdd = 'incorrect'
    }

    clickedButton.classList.add(classToAdd)
    setTimeout(() => {
        currentQuestionIndex++
        selectNextQuestion()
    },500)

}

/**
 * This function changes the text inside the element with 
 * an id of score to integer(score) out of /10.
 */
function displayScore () {
    document.getElementById("score").innerText = integer + "/10";
}

/**
 * This function logs a correct answer and adds 1 to the integer
 * which is then displayed by calling the appropriate function.
 */
function incrementScore() {
    console.log('score + 1')
    integer++
	displayScore()
}

/**
 * This function logs incorrect answer and does not increment 
 * to the integer but the user will know they got the answer wrong
 * as there is css the highlights the selected answer in red for incorrect.
 */
function incrementIncorrect() {
    console.log('score incorrect')
    integer
    displayScore()
}

// This array houses all questions and choice answers relevant to them.
const questions = [{
    question: 'How old was Ashe when he began his journey?',
    answers: [
        { text: '12', correct: true},
        { text: '10', correct: false},
        { text: '11', correct: false}
    ]
},
{
    question: 'What is Mistys favorite Pokemon?',
    answers: [
        { text: 'Staryu', correct: true},
        { text: 'Seel', correct: false},
        { text: 'Starmie', correct: false}
    ]
},
{
    question: 'How many siblings does Brock have?',
    answers: [
        { text: '9', correct: true},
        { text: '5', correct: false},
        { text: '3', correct: false}
    ]
},
{
    question: "Who is Ashe's rival?",
    answers: [
        { text: 'Gary', correct: true},
        { text: 'Brock', correct: false},
        { text: 'Misty', correct: false}
    ]
},
{
    question: 'What was the first Pokemon that Ashe caught?',
    answers: [
        { text: 'Caterpie', correct: true},
        { text: 'Mankey', correct: false},
        { text: 'Pidgey', correct: false}
    ]
},
{
    question: 'Which giant Pokemon attacked the city Porta Vista?',
    answers: [
        { text: 'Tentacruel', correct: true},
        { text: 'Kangaskhan', correct: false},
        { text: 'Rhydon', correct: false}
    ]
},
{
    question: 'How does Pikachu evolve into Riachu?',
    answers: [
        { text: 'Thunder stone', correct: true},
        { text: 'Lightning stone', correct: false},
        { text: 'Electric stone', correct: false}
    ]
},
{
    question: 'Why was Ashe late to picking his first Pokemon?',
    answers: [
        { text: 'He overslept', correct: true},
        { text: 'His mums car would not start', correct: false},
        { text: 'He was ambushed by team rocket', correct: false}
    ]
},
{
    question: 'What did Ashe steal from Misty?',
    answers: [
        { text: 'A Bike', correct: true},
        { text: 'A Gym Badge', correct: false},
        { text: 'A Scooter', correct: false}
    ]
},
{
    question: 'How many Pokemon are there?',
    answers: [
        { text: '151', correct: true},
        { text: '162', correct: false},
        { text: '157', correct: false}
    ]
},
]

startGame();