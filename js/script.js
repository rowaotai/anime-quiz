const quizData = [
    {
        image: 'image/image-1-famale.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 0
    },
    {
        image: 'image/image-2-famale.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 0
    },
    {
        image: 'image/image-3-famale.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 0
    },
    {
        image: 'image/image-4-famale.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 0
    },
    {
        image: 'image/image-5-famale.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 0
    },
    {
        image: 'image/image-6-famale.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 0
    },
    {
        image: 'image/image-7-famale.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 0
    },
    {
        image: 'image/image-8-famale.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 0
    },
    {
        image: 'image/image-9-famale.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 0
    },
    {
        image: 'image/image-1-male.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 1
    },
    {
        image: 'image/image-2-male.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 1
    },
    {
        image: 'image/image-3-male.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 1
    },
    {
        image: 'image/image-4-male.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 1
    },
    {
        image: 'image/image-5-male.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 1
    },
    {
        image: 'image/image-6-male.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 1
    },
    {
        image: 'image/image-7-male.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 1
    },
    {
        image: 'image/image-8-male.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 1
    },
    {
        image: 'image/image-9-male.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 1
    },
    {
        image: 'image/image-10-male.jpg',
        option: ['Famale', 'Male'],
        correctAnswer: 1
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffle(quizData);

let currentQuestionIndex = 0;

const quizImage = document.getElementById('image-qustion');
const option1Button = document.getElementById('male');
const option2Button = document.getElementById('famale');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quizImage.src = currentQuestion.image;
    option1Button.textContent = currentQuestion.option[0];
    option2Button.textContent = currentQuestion.option[1];

    option1Button.onclick = () => checkAnswer(0);
    option2Button.onclick = () => checkAnswer(1);
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            alert('Quiz completed!');
        }
    } else {
        alert('Wrong answer! Try again.');
    }
}

loadQuestion();
