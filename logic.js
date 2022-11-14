var step = 1;
var questions = ['QuestionOne', 'QuestionTwo', 'QuestionThree'];

hiddenQuestion(0);

function answeredQuestion(step, answer) {
    console.log(step, answer);
    hiddenQuestion(step);
}

function hiddenQuestion(question) {
    
    for(var i = 0; i < questions.length; i++) {
        if(i != question) {
            document.getElementById(questions[i]).style.display = 'none';
        }
    }
    document.getElementById(questions[question]).style.display = 'block';
    
}