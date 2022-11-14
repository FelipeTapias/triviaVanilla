var questions = ['QuestionOne', 'QuestionTwo', 'QuestionThree'];
var resultAnswer = ['result-good', 'result-wrong']

initialGame();

function initialGame() {
    hiddenQuestion(0);
    hiddenAllResultAnswer();
    showSpinner(false);
}

function answeredQuestion(step, answer) {
    console.log(step, answer);
    setTimeout(() => {
        hiddenQuestion(step);
        hiddenAllResultAnswer();
    }, 1000);
    showSpinner(true);
    setTimeout(() => {
        showSpinner(false);
        showResultAnswer(answer);
    }, 500);
}

function hiddenQuestion(question) {
    for(var i = 0; i < questions.length; i++) {
        if(i != question) {
            document.getElementById(questions[i]).style.display = 'none';
        }
    }
    document.getElementById(questions[question]).style.display = 'block';
    
}

function hiddenAllResultAnswer() {
    resultAnswer.forEach(element => {
        document.getElementById(element).style.display = 'none';
    });
}

function showResultAnswer(answer) {
    if(answer) {
        document.getElementById('result-good').style.display = 'block';
    }else {
        document.getElementById('result-wrong').style.display = 'block';
    }
}

function showSpinner(show) {
    if(show){
        document.getElementById('spinner').style.display = 'block';
    }else {
        document.getElementById('spinner').style.display = 'none';
    }
}