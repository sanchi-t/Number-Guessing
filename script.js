'use strict';
let answer = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
console.log(answer);
document.querySelector('button.btn.check').addEventListener('click',function(){
    const userInput = Number(document.querySelector('.guess').value);
    console.log(typeof userInput);


    if(score<=0){
        document.querySelector('p.message').textContent="You Lost :(";
        
    }

    if((!userInput || typeof userInput !== "number") && userInput!="0"){
        document.querySelector('p.message').textContent="🛑 ENTER A VALID INPUT";
    }

    else if(answer===userInput){
        console.log("right answer");
        document.querySelector('p.message').textContent="🎉CORRECT NUMBER!!🎉";
        document.querySelector('.score').textContent=score;
        if(score>highScore){
            highScore=score;
        }
        document.querySelector('.highscore').textContent=highScore;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('div.number').textContent=answer;
        document.querySelector('div.number').style.width='30rem'

    }

    else if(answer>userInput){
        if(answer-userInput>5){
            document.querySelector('p.message').textContent="Too Low!";
            score-=2;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('p.message').textContent="A little Low!";
            score--;
            document.querySelector('.score').textContent=score;
        }
    }

    else if(answer<userInput){
        if(userInput-answer>5){
            document.querySelector('p.message').textContent="Too High!";
            score-=2;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('p.message').textContent="A little High!";
            score--;
            document.querySelector('.score').textContent=score;
        }
    }

    


});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('p.message').textContent="Start guessing...";
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('div.number').textContent="?";
    document.querySelector('div.number').style.width="15rem";
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.guess').value='';

});