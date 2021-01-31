const myQuiz = [
    {question: 'True or False? Crocodiles do not have sweat glands.', answer: 'True'},
    {question: 'True or False? Hummingbirds are the only bird that cannot walk.', answer: 'True'},

];

const randomQuestion = Math.round(Math.random() * (myQuiz.length - 1));
console.log(randomQuestion);

const userAnswer = window.prompt(myQuiz[randomQuestion].question);
console.log(userAnswer);

window.alert('You answered ' + userAnswer + '. The correct answer was ' + myQuiz[randomQuestion].answer + '!');