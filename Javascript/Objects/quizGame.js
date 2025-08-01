//Build a Quiz Game

let questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "O2", "CO2"],
    answer: "H2O"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Geography",
    question: "Which is the largest continent by area?",
    choices: ["Asia", "Africa", "Europe"],
    answer: "Asia"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    category: "Technology",
    question: "What does 'HTML' stand for?",
    choices: ["HyperText Markup Language", "Home Tool Markup Language", "Hyper Tool Mark Language"],
    answer: "HyperText Markup Language"
  }
];

const getRandomQuestion = (questions) => {
    let randomNum = Math.floor(Math.random() * questions.length);
    return questions[randomNum];
}

const getRandomComputerChoice  = (choices) => {
    let randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}

const getResults   = (questionSelected , computerChoise ) => {
    
    if(questionSelected.answer === computerChoise){
        return "The computer's choice is correct!"
    }else{
        return `The computer's choice is wrong. The correct answer is: ${questionSelected.answer}`   
    }

}

console.log(getRandomQuestion(questions) )